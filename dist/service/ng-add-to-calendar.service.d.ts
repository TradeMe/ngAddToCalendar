import { CalendarTypeEnum } from './../model/calendar-type.enum';
import { ICalendarEvent } from './../model/calendar-event.model';
import * as i0 from "@angular/core";
export declare class NgAddToCalendarService {
    calendarType: typeof CalendarTypeEnum;
    getHrefFor(type: CalendarTypeEnum, event: ICalendarEvent): string;
    private _factory;
    private getGeneratorFor;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgAddToCalendarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgAddToCalendarService>;
}
