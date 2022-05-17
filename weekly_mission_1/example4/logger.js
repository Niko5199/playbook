class Logger {
  constructor(name) {
    this.name = name;
  }
  info(message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
  }
  verbose(message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`);
  }
}

module.exports = Logger;
