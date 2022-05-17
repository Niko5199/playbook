class Logger {
  constructor(name) {
    this.name = name;
  }
  log(name) {
    this.count++;
    console.log(`[' + ${this.name} + '] ${name}`);
  }
}

module.exports = new Logger('Default');
