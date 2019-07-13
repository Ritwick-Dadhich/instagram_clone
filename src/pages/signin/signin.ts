import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController, Platform, ToastController, List , MenuController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { StorageProvider,Item} from '../../../src/providers/storage/storage';



@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  form: any;
    
  errorSigninMessage: any;
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(public navCtrl: NavController, public alertController: AlertController,
    private storageService: StorageProvider, private plt: Platform, private toastController: ToastController, public menu: MenuController) {
    this.form = {};

  }

  ionViewWillEnter() {
    this.menu.enable(false);
    }
    ionViewWillLeave() {
      this.menu.enable(true);
      }


  login(email,password){

    this.newItem.title=email;
    this.newItem.value=password;
    
if (email=="admin" && password=="admin" && this.validate()){
console.log(email,password);
this.navCtrl.setRoot(HomePage);
}
else{
  if(this.validate()){
  console.log("error");
  this.addItem();
  const alert = this.alertController.create({
    title: 'Error!!',
    message: 'Network Connection issue please try again',
    buttons: ['OK']
  });
  alert.present();
}
}
    

}



 addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();
 
    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
     // this.showToast('Item added!')
      //this.loadItems(); // Or add it to the array directly
    });
  }




  showToast(msg) {
    const toast = this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  forgot(){
    const alert = this.alertController.create({
      title: 'Error!!',
      message: 'Network Connection issue please try again',
      buttons: ['OK']
    });
    alert.present();

  }

  newuser(){
    const alert = this.alertController.create({
      title: 'Error!!',
      message: 'Please Check Your Internet Connection',
      buttons: ['OK']
    });
    alert.present();





  }

validate(){
  console.log("Validate form");
  if(this.newItem.title == undefined || this.newItem.title == ''){
  console.log("Validate form error");
    this.errorSigninMessage = 'Please enter email';
    return false;
  }
  if(this.newItem.value == undefined || this.newItem.value == ''){
  console.log("Validate form error2");
    this.errorSigninMessage = 'Please enter password';
    return false;
  }
  return true;
}

}

