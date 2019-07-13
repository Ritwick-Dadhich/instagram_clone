import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController) {
      this.navCtrl.setRoot(SigninPage);

  }

}
