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
            var chunk = encodeURI(exports.GOOGLE_URL + "&dates=" + (this.startTime || '') + "/" + (this.endTime || '') + "&location=" + (this.event.address || '') + "&sprop=" + (this.event.url || ''));
            return chunk
                + ("&text=" + encodeURIComponent(this.event.title || ''))
                + ("&details=" + encodeURIComponent(this.formatDescriptionForOnlineCalendar(this.event.description || '') || ''));
        },
        enumerable: true,
        configurable: true
    });
    return GoogleCalendarGenerator;
}(base_calendar_generator_1.BaseCalendarGenerator));
exports.GoogleCalendarGenerator = GoogleCalendarGenerator;
//# sourceMappingURL=google-calendar.generator.js.map