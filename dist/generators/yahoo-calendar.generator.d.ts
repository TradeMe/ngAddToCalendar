import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';
export declare const YAHOO_URL = "http://calendar.yahoo.com/?v=60&view=d&type=20";
export declare class YahooCalendarGenerator extends BaseCalendarGenerator {
    protected event: ICalendarEvent;
    constructor(event: ICalendarEvent);
    private getYahooEventDuration();
    readonly href: string;
}
