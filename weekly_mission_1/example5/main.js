const Logger = require('./logger');

Logger.log('This is information');

const customLogger = new Logger.__proto__('Message');

console.log(customLogger);
