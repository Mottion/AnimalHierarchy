import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntrypointsService } from './entrypoints.service';
import { getHierarchyDTO } from './dto/get-hierarchy.dto';
import { createHierarchyDTO } from './dto/create-hierarchy.dto';

@Controller('entrypoints')
export class EntrypointsController {
  constructor(
    private readonly entrypointsService: EntrypointsService
  ){}

  @Post("get-hierarchy")
  async getHierarchy(@Body() body: getHierarchyDTO){
    return await this.entrypointsService.getHierarchy(body)
  }

  @Get("get-archives")
  async getArchives(){
    return await this.entrypointsService.getArchives()
  }

  @Post("create-archive")
  async createArchive(@Body() body: createHierarchyDTO){
    return await this.entrypointsService.createArchive(body);
  }
}
