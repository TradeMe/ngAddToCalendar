import { Injectable } from '@angular/core';
import { GoogleCalendarGenerator } from './../generators/google-calendar.generator';
import { IcsCalendarGenerator } from './../generators/ics-calendar.generator';
import { OutlookCalendarGenerator } from './../generators/outlook-calendar.generator';
import { YahooCalendarGenerator } from './../generators/yahoo-calendar.generator';
import { CalendarTypeEnum } from './../model/calendar-type.enum';
import * as i0 from "@angular/core";
export class NgAddToCalendarService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYWRkLXRvLWNhbGVuZGFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS9uZy1hZGQtdG8tY2FsZW5kYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUlqRSxNQUFNLE9BQU8sc0JBQXNCO0lBRG5DO1FBR1MsaUJBQVksR0FBNEIsZ0JBQWdCLENBQUM7UUFRaEUsMkNBQTJDO1FBQ25DLGFBQVEsR0FBbUM7WUFDakQsdUJBQXVCO1lBQ3ZCLHNCQUFzQjtZQUN0QixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLHdCQUF3QjtTQUN6QixDQUFDO0tBTUg7SUFuQlEsVUFBVSxDQUFDLElBQXNCLEVBQUUsS0FBcUI7UUFDN0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQVEsQ0FBQztRQUV4RCxPQUFRLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBMkIsQ0FBQyxJQUFJLENBQUM7SUFDbEUsQ0FBQztJQVdPLGVBQWUsQ0FBQyxJQUFzQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7b0hBckJVLHNCQUFzQjt3SEFBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VDYWxlbmRhckdlbmVyYXRvciB9IGZyb20gJy4vLi4vZ2VuZXJhdG9ycy9iYXNlLWNhbGVuZGFyLmdlbmVyYXRvcic7XHJcbmltcG9ydCB7IEdvb2dsZUNhbGVuZGFyR2VuZXJhdG9yIH0gZnJvbSAnLi8uLi9nZW5lcmF0b3JzL2dvb2dsZS1jYWxlbmRhci5nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBJY3NDYWxlbmRhckdlbmVyYXRvciB9IGZyb20gJy4vLi4vZ2VuZXJhdG9ycy9pY3MtY2FsZW5kYXIuZ2VuZXJhdG9yJztcclxuaW1wb3J0IHsgT3V0bG9va0NhbGVuZGFyR2VuZXJhdG9yIH0gZnJvbSAnLi8uLi9nZW5lcmF0b3JzL291dGxvb2stY2FsZW5kYXIuZ2VuZXJhdG9yJztcclxuaW1wb3J0IHsgWWFob29DYWxlbmRhckdlbmVyYXRvciB9IGZyb20gJy4vLi4vZ2VuZXJhdG9ycy95YWhvby1jYWxlbmRhci5nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBDYWxlbmRhclR5cGVFbnVtIH0gZnJvbSAnLi8uLi9tb2RlbC9jYWxlbmRhci10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBJQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4vLi4vbW9kZWwvY2FsZW5kYXItZXZlbnQubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmdBZGRUb0NhbGVuZGFyU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBjYWxlbmRhclR5cGU6IHR5cGVvZiBDYWxlbmRhclR5cGVFbnVtID0gQ2FsZW5kYXJUeXBlRW51bTtcclxuXHJcbiAgcHVibGljIGdldEhyZWZGb3IodHlwZTogQ2FsZW5kYXJUeXBlRW51bSwgZXZlbnQ6IElDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGdlbmVyYXRvclR5cGUgPSB0aGlzLmdldEdlbmVyYXRvckZvcih0eXBlKSBhcyBhbnk7XHJcblxyXG4gICAgcmV0dXJuIChuZXcgZ2VuZXJhdG9yVHlwZShldmVudCkgYXMgQmFzZUNhbGVuZGFyR2VuZXJhdG9yKS5ocmVmO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xyXG4gIHByaXZhdGUgX2ZhY3Rvcnk6IHR5cGVvZiBCYXNlQ2FsZW5kYXJHZW5lcmF0b3JbXSA9IFtcclxuICAgIEdvb2dsZUNhbGVuZGFyR2VuZXJhdG9yLFxyXG4gICAgWWFob29DYWxlbmRhckdlbmVyYXRvcixcclxuICAgIEljc0NhbGVuZGFyR2VuZXJhdG9yLFxyXG4gICAgSWNzQ2FsZW5kYXJHZW5lcmF0b3IsXHJcbiAgICBPdXRsb29rQ2FsZW5kYXJHZW5lcmF0b3JcclxuICBdO1xyXG5cclxuICBwcml2YXRlIGdldEdlbmVyYXRvckZvcih0eXBlOiBDYWxlbmRhclR5cGVFbnVtKTogdHlwZW9mIEJhc2VDYWxlbmRhckdlbmVyYXRvciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZmFjdG9yeVt0eXBlXTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==