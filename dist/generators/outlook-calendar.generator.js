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
exports.OutlookCalendarGenerator = exports.DATE_POCTUATION_REGEX = exports.OUTLOOK_BASE_URL = void 0;
var base_calendar_generator_1 = require("./base-calendar.generator");
// tslint:disable-next-line
exports.OUTLOOK_BASE_URL = 'https://outlook.live.com/owa/?rru=addevent&path=%2fcalendar%2fview%2fMonth&authRedirect=true&realm=live.com&whr=live.com&CBCXT=out&fl=wld';
exports.DATE_POCTUATION_REGEX = /-|:|\.\d+/g;
var OutlookCalendarGenerator = /** @class */ (function (_super) {
    __extends(OutlookCalendarGenerator, _super);
    function OutlookCalendarGenerator(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(OutlookCalendarGenerator.prototype, "href", {
        get: function () {
            var chunk = encodeURI("".concat(exports.OUTLOOK_BASE_URL, "&startdt=").concat((this.startTime || ''), "&enddt=").concat((this.endTime || ''), "&uid=").concat(this.uid, "&location=").concat(this.event.address));
            return chunk
                + "&subject=".concat(encodeURIComponent(this.event.title || ''))
                + "&body=".concat(encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || ''));
        },
        enumerable: false,
        configurable: true
    });
    return OutlookCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.OutlookCalendarGenerator = OutlookCalendarGenerator;
//# sourceMappingURL=outlook-calendar.generator.js.map