# ngAddToCalendar
Angular library to add custom events to common calendar applications (Google Calendar, iCalendar, Outlook, Outlook Live and Yahoo).

## Install

```
npm install @trademe/ng-add-to-calendar
```

## Use

Import AddToCalendarModule into your main app module.

```
import { AddToCalendarModule } from '@trademe/ng-add-to-calendar';

@NgModule({
  imports: [
    AddToCalendarModule
  ]
})
export class AppModule { }
```

Import AddToCalendarService into your component. 
Import SafeUrl and DomSanitizer for creating usable urls in your template.

```
import { AddToCalendarService } from '@trademe/ng-add-to-calendar';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

public googleCalendarEventUrl: SafeUrl;

constructor(
    private addToCalendarService: AddToCalendarService,
    private sanitizer: DomSanitizer
) {}
```

Use the addToCalendarService in your component to create a safeUrl passing the required event data.
Event configuration is the same for each available calendar type (google, iCalendar, outlook, outlookLive, yahoo)

```
this.googleCalendarEventUrl = sanitizer.bypassSecurityTrustUrl(
    this.addToCalendarService.getHrefFor(
        this.addToCalendarService.calendarType.google,
        {
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
        }
));
```

Use the url in your template.

```
<a [href]="googleCalendarEventUrl" target="_blank">Google Calendar Event</a>
```

## License
MIT
