import { onMount } from "svelte";
import { writable } from "svelte/store";
import type { WorkoutData } from "./types";

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