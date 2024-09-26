// your-entity.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YourEntityService } from './service';
import { YourEntityController } from './controller';
import { YourEntity } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([YourEntity])],
  providers: [YourEntityService],
  controllers: [YourEntityController],
})
export class YourEntityModule {}
