import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return `Hola mundo! ${this.apiKey}`;
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
