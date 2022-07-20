import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
/**
 * Escutando user-topic que irá receber user id do client
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user-topic') // nome
  getHello(@Payload() message) {
    const id: number = message.value.userid;
    return this.appService.findUserByUserId(id);
  }
}
