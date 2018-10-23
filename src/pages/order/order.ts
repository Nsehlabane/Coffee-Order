import { CheckoutPage } from './../checkout/checkout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
checkoutPage:any;

  //VARIABLES HERE
  coffee=10;

  nwhipped=5;
  nchocolate=6;
  nhazel=8;
  total=0;
  xtotal=0;
  
  quantity=0;


 chocolate=false;
 whipped=false;
 hazel=false;

  private readonly newProperty = (this.coffee + this.nhazel + this.nwhipped);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 goToCheckout():void{
   


   this.totalFunction();
   this.navCtrl.push(CheckoutPage,{
     total:this.xtotal,});
 }
  


  cups(value:number):void{
    this.quantity +=value;
  }
  //FUNCTION HERE
  totalFunction():number{
   
  if (this.chocolate && this.hazel && this.whipped){
           this.xtotal=(this.coffee+this.nchocolate+this.nwhipped+this.nhazel)*this.quantity;
   } 
   else if(this.chocolate && this.hazel){
    this.xtotal=(this.coffee+this.nchocolate+this.nhazel)*this.quantity;
   }
   else if(this.chocolate && this.whipped){
    this.xtotal=(this.coffee+this.nchocolate+this.nwhipped)*this.quantity;
   }
   else if(this.hazel && this.whipped){
    this.xtotal=(this.coffee+this.nhazel+this.nwhipped)*this.quantity;
   }
   else if(this.chocolate){
     this.xtotal=(this.coffee+this.nchocolate)*this.quantity
   }
   else if(this.chocolate){
    this.xtotal=(this.coffee+this.nchocolate)*this.quantity
  } 
  else if(this.whipped){
     this.xtotal=(this.coffee+this.nwhipped)*this.quantity
   }
   else if(this.hazel){
    this.xtotal=(this.coffee+this.nhazel)*this.quantity
  }
  else if(this.quantity){
  this.xtotal=this.coffee*this.quantity
}
    return this.xtotal;
}
reset():void{
  this.quantity=0;
  }

  // next():void{
  //   this.navCtrl.push(CheckoutPage);
  // }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
 
}
