// your-entity.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { YourEntityService } from 'src/services/service';
import { YourEntity } from 'src/entities/entity';

@Controller('items')
export class YourEntityController {
  constructor(private readonly yourEntityService: YourEntityService) {}

  @Get()
  getAll(): Promise<YourEntity[]> {
    return this.yourEntityService.findAll();
  }

  @Post()
  create(@Body() createDto: Partial<YourEntity>): Promise<YourEntity> {
    return this.yourEntityService.create(createDto);
  }
}
