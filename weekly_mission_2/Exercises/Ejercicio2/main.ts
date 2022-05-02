import Explorer from './interfaces/interfaces';

const explorers: Explorer[] = [
  {
    name: 'Explorer 1',
    exercises_completed: 10,
    rate: 99,
    city: 'CDMX',
    stack: ['js', 'c#'],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: 'Explorer 2',
    exercises_completed: 9,
    city: 'Veracruz',
    rate: 50,
    stack: ['js'],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: 'Explorer 3',
    exercises_completed: 3,
    city: 'Sonora',
    rate: 100,
    stack: ['elixir'],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// *  Task
// * Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log(
  'Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH'
);

explorers.forEach(item => console.log(item.name));

// * Imprime el stack de cada explorer, usa FOR EACH
console.log('Imprime el stack de cada explorer, usa FOR EACH');

explorers.forEach(item => console.log(item.stack));

// * Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log(
  'Crea una nueva lista con las listas de stacks de cada explorer, usa MAP'
);

const newList = explorers.map(item => item.stack);
console.log(newList);

// * Obtén la lista de explorers que tengan en su stack "js", usa FILTER
// * (para validar un elemento en un lista se usa el método includes)

const filterJS = explorers.filter(item => item.stack.includes('js'));
console.log(filterJS);

// * Busca el primer explorer que sea de la CDMX, usa FIND
const explorer = explorers.find(item => item.city);
console.log(explorer);

// * Obtén la suma de todos los exercises_completed, usa REDUCE
const total: number = explorers
  .map((item: Explorer): number => item.exercises_completed)
  .reduce((acum: number, item: number): number => (acum += item));

console.log(total);

//  * Obtén la validación si al menos uno de los explorers tiene la propiedad
//  * exercisesFinished en frontend como true, usa SOME

const someVal = explorers.some(
  item => item.missions.frontend.exercisesFinished
);

console.log(someVal);

//  * Obtén la validación si todos los explorers tienen la propiedad isFinished
//  * del onboarding como true. Usa EVERY.

const everyVal = explorers.every(item => item.missions.onboarding.isFinished);
console.log(everyVal);
