import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { ListEventComponent } from './list-event/list-event.component';
import { CardComponent } from './card/card.component';
import { CapitalizeFirstPipe } from '../../shared/pipes/capitalize-first.pipe';

@NgModule({
  declarations: [EventsComponent,ListEventComponent, EventDetailsComponent, CardComponent,CapitalizeFirstPipe],
  imports: [CommonModule, EventsRoutingModule, FormsModule],
})
export class EventsModule {}
