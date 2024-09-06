import { Controller } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { Ctx, EventPattern, KafkaContext, Payload } from '@nestjs/microservices';
import { SubImageEvent } from './dto/sub-image.event';

@Controller()
export class ConsumerController {
  constructor(
    private readonly consumerService: ConsumerService,
  ) {
  }

  @EventPattern('pub-image')
  readMessage(@Payload() message: SubImageEvent, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
    const msg =
      `Receiving a new message from topic: ${context.getTopic()}: ` +
      JSON.stringify(originalMessage.value);
    console.log(msg);
    this.consumerService.read(message);
  }
}
