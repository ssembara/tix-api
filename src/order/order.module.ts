import { Module } from '@nestjs/common';
import { OrderEntity } from './entities/order.entity';
import { OrderService } from './services/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  providers: [OrderService],
})
export class OrderModule {}
