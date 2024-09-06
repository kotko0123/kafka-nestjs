import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ConsumerService {

  read(message: any) {
    Logger.log(`Message: ${JSON.stringify(message)}`);
  }
}
