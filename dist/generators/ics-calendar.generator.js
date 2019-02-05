"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_calendar_generator_1 = require("./base-calendar.generator");
var IcsCalendarGenerator = /** @class */ (function (_super) {
    __extends(IcsCalendarGenerator, _super);
    function IcsCalendarGenerator(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(IcsCalendarGenerator.prototype, "href", {
        get: function () {
            return encodeURI('data:text/calendar;charset=utf8,' + [
                'BEGIN:VCALENDAR',
                'PRODID:-//Destination Search//ical4j 1.0//EN',
                'VERSION:2.0',
                'CALSCALE:GREGORIAN',
                'X-MS-OLK-FORCEINSPECTOROPEN:true',
                'METHOD:PUBLISH',
                'BEGIN:VEVENT',
                "URL:" + (this.event.url || ''),
                "DTSTART:" + (this.startTime || ''),
                "DTEND:" + (this.endTime || ''),
                "SUMMARY:" + (this.event.title || ''),
                "DESCRIPTION:" + (this.event.description || ''),
                "LOCATION:" + (this.event.address || ''),
                'SEQUENCE:0',
                "DTSTAMP:" + this.dtStamp,
                "UID:" + this.uid,
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\n'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IcsCalendarGenerator.prototype, "dtStamp", {
        get: function () {
            return this.formatTime(new Date());
        },
        enumerable: true,
        configurable: true
    });
    return IcsCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.IcsCalendarGenerator = IcsCalendarGenerator;
//# sourceMappingURL=ics-calendar.generator.js.map