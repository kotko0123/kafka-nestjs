import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_OPTION } from '../kafka.constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_CLIENT',
        transport: Transport.KAFKA,
        options: KAFKA_OPTION.options,
      },
    ]),
  ],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {
}
