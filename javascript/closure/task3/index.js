"use strict";

// dateTime:
// new Date().getHours() +
// ":" +
// addZeero(new Date().getMinutes()) +
// ":" +
// addZeero(new Date().getSeconds()),

/**
 * @return {object}
 */
export const createLogger = () => {
  // put your code here
  let logFile = [];
  const addZeero = (sec) => {
    if (sec < 10) {
      sec = "0" + sec;
    }
    return sec;
  };

  const warn = (txt) => {
    logFile.push({
      message: `${txt}`,
      dateTime: new Date(),
      type: "warn",
    });
  };
  const error = (txt) => {
    logFile.push({
      message: `${txt}`,
      dateTime: new Date(),
      type: "error",
    });
  };
  const log = (txt) => {
    logFile.push({
      message: `${txt}`,
      dateTime: new Date(),
      type: "log",
    });
  };

  const getRecords = (type) => {
    if (type) {
      const allRecords = logFile.filter((a) => a.type === type);
      const result = allRecords.sort();

      return result.reverse();
    }
    return logFile.sort().reverse();
  };
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

console.log(logger1.getRecords());
// ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords("log"); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords("error"); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords("warn"); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn("Opps, something is happenning");
console.log(logger2.getRecords("error"));
// ===> []
console.log(logger2.getRecords("warn")); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords("error")); // ===> []
console.log(logger3.getRecords()); // ===> []
