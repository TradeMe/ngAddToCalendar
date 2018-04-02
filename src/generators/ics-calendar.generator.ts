import { EventModel } from '../model/event.model';
import { BaseCalendarGenerator } from './base-calendar.generator';

export class IcsCalendarGenerator extends BaseCalendarGenerator {

    constructor(protected event: EventModel) {
        super(event);
    }

    public get href(): string {
        return encodeURI(
            'data:text/calendar;charset=utf8,' + [
            'BEGIN:VCALENDAR',
            'PRODID:-//Destination Search//ical4j 1.0//EN',
            'VERSION:2.0',
            'CALSCALE:GREGORIAN',
            'X-MS-OLK-FORCEINSPECTOROPEN:true',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `URL:${this.event.url || ''}`,
            `DTSTART:${(this.startTime || '')}`,
            `DTEND:${(this.endTime || '')}`,
            `SUMMARY:${(this.event.title || '')}`,
            `DESCRIPTION:${(this.event.description || '')}`,
            `LOCATION:${(this.event.address || '')}`,
            'SEQUENCE:0',
            `DTSTAMP:${this.dtStamp}`,
            `UID:${this.uid}`,
            'END:VEVENT',
            'END:VCALENDAR'].join('\n'));
    }

    private get dtStamp() {
        return this.formatTime(new Date());
    }
}
