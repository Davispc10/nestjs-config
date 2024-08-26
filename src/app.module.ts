import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigureModule } from './shared/infra/config/configure.module';

@Module({
  imports: [ConfigureModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
