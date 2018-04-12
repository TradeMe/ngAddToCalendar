import { NgModule } from '@angular/core';

import { NgAddToCalendarService } from './service/ng-add-to-calendar.service';

import { CalendarTypeEnum } from './model/calendar-type.enum';
import { ICalendarEvent } from './model/calendar-event.model';

@NgModule({
  declarations: [],
  providers: [NgAddToCalendarService],
  exports: []
})

export class NgAddToCalendarModule { }
