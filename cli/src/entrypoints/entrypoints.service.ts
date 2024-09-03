import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { getHierarchyDTO } from './dto/get-hierarchy.dto';
import { checkArguments, getJsonFile, outputResponse, searchWord } from 'main';

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
}
