module.exports = {
  name: "JsonLoader",
  StatType: null,
  getName() {
    return this.name;
  },
  getStatType() {
    return this.StatType;
  },
  setStatType(arg) {
    console.log("arg", arg);
    this.StatType = arg;
  },
  getRecords() {
    return this.StatType;
  }
}

