import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemService } from './services/item.service';
import { Items } from './modules/items';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
 
  title = 'WebDevelopment';
  items :Items[];
  subscription:Subscription;
  constructor(private itemService:ItemService){

  }

  ngOnInit(): void {
   this.subscription=this.itemService.getItems().subscribe(items=>this.items=items);
  }

  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
}
