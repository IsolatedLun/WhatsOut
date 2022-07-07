import type { Props_Exercise } from "src/routes/types"

export interface WorkoutData {
    workouts: Props_Workout[],
    user: {
        username: string;
        level: number;
    }
}

export interface Props_Workout {
    exercises: Props_Exercise[],
    title: string;
}