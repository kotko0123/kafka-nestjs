import { Body, Controller, Post } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PubImageDto } from '../publisher/dto/pub-image.dto';

@Controller("pub-image")
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Post()
  create(@Body() pubImageDto: PubImageDto) {
    return this.publisherService.create(pubImageDto);
  }
}
