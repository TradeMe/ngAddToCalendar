"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
            "0" + Math.floor((eventDuration / 60)) :
            "" + Math.floor((eventDuration / 60));
        var yahooMinuteDuration = eventDuration % 60 < 10 ?
            "0" + eventDuration % 60 :
            "" + eventDuration % 60;
        return yahooHourDuration + yahooMinuteDuration;
    };
    Object.defineProperty(YahooCalendarGenerator.prototype, "href", {
        get: function () {
            var chunk = encodeURI(
            // tslint:disable-next-line
            exports.YAHOO_URL + "&st=" + this.startTime + "&dur=" + (this.getYahooEventDuration() || "") + "&in_loc=" + (this.event.address || "") + "&url=" + (this.event.url || ""));
            return chunk
                + ("&title=" + encodeURIComponent(this.event.title || ''))
                + ("&desc=" + encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description) || ''));
        },
        enumerable: true,
        configurable: true
    });
    return YahooCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.YahooCalendarGenerator = YahooCalendarGenerator;
//# sourceMappingURL=yahoo-calendar.generator.js.map