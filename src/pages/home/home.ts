import { TeaPage } from './../tea/tea';
import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})




export class HomePage {


constructor(public navCtrl: NavController) {

  }
  tea():void{
    this.navCtrl.push(TeaPage)
}


  end():void{
    this.navCtrl.push(OrderPage)
  }
}
