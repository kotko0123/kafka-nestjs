import { Inject, Injectable, Logger } from '@nestjs/common';
import { PubImageDto } from '../publisher/dto/pub-image.dto';
import { ClientKafka } from '@nestjs/microservices';
import { PubImageEvent } from '../publisher/dto/pub-image.event';

@Injectable()
export class PublisherService {
  constructor(
    @Inject('KAFKA_CLIENT')
    private readonly clientKafka: ClientKafka,
  ) {}

  create({ id, url }: PubImageDto) {
    // 메세지를 생산하고 구독한 topic의 소비를 대기하고 반환
    // let observable = this.clientKafka.send('pub-image', new PubImageEvent(id, url));
    // observable.subscribe((result) => {
    //   console.log('send', result);
    // });
    Logger.log(`Message: ${JSON.stringify({ id, url })}`);
    // 메세지를 생산하고 생산한 메세지에 대한 메타데이터를 반환
    let emit = this.clientKafka.emit('pub-image', new PubImageEvent(id, url));
    emit.subscribe((result) => {
      console.log('emit', result);
    });
  }
}
