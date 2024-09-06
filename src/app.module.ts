import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConsumerModule } from './consumer/consumer.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [UsersModule, ConsumerModule, PublisherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
