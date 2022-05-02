import { Issue, PullRequest } from './interfaces/interfaces';

const issue: Issue = {
  title: 'Dudas de Node.Js',
  repositoryNameAssociated: 'niko5199',
  status: 'Pendiente',
  numberOfComments: 0,
  labels: 'Tarea, Preguntas',
  author: 'Josue Arturo Rojas Paredes',
  dateCreated: '23/04/2022',
  lastUpdates: '27/04/2022',
  getTitleAndAuthor(): string {
    return `${this.title} ${this.author}`;
  },
  getGeneralInfo() {
    return `Hi my name is ${this.author} and post my issue and talking about ${this.title} this post is ${this.status} and create ${this.dateCreated}`;
  },
};

console.log(issue.getTitleAndAuthor());

console.log(issue.getGeneralInfo());

console.log('--------------------Pull Request--------------------');

const pullRequest: PullRequest = {
  title: 'Cambios de Seccion 2',
  branchName: 'Prueba_Seccion2',
  dateCreated: '23/04/2022',
  status: 'Pendiente',
  repositoryNameAssociated: 'niko5199',
  getStatus() {
    return `The branch ${this.branchName} in the status ${this.status}`;
  },
  getTitleAndAuthor() {
    return `The author is ${this.repositoryNameAssociated} and this pullRequest has been created ${this.dateCreated}`;
  },
};

console.log(pullRequest.getStatus());

console.log(pullRequest.getTitleAndAuthor());
