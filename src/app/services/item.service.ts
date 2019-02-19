import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Items } from '../modules/items'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 
   itemArray: Observable<Items[]>;
     constructor(private db: AngularFirestore) { 
     this.itemArray=db.collection('items').valueChanges();
  
       }

       getItems(){
         return this.itemArray;
       }


}
