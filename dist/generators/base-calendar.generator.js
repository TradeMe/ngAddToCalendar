"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MS_IN_MINUTES = 60 * 1000;
exports.DATE_POCTUATION_REGEX = /-|:|\.\d+/g;
var BaseCalendarGenerator = /** @class */ (function () {
    function BaseCalendarGenerator(event) {
        this.event = event;
        this.startTime = this.formatTime(event.start);
        this.endTime = this.calculateEndTime(event);
        this.description = this.formatDescription(event.description);
    }
    Object.defineProperty(BaseCalendarGenerator.prototype, "uid", {
        get: function () {
            return (this.s4()
                + this.s4()
                + '-' + this.s4()
                + '-4' + this.s4().substr(0, 3)
                + '-' + this.s4()
                + '-' + this.s4()
                + this.s4()
                + this.s4()).toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    BaseCalendarGenerator.prototype.formatDescription = function (description) {
        return description.replace(/'/g, '\'');
    };
    BaseCalendarGenerator.prototype.formatDescriptionForOnlineCalendar = function (description) {
        if (description.length) {
            return description.replace(/\\r/g, '\n').replace(/\\n/g, '\n');
        }
        return null;
    };
    BaseCalendarGenerator.prototype.formatTime = function (date) {
        return date.toISOString().replace(exports.DATE_POCTUATION_REGEX, '');
    };
    BaseCalendarGenerator.prototype.calculateEndTime = function (event) {
        if (event.end) {
            return this.formatTime(event.end);
        }
        if (!event.duration) {
            throw new Error('You have to provide either the duration or end');
        }
        return this.formatTime(new Date(event.start.getTime() + (event.duration * exports.MS_IN_MINUTES)));
    };
    BaseCalendarGenerator.prototype.s4 = function () {
        // tslint:disable-next-line
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return BaseCalendarGenerator;
}());
exports.BaseCalendarGenerator = BaseCalendarGenerator;
//# sourceMappingURL=base-calendar.generator.js.map