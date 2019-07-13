import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController, Platform, ToastController, List } from 'ionic-angular';
import { StorageProvider, Item } from '../../../src/providers/storage/storage';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mylist')mylist: List;
  items: Item[] = [];
  newItem: Item = <Item>{};
  constructor(public navCtrl: NavController, public alertController: AlertController,
    private storageService: StorageProvider, private plt: Platform, private toastController: ToastController, private storage: Storage) {

      this.plt.ready().then(() => {
        this.loadItems();
      });
  }


  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
      console.log(items);
    });
  }
  clean(){
    this.storage.clear();
    this.loadItems();
  }
  
  doRefresh(event) {
    console.log("do refresh");
    setTimeout(() => {
      
      this.loadItems();
      
      
    }, 2000);
  //	event.cancel();
   event.complete();
  }

 


}


