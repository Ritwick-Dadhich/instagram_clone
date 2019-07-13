import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';





export interface Item {
  id: number,
  title: any,
  value: any,
  modified: number
}
const ITEMS_KEY = 'my-items';


@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) { }
 
  // CREATE
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

// READ
getItems(): Promise<Item[]> {
  return this.storage.get(ITEMS_KEY);
}

clean(){
  this.storage.clear();
}


}
