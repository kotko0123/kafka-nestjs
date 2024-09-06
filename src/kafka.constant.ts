import { KafkaOptions, Transport } from '@nestjs/microservices';

const KAFKA_OPTION: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'consumer',
      brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094'],
    },
    consumer: {
      groupId: 'my-consumer',
    }
  },
};

export { KAFKA_OPTION };
