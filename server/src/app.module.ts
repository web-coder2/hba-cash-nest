import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HoldController } from './hold/hold.controller';

@Module({
  imports: [HoldController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
