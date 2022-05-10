const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzSer = require("./lib/services/FizzbuzzService");
const Reader = require("./lib/utils/Reader");

const objExplorers = Reader.readJsonFile("explorers.json");
console.log(objExplorers);
console.log(typeof objExplorers);

const nodeExplorers = ExplorerService.filterByMission(objExplorers, "node");
console.log(nodeExplorers);

const nodeAmountExplorers = ExplorerService.getAmountOfExplorersByMission(
  objExplorers,
  "node"
);
console.log(nodeAmountExplorers);

const userNamesgithub = ExplorerService.getExplorersUsernamesByMission(
  objExplorers,
  "node"
);
console.log(userNamesgithub);

const explorer1 = { name: "Explorer1", score: 1 };
const explorer3 = { name: "Explorer3", score: 3 };
const explorer5 = { name: "Explorer5", score: 5 };
const explorer15 = { name: "Explorer15", score: 15 };

console.log(FizzbuzzSer.applyValidationInExplorer(explorer3));
