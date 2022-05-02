interface Issue {
  title: string;
  repositoryNameAssociated: string;
  status: string;
  numberOfComments: number;
  labels: string;
  author: string;
  dateCreated: string;
  lastUpdates: string;
  getTitleAndAuthor(): string;
  getGeneralInfo(): string;
}

interface PullRequest {
  title: string;
  branchName: string;
  dateCreated: string;
  status: string;
  repositoryNameAssociated: string;
  getStatus(): string;
  getTitleAndAuthor(): string;
}

export { Issue, PullRequest };
