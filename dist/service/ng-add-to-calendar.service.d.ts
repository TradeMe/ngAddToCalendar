import { CalendarTypeEnum } from './../model/calendar-type.enum';
import { ICalendarEvent } from './../model/calendar-event.model';
export declare class NgAddToCalendarService {
    calendarType: typeof CalendarTypeEnum;
    getHrefFor(type: CalendarTypeEnum, event: ICalendarEvent): string;
    private _factory;
    private getGeneratorFor(type);
}
