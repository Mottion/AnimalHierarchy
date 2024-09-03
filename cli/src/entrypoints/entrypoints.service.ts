import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { getHierarchyDTO } from './dto/get-hierarchy.dto';
import { checkArguments, getJsonFile, outputResponse, searchWord } from 'main';
import { createHierarchyDTO } from './dto/create-hierarchy.dto';
const fs = require('fs');
const path = require('path');

@Injectable()
export class EntrypointsService {
  
  async getHierarchy(body: getHierarchyDTO){
    if(!checkArguments(body) || !body.message) {
      throw new InternalServerErrorException("Argument validation failed");
    }

    const file = await getJsonFile();
    const correspondences = await searchWord(file, body.message);
    const resultMessage = outputResponse(correspondences, body);
    return {status: 200, message: resultMessage}
  }

  async getArchives(){
    const fileNames: string[] = [];
    const directoryPath = path.join(__dirname, '../archives');

    if(!fs.existsSync(directoryPath)) return [];

    fs.readdirSync(directoryPath).forEach((file: any) => {
      const fullPath = path.join(directoryPath, file);
      if (fs.statSync(fullPath).isFile()) {
        fileNames.push(file);
      }
    });

    return fileNames;
  }

  async createArchive(body: createHierarchyDTO){
    const directoryPath = path.join(__dirname, '../archives');
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
    const filePath = path.join(directoryPath, `${body.title}.json`);
    await fs.writeFileSync(filePath, JSON.stringify(body, null, 2), 'utf8');
    return {status: 201, message: "archive created"}
  }
}
