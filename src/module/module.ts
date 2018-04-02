import { NgModule } from '@angular/core';

import { AddToCalendarService } from './../service/add-to-calendar.service';

import { CalendarTypeEnum } from './../model/calendar-type.enum';
import { EventModel } from './../model/event.model';

@NgModule({
  declarations: [],
  providers: [AddToCalendarService],
  exports: []
})

export class AddToCalendarModule { }
