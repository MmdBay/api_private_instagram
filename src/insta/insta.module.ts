import { Module } from '@nestjs/common';
import { InstaService } from './insta.service';
import { WizgeramService } from './wizgeram.service';

@Module({
  providers: [InstaService, WizgeramService],
  exports: [InstaService, WizgeramService],
})
export class InstaModule {}
