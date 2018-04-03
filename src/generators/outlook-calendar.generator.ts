import { IEvent } from '../model/event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';

// tslint:disable-next-line
export const OUTLOOK_BASE_URL = 'https://outlook.live.com/owa/?rru=addevent&path=%2fcalendar%2fview%2fMonth&authRedirect=true&realm=live.com&whr=live.com&CBCXT=out&fl=wld';
export const DATE_POCTUATION_REGEX = /-|:|\.\d+/g;

export class OutlookCalendarGenerator extends BaseCalendarGenerator {

    constructor(protected event: IEvent) {
        super(event);
    }

    public get href(): string {
        const chunk = encodeURI(
            // tslint:disable-next-line
            `${OUTLOOK_BASE_URL}&startdt=${(this.startTime || "")}&enddt=${(this.endTime || "")}&uid=${this.uid}&location=${this.event.address}`);

        return chunk
            + `&subject=${encodeURIComponent(this.event.title || '')}`
            + `&body=${encodeURIComponent(this.event.description || '')}`;
    }
}
