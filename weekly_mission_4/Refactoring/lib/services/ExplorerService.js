class ExplorerService {
  static filterByMission(explorers, mission) {
    return explorers.filter(explorer => explorer.mission === mission);
  }
  static getAmountOfExplorersByMission(explorers, mission) {
    return explorers.filter(explorer => explorer.mission === mission).length;
  }
  static getExplorersUsernamesByMission(explorers, mission) {
    return explorers
      .map(explorer => {
        if (explorer.mission === mission) return explorer.githubUsername;
      })
      .filter(explorer => explorer !== undefined);
  }
}

module.exports = ExplorerService;
