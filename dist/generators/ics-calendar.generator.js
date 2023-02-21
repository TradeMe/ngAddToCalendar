"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.IcsCalendarGenerator = void 0;
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
                "URL:".concat(this.event.url || ''),
                "DTSTART:".concat((this.startTime || '')),
                "DTEND:".concat((this.endTime || '')),
                "SUMMARY:".concat((this.event.title || '')),
                "DESCRIPTION:".concat((this.event.description || '')),
                "LOCATION:".concat((this.event.address || '')),
                'SEQUENCE:0',
                "DTSTAMP:".concat(this.dtStamp),
                "UID:".concat(this.uid),
                'END:VEVENT',
                'END:VCALENDAR'
            ].join('\n'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IcsCalendarGenerator.prototype, "dtStamp", {
        get: function () {
            return this.formatTime(new Date());
        },
        enumerable: false,
        configurable: true
    });
    return IcsCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.IcsCalendarGenerator = IcsCalendarGenerator;
//# sourceMappingURL=ics-calendar.generator.js.map