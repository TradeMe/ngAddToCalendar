import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator, MS_IN_MINUTES } from './base-calendar.generator';

export const YAHOO_URL = 'http://calendar.yahoo.com/?v=60&view=d&type=20';

export class YahooCalendarGenerator extends BaseCalendarGenerator {

    constructor(protected event: ICalendarEvent) {
        super(event);
    }

    private getYahooEventDuration() {
        const eventDuration = this.event.end ?
            ((this.event.end.getTime() - this.event.start.getTime()) / MS_IN_MINUTES) :
            this.event.duration;

        // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
        const yahooHourDuration = eventDuration < 600 ?
            `0${Math.floor((eventDuration / 60))}` :
            `${Math.floor((eventDuration / 60))}`;

        const yahooMinuteDuration = eventDuration % 60 < 10 ?
            `0${eventDuration % 60}` :
            `${eventDuration % 60}`;

        return yahooHourDuration + yahooMinuteDuration;
    }

    public get href(): string {
        const chunk = encodeURI(
            `${YAHOO_URL}&st=${this.startTime || ''}&dur=${(this.getYahooEventDuration() || '')}&in_loc=${(this.event.address || '')}&url=${(this.event.url || '')}`,
        );
        return chunk
            + `&title=${encodeURIComponent(this.event.title || '')}`
            + `&desc=${encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || '')}`;
    }
}
