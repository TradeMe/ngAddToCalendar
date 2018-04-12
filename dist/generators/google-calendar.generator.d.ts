import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';
export declare const GOOGLE_URL = "https://www.google.com/calendar/render?action=TEMPLATE";
export declare const DATE_POCTUATION_REGEX: RegExp;
export declare class GoogleCalendarGenerator extends BaseCalendarGenerator {
    protected event: ICalendarEvent;
    constructor(event: ICalendarEvent);
    readonly href: string;
}
