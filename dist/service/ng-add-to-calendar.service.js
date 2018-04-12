"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var google_calendar_generator_1 = require("./../generators/google-calendar.generator");
var ics_calendar_generator_1 = require("./../generators/ics-calendar.generator");
var outlook_calendar_generator_1 = require("./../generators/outlook-calendar.generator");
var yahoo_calendar_generator_1 = require("./../generators/yahoo-calendar.generator");
var calendar_type_enum_1 = require("./../model/calendar-type.enum");
var NgAddToCalendarService = /** @class */ (function () {
    function NgAddToCalendarService() {
        this.calendarType = calendar_type_enum_1.CalendarTypeEnum;
        // tslint:disable-next-line:member-ordering
        this._factory = [
            google_calendar_generator_1.GoogleCalendarGenerator,
            yahoo_calendar_generator_1.YahooCalendarGenerator,
            ics_calendar_generator_1.IcsCalendarGenerator,
            ics_calendar_generator_1.IcsCalendarGenerator,
            outlook_calendar_generator_1.OutlookCalendarGenerator
        ];
    }
    NgAddToCalendarService.prototype.getHrefFor = function (type, event) {
        var generatorType = this.getGeneratorFor(type);
        return new generatorType(event).href;
    };
    NgAddToCalendarService.prototype.getGeneratorFor = function (type) {
        return this._factory[type];
    };
    NgAddToCalendarService = __decorate([
        core_1.Injectable()
    ], NgAddToCalendarService);
    return NgAddToCalendarService;
}());
exports.NgAddToCalendarService = NgAddToCalendarService;
//# sourceMappingURL=ng-add-to-calendar.service.js.map