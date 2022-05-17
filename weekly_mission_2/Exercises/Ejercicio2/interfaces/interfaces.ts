interface Explorer {
  name: string;
  exercises_completed: number;
  rate: number;
  city: string;
  stack: string[];
  missions: Missions;
}

interface Missions {
  onboarding: Onboarding;
  frontend: Frontend;
}

interface Onboarding {
  isFinished: boolean;
  exercisesFinished: boolean;
}

interface Frontend {
  isFinished: boolean;
  exercisesFinished: boolean;
}

export default Explorer;
