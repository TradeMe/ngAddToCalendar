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
// tslint:disable-next-line
exports.OUTLOOK_BASE_URL = 'https://outlook.live.com/owa/?rru=addevent&path=%2fcalendar%2fview%2fMonth&authRedirect=true&realm=live.com&whr=live.com&CBCXT=out&fl=wld';
exports.DATE_POCTUATION_REGEX = /-|:|\.\d+/g;
var OutlookCalendarGenerator = (function (_super) {
    __extends(OutlookCalendarGenerator, _super);
    function OutlookCalendarGenerator(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(OutlookCalendarGenerator.prototype, "href", {
        get: function () {
            var chunk = encodeURI(
            // tslint:disable-next-line
            exports.OUTLOOK_BASE_URL + "&startdt=" + (this.startTime || "") + "&enddt=" + (this.endTime || "") + "&uid=" + this.uid + "&location=" + this.event.address);
            return chunk
                + ("&subject=" + encodeURIComponent(this.event.title || ''))
                + ("&body=" + encodeURIComponent(this.event.description || ''));
        },
        enumerable: true,
        configurable: true
    });
    return OutlookCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.OutlookCalendarGenerator = OutlookCalendarGenerator;
//# sourceMappingURL=outlook-calendar.generator.js.map