import { Component } from '@angular/core';
import { Event } from '../../../models/event';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css',
})
export class ListEventComponent {
  searchItem: string = ' ';

 constructor(private data:DataService){}
  //increment nbLikes

  incLikes(event: Event) {
    return event.nbrLikes++;
  }

  buy(event: Event) {
    return event.nbPlaces--;
  }

  dateExpire(event: Event) {
    return new Date(event.date) < new Date();
  }

  filter() {
    return this.data.getEventList().filter(
      (eventItem) =>
        eventItem.titre.toLowerCase().includes(this.searchItem.toLowerCase()) ||
        eventItem.lieu.toLowerCase().includes(this.searchItem.toLowerCase())
    );
  }
}
