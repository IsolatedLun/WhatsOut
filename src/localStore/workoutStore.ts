import { writable } from "svelte/store";
import type { Props_Workout, WorkoutData } from "./types";

export const workoutData = writable<WorkoutData>({
    workouts: [],
    user: {
        level: 0,
        username: 'EpicNoob69'
    }
});

export function getWorkoutData() {
    if(!localStorage.getItem('workout-data')) 
        localStorage.setItem('workout-data', JSON.stringify(
            {
                workouts: [],
                user: {
                    level: 0,
                    username: 'EpicNoob69'
                }
            } as WorkoutData
        ))

    workoutData.set(JSON.parse(localStorage.getItem('workout-data')!));
}

export function addWorkoutData(workout: Props_Workout) {
    workoutData.update(e => {
        let workouts = [...e.workouts, workout];

        return { workouts, user: e.user };
    })
}

export function removeWorkoutData(workoutId: number) {
    workoutData.update(e => {
        let workouts = e.workouts.filter(x => x.id !== workoutId);

        return { workouts, user: e.user };
    })
}