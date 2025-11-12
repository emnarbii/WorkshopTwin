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
  eventList: Event[] = [];
  filteredList: Event[] = [];
  constructor(private data: DataService) {}
  //increment nbLikes

  ngOnInit() {
    this.eventList = this.data.getEventList();
    this.filteredList = this.eventList;
  }
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
    console.log(this.filteredList);
    return this.filteredList;
    // .filter(
    //     (eventItem) =>
    //       eventItem.titre
    //         .toLowerCase()
    //         .includes(this.searchItem.toLowerCase()) ||
    //       eventItem.lieu.toLowerCase().includes(this.searchItem.toLowerCase())
    //   );
   
  }
  }
