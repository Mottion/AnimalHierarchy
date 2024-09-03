import { Module } from '@nestjs/common';
import { EntrypointsModule } from './entrypoints/entrypoints.module';

@Module({
  imports: [EntrypointsModule]
})
export class AppModule {}
