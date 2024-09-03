import { Module } from '@nestjs/common';
import { EntrypointsService } from './entrypoints.service';
import { EntrypointsController } from './entrypoints.controller';

@Module({
  controllers: [EntrypointsController],
  providers: [EntrypointsService],
})
export class EntrypointsModule {}
