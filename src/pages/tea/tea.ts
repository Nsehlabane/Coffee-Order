import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tea',
  templateUrl: 'tea.html',
})
export class TeaPage {
//VARIABLES HERE
qauntitea=0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  cup(value:number):void{
    this.qauntitea +=value;
  }

reset():void{
  this.qauntitea=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeaPage');
  }

}
