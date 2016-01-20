"use strict";

var MS = 1;
var SECOND = SEC = 1000 * MS;
var MINUTE = MIN = 60 * SEC;
var HOUR = HR = 60 * MIN;
var DAY = 24 * HOUR;
var WEEK = WK = 7 * DAY;
var YEAR = YR = 365 * DAY;
var DECADE = DEC = 10 * YEAR;
var CENTUARY = CEN = 100 * YEAR;
var MILLENIUM = 1000 * YEAR;

module.exports = {
    MS: MS,
    SECOND: SECOND, SEC: SEC,
    MINUTE: MINUTE, MIN: MIN,
    HOUR: HOUR, HR: HR,
    DAY: DAY,
    WEEK: WEEK, WK: WK,
    YEAR: YEAR, YR: YR,
    DECADE: DECADE, DEC: DEC,
    CENTUARY: CENTUARY, CEN: CEN,
    MILLENIUM: MILLENIUM
};
