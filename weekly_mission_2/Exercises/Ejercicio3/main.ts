import { Issue, PullRequest } from './clases/clase';

const newIssue = new Issue(
  'Dudas de Node.Js',
  'niko5199',
  'Pendiente',
  0,
  'Tarea, Preguntas',
  'Josue Arturo Rojas Paredes',
  '23/04/2022',
  '27/04/2022'
);

console.log(newIssue);
console.log(newIssue.getGeneralInfo());
console.log(newIssue.getTitleAndAuthor());

const newPullRe = new PullRequest(
  'Cambios de Seccion 2',
  'Prueba_Seccion2',
  '23/04/2022',
  'Pendiente',
  'niko5199'
);

console.log(newPullRe);
console.log(newPullRe.getStatus());
console.log(newPullRe.getTitleAndAuthor());
