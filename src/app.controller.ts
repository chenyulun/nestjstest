import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(['health', '__health'])
  @Header(
    'Cache-Control',
    'max-age=0, must-revalidate, no-cache, no-store, private',
  )
  getHealth(): { check: string } {
    return { check: 'OK' };
  }
}
