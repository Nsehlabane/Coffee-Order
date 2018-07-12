import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeaPage } from './tea';

@NgModule({
  declarations: [
    TeaPage,
  ],
  imports: [
    IonicPageModule.forChild(TeaPage),
  ],
})
export class TeaPageModule {}
