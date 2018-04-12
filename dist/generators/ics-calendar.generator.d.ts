import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';
export declare class IcsCalendarGenerator extends BaseCalendarGenerator {
    protected event: ICalendarEvent;
    constructor(event: ICalendarEvent);
    readonly href: string;
    private readonly dtStamp;
}
