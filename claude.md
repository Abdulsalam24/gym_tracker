# 🤖 Claude Context - Workout App

## Project Summary

This is a workout web app built with:

* Nuxt 3 (Vue 3 + TypeScript)
* Tailwind CSS

The app displays workout routines by day and allows users to click exercises to view details.

---

## Core Concept

Data-driven UI:

* Workouts are stored as structured data
* UI renders dynamically from data

---

## Key Features

* Workout days list
* Exercise list per day
* Exercise detail modal/page
* Image illustration for each exercise

---

## Data Example

```ts
export const workouts = [
  {
    day: "Monday",
    exercises: [
      {
        name: "Chest Bench Press",
        image: "/images/bench-press.png",
        description: "Lie on bench and press bar upward"
      }
    ]
  }
];
```

---

## Component Structure

* pages/

  * index.vue (list of days)
  * day/[name].vue (exercise list)

* components/

  * WorkoutCard.vue
  * ExerciseItem.vue
  * ExerciseModal.vue

---

## UX Rules

* Clicking exercise opens modal
* Modal shows:

  * image
  * name
  * description

---

## Design Principles

* Keep UI minimal
* Focus on usability
* Fast interactions
* Mobile-first

---

## Future Improvements

* Replace images with GIFs/videos
* Add backend (NestJS)
* Store user progress
* Add authentication

---
