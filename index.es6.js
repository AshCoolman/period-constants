"use strict";
const MS,SECOND,SEC,MINUTE,MIN,HOUR,HR,DAY,WEEK,WK,YEAR,YR,DECADE,DEC,CENTUARY,CEN,MILLENIUM;

MS = 1;
SECOND = SEC = 1000 * MS;
MINUTE = MIN = 60 * SEC;
HOUR = HR = 60 * MIN;
DAY = 24 * HOUR;
WEEK = WK = 7 * DAY;
YEAR = YR = 365 * DAY;
DECADE = DEC = 10 * YEAR;
CENTUARY = CEN = 100 * YEAR;
MILLENIUM = 1000 * YEAR;

module.exports = {
    MS,
    SECOND,         SEC,
    MINUTE,         MIN,
    HOUR,           HR,
    DAY,
    WEEK,           WK,
    YEAR,           YR,
    DECADE,         DEC,
    CENTUARY,       CEN,
    MILLENIUM
};
