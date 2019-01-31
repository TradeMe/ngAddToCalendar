import { ICalendarEvent } from './../model/calendar-event.model';
export declare const MS_IN_MINUTES: number;
export declare const DATE_POCTUATION_REGEX: RegExp;
export declare abstract class BaseCalendarGenerator {
    protected event: ICalendarEvent;
    protected startTime: string;
    protected endTime: string;
    protected description: string;
    readonly abstract href: string;
    constructor(event: ICalendarEvent);
    protected readonly uid: string;
    protected formatDescription(description: string): string;
    protected formatDescriptionForOnlineCalendar(description: string): string | null;
    protected formatTime(date: Date): string;
    protected calculateEndTime(event: any): string;
    private s4();
}
