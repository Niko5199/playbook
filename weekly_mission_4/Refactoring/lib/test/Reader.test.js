const Reader = require("../utils/Reader");
const fs = require("fs");

describe("Tests only Reader", () => {
  test("List of Explorers Fyle System Node", () => {
    const explorers = Reader.readJsonFile("explorers.json");
    const exploFS = fs.readFileSync("explorers.json");
    expect(explorers).toStrictEqual(JSON.parse(exploFS));
  });
});
