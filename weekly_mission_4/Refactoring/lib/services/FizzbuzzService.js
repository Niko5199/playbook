class FizzbuzzSer {
  static applyValidationInExplorer(explorer) {
    if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
      explorer.trick = "FIZZBUZZ";
      return explorer;
    }
    if (explorer.score % 5 === 0) {
      explorer.trick = "BUZZ";
      return explorer;
    }
    if (explorer.score % 3 === 0) {
      explorer.trick = "FIZZ";
      return explorer;
    } else {
      explorer.trick = explorer.score;
      return explorer;
    }
  }
}

module.exports = FizzbuzzSer;
