import { ICalendarEvent } from '../model/calendar-event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';

export const GOOGLE_URL = 'https://www.google.com/calendar/render?action=TEMPLATE';
export const DATE_POCTUATION_REGEX = /-|:|\.\d+/g;

export class GoogleCalendarGenerator extends BaseCalendarGenerator {

    constructor(protected event: ICalendarEvent) {
        super(event);
    }

    public get href(): string {
        const chunk = encodeURI(
            // tslint:disable-next-line
            `${GOOGLE_URL}&dates=${(this.startTime || "")}/${(this.endTime || "")}&location=${(this.event.address || "")}&sprop=${(this.event.url || "")}`,
        );

        return chunk
            + `&text=${encodeURIComponent(this.event.title || '')}`
            + `&details=${encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description) || '')}`;
    }
}
