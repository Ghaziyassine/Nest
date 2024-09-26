// your-entity.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { YourEntity } from '../entities/entity';

@Injectable()
export class YourEntityService {
  constructor(
    @InjectRepository(YourEntity)
    private readonly yourEntityRepository: Repository<YourEntity>,
  ) {}

  findAll(): Promise<YourEntity[]> {
    return this.yourEntityRepository.find();
  }

  create(item: Partial<YourEntity>): Promise<YourEntity> {
    const newItem = this.yourEntityRepository.create(item);
    return this.yourEntityRepository.save(newItem);
  }
}
