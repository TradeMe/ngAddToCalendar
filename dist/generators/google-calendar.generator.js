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
exports.GoogleCalendarGenerator = exports.DATE_POCTUATION_REGEX = exports.GOOGLE_URL = void 0;
var base_calendar_generator_1 = require("./base-calendar.generator");
exports.GOOGLE_URL = 'https://www.google.com/calendar/render?action=TEMPLATE';
exports.DATE_POCTUATION_REGEX = /-|:|\.\d+/g;
var GoogleCalendarGenerator = /** @class */ (function (_super) {
    __extends(GoogleCalendarGenerator, _super);
    function GoogleCalendarGenerator(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(GoogleCalendarGenerator.prototype, "href", {
        get: function () {
            var chunk = encodeURI("".concat(exports.GOOGLE_URL, "&dates=").concat((this.startTime || ''), "/").concat((this.endTime || ''), "&location=").concat((this.event.address || ''), "&sprop=").concat((this.event.url || '')));
            return chunk
                + "&text=".concat(encodeURIComponent(this.event.title || ''))
                + "&details=".concat(encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || ''));
        },
        enumerable: false,
        configurable: true
    });
    return GoogleCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.GoogleCalendarGenerator = GoogleCalendarGenerator;
//# sourceMappingURL=google-calendar.generator.js.map