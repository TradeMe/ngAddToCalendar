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
exports.YahooCalendarGenerator = exports.YAHOO_URL = void 0;
var base_calendar_generator_1 = require("./base-calendar.generator");
exports.YAHOO_URL = 'http://calendar.yahoo.com/?v=60&view=d&type=20';
var YahooCalendarGenerator = /** @class */ (function (_super) {
    __extends(YahooCalendarGenerator, _super);
    function YahooCalendarGenerator(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    YahooCalendarGenerator.prototype.getYahooEventDuration = function () {
        var eventDuration = this.event.end ?
            ((this.event.end.getTime() - this.event.start.getTime()) / base_calendar_generator_1.MS_IN_MINUTES) :
            this.event.duration;
        // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
        var yahooHourDuration = eventDuration < 600 ?
            "0".concat(Math.floor((eventDuration / 60))) :
            "".concat(Math.floor((eventDuration / 60)));
        var yahooMinuteDuration = eventDuration % 60 < 10 ?
            "0".concat(eventDuration % 60) :
            "".concat(eventDuration % 60);
        return yahooHourDuration + yahooMinuteDuration;
    };
    Object.defineProperty(YahooCalendarGenerator.prototype, "href", {
        get: function () {
            var chunk = encodeURI("".concat(exports.YAHOO_URL, "&st=").concat(this.startTime || '', "&dur=").concat((this.getYahooEventDuration() || ''), "&in_loc=").concat((this.event.address || ''), "&url=").concat((this.event.url || '')));
            return chunk
                + "&title=".concat(encodeURIComponent(this.event.title || ''))
                + "&desc=".concat(encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || ''));
        },
        enumerable: false,
        configurable: true
    });
    return YahooCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.YahooCalendarGenerator = YahooCalendarGenerator;
//# sourceMappingURL=yahoo-calendar.generator.js.map