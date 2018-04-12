# ngAddToCalendar
Angular library to add custom events to common calendar applications (Google Calendar, iCalendar, Outlook, Outlook Live and Yahoo).

## Install

```
npm install @trademe/ng-add-to-calendar
```

## Use

Import NgAddToCalendarModule into your main app module.

```
import { NgAddToCalendarModule } from '@trademe/ng-add-to-calendar';

@NgModule({
  imports: [
    NgAddToCalendarModule
  ]
})
export class AppModule { }
```

Import NgAddToCalendarService and ICalendarEvent into your component. 
Import SafeUrl and DomSanitizer for creating usable urls in your template.

Create a new event.

```
import { NgAddToCalendarService, ICalendarEvent } from '@trademe/ng-add-to-calendar';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

public googleCalendarEventUrl: SafeUrl;
public newEvent: ICalendarEvent;

constructor(
    private _addToCalendarService: NgAddToCalendarService,
    private _sanitizer: DomSanitizer
) {
    this.newEvent = {
        // Event title
        title: 'My event title',
        // Event start date
        start: new Date('June 15, 2013 19:00'),
        // Event duration (IN MINUTES)
        duration: 120,
        // If an end time is set, this will take precedence over duration (optional)
        end: new Date('June 15, 2013 23:00'),
        // Event Address (optional)
        address: '1 test street, testland',
        // Event Description (optional)
        description: 'An awesome event'
    };
}
```

To create line breaks in your event descriptions use '\\n' for a new line, or '\\n\\n' for a hard return.

```
this.newEvent = {
    ...
    description: 'An awesome event.\\nWith line breaks!\\n\\nSweet'
};
```

Use the addToCalendarService in your component to create a safeUrl passing the newEvent you created.
Event configuration is the same for each available calendar type (google, iCalendar, outlook, outlookLive, yahoo).

```
this.googleCalendarEventUrl = this._sanitizer.bypassSecurityTrustUrl(
    this._addToCalendarService.getHrefFor(this._addToCalendarService.calendarType.google, this.newEvent)
);
```

Use the url in your template.

```
<a [href]="googleCalendarEventUrl" target="_blank">Google Calendar Event</a>
```

## License
MIT