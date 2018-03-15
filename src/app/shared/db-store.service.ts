import { Injectable } from '@angular/core';
import { IndexedDBAngular } from '../../../node_modules/indexeddb-angular'; 

@Injectable()
export class DbStoreService {
  private db = new IndexedDBAngular('myDb', 1);
  
  constructor() { 
    this.db.createStore(1, this.createDB);
  }

  createDB(db) {
    db.currentTarget.result.createObjectStore('example');
  }

}
