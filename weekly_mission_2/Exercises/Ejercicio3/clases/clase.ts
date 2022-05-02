import {
  Issue as IssueInterface,
  PullRequest as PullRequestInterface,
} from '../interfaces/interface';

class Issue implements IssueInterface {
  //  * Asignamos propiedades al objeto nuevo es una forma corta en
  //  * vez de usar el this
  constructor(
    public title: string,
    public repositoryNameAssociated: string,
    public status: string,
    public numberOfComments: number,
    public labels: string,
    public author: string,
    public dateCreated: string,
    public lastUpdates: string
  ) {}

  getTitleAndAuthor(): string {
    return `${this.title} ${this.author} \n`;
  }

  getGeneralInfo(): string {
    return `Hi my name is ${this.author} and post my issue and talking about ${this.title} this post is ${this.status} and create ${this.dateCreated} \n`;
  }
}

class PullRequest implements PullRequestInterface {
  constructor(
    public title: string,
    public branchName: string,
    public dateCreated: string,
    public status: string,
    public repositoryNameAssociated: string
  ) {}

  getStatus(): string {
    return `The branch ${this.branchName} in the status ${this.status}`;
  }

  getTitleAndAuthor(): string {
    return `The author is ${this.repositoryNameAssociated} and this pullRequest has been created ${this.dateCreated}`;
  }
}
export { Issue, PullRequest };
