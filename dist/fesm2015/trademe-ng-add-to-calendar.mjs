import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';

const MS_IN_MINUTES = 60 * 1000;
const DATE_POCTUATION_REGEX$2 = /-|:|\.\d+/g;
class BaseCalendarGenerator {
    constructor(event) {
        this.event = event;
        this.startTime = this.formatTime(event.start);
        this.endTime = this.calculateEndTime(event);
        this.description = this.formatDescription(event.description || '');
    }
    get uid() {
        return (this.s4()
            + this.s4()
            + '-' + this.s4()
            + '-4' + this.s4().substr(0, 3)
            + '-' + this.s4()
            + '-' + this.s4()
            + this.s4()
            + this.s4()).toLowerCase();
    }
    formatDescription(description) {
        return description.replace(/'/g, '\'');
    }
    formatDescriptionForOnlineCalendar(description) {
        if (description.length) {
            return description.replace(/\\r/g, '\n').replace(/\\n/g, '\n');
        }
        return null;
    }
    formatTime(date) {
        return date.toISOString().replace(DATE_POCTUATION_REGEX$2, '');
    }
    calculateEndTime(event) {
        if (event.end) {
            return this.formatTime(event.end);
        }
        if (!event.duration) {
            throw new Error('You have to provide either the duration or end');
        }
        return this.formatTime(new Date(event.start.getTime() + (event.duration * MS_IN_MINUTES)));
    }
    s4() {
        // tslint:disable-next-line
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
}

const GOOGLE_URL = 'https://www.google.com/calendar/render?action=TEMPLATE';
const DATE_POCTUATION_REGEX$1 = /-|:|\.\d+/g;
class GoogleCalendarGenerator extends BaseCalendarGenerator {
    constructor(event) {
        super(event);
        this.event = event;
    }
    get href() {
        const chunk = encodeURI(`${GOOGLE_URL}&dates=${(this.startTime || '')}/${(this.endTime || '')}&location=${(this.event.address || '')}&sprop=${(this.event.url || '')}`);
        return chunk
            + `&text=${encodeURIComponent(this.event.title || '')}`
            + `&details=${encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || '')}`;
    }
}

class IcsCalendarGenerator extends BaseCalendarGenerator {
    constructor(event) {
        super(event);
        this.event = event;
    }
    get href() {
        return encodeURI('data:text/calendar;charset=utf8,' + [
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
            'END:VCALENDAR'
        ].join('\n'));
    }
    get dtStamp() {
        return this.formatTime(new Date());
    }
}

// tslint:disable-next-line
const OUTLOOK_BASE_URL = 'https://outlook.live.com/owa/?rru=addevent&path=%2fcalendar%2fview%2fMonth&authRedirect=true&realm=live.com&whr=live.com&CBCXT=out&fl=wld';
const DATE_POCTUATION_REGEX = /-|:|\.\d+/g;
class OutlookCalendarGenerator extends BaseCalendarGenerator {
    constructor(event) {
        super(event);
        this.event = event;
    }
    get href() {
        const chunk = encodeURI(`${OUTLOOK_BASE_URL}&startdt=${(this.startTime || '')}&enddt=${(this.endTime || '')}&uid=${this.uid}&location=${this.event.address}`);
        return chunk
            + `&subject=${encodeURIComponent(this.event.title || '')}`
            + `&body=${encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || '')}`;
    }
}

const YAHOO_URL = 'http://calendar.yahoo.com/?v=60&view=d&type=20';
class YahooCalendarGenerator extends BaseCalendarGenerator {
    constructor(event) {
        super(event);
        this.event = event;
    }
    getYahooEventDuration() {
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
    get href() {
        const chunk = encodeURI(`${YAHOO_URL}&st=${this.startTime || ''}&dur=${(this.getYahooEventDuration() || '')}&in_loc=${(this.event.address || '')}&url=${(this.event.url || '')}`);
        return chunk
            + `&title=${encodeURIComponent(this.event.title || '')}`
            + `&desc=${encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || '')}`;
    }
}

var CalendarTypeEnum;
(function (CalendarTypeEnum) {
    CalendarTypeEnum[CalendarTypeEnum["google"] = 0] = "google";
    CalendarTypeEnum[CalendarTypeEnum["yahoo"] = 1] = "yahoo";
    CalendarTypeEnum[CalendarTypeEnum["iCalendar"] = 2] = "iCalendar";
    CalendarTypeEnum[CalendarTypeEnum["outlook"] = 3] = "outlook";
    CalendarTypeEnum[CalendarTypeEnum["outlookLive"] = 4] = "outlookLive";
})(CalendarTypeEnum || (CalendarTypeEnum = {}));

class NgAddToCalendarService {
    constructor() {
        this.calendarType = CalendarTypeEnum;
        // tslint:disable-next-line:member-ordering
        this._factory = [
            GoogleCalendarGenerator,
            YahooCalendarGenerator,
            IcsCalendarGenerator,
            IcsCalendarGenerator,
            OutlookCalendarGenerator
        ];
    }
    getHrefFor(type, event) {
        const generatorType = this.getGeneratorFor(type);
        return new generatorType(event).href;
    }
    getGeneratorFor(type) {
        return this._factory[type];
    }
}
NgAddToCalendarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgAddToCalendarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarService, decorators: [{
            type: Injectable
        }] });

class NgAddToCalendarModule {
}
NgAddToCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgAddToCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarModule });
NgAddToCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarModule, providers: [NgAddToCalendarService] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgAddToCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    providers: [NgAddToCalendarService],
                    exports: []
                }]
        }] });

// Public classes.

/**
 * Generated bundle index. Do not edit.
 */

export { NgAddToCalendarModule, NgAddToCalendarService };
//# sourceMappingURL=trademe-ng-add-to-calendar.mjs.map
