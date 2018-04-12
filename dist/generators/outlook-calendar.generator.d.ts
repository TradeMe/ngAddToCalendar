import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';
export declare const OUTLOOK_BASE_URL = "https://outlook.live.com/owa/?rru=addevent&path=%2fcalendar%2fview%2fMonth&authRedirect=true&realm=live.com&whr=live.com&CBCXT=out&fl=wld";
export declare const DATE_POCTUATION_REGEX: RegExp;
export declare class OutlookCalendarGenerator extends BaseCalendarGenerator {
    protected event: ICalendarEvent;
    constructor(event: ICalendarEvent);
    readonly href: string;
}
