import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FluxPage } from './flux';

@NgModule({
  declarations: [
    FluxPage,
  ],
  imports: [
    IonicPageModule.forChild(FluxPage),
  ],
})
export class FluxPageModule {}
