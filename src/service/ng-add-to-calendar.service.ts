import { Injectable } from '@angular/core';
import { BaseCalendarGenerator } from './../generators/base-calendar.generator';
import { GoogleCalendarGenerator } from './../generators/google-calendar.generator';
import { IcsCalendarGenerator } from './../generators/ics-calendar.generator';
import { OutlookCalendarGenerator } from './../generators/outlook-calendar.generator';
import { YahooCalendarGenerator } from './../generators/yahoo-calendar.generator';
import { CalendarTypeEnum } from './../model/calendar-type.enum';
import { ICalendarEvent } from './../model/calendar-event.model';

@Injectable()
export class NgAddToCalendarService {

  public calendarType: typeof CalendarTypeEnum = CalendarTypeEnum;

  public getHrefFor(type: CalendarTypeEnum, event: ICalendarEvent): string {
    const generatorType = this.getGeneratorFor(type) as any;

    return (new generatorType(event) as BaseCalendarGenerator).href;
  }

  // tslint:disable-next-line:member-ordering
  private _factory: typeof BaseCalendarGenerator[] = [
    GoogleCalendarGenerator,
    YahooCalendarGenerator,
    IcsCalendarGenerator,
    IcsCalendarGenerator,
    OutlookCalendarGenerator
  ];

  private getGeneratorFor(type: CalendarTypeEnum): typeof BaseCalendarGenerator {
    return this._factory[type];
  }

}
