export type Exercise = {
  name: string
  muscle: string
  cues: string[]
  prog: Record<string, string>
}

export type WorkoutDay = {
  day: string
  theme: string
  exercises: Exercise[]
}

export const workouts: WorkoutDay[] = [
  {
    day: 'MON',
    theme: 'CHEST & PUSH',
    exercises: [
      {
        name: 'Barbell Bench Press',
        muscle: 'Chest · Triceps · Front Delt',
        cues: ['Arch your back on the bench', 'Bar touches nipple line', 'Drive through your heels'],
        prog: { Sets: '4 × 8–10', RPE: '7–8', Rest: '90–120 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'DB Incline Press',
        muscle: 'Upper Chest · Front Delt · Triceps',
        cues: ['30–45° incline only', 'Control the eccentric down', 'Full stretch at the bottom'],
        prog: { Sets: '3 × 10–12', RPE: '7–8', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'Tricep Pushdown',
        muscle: 'Triceps (all heads)',
        cues: ['Elbows fixed to your sides', 'Full lockout at bottom', 'Slow on the way back up'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Lateral Raise',
        muscle: 'Lateral Delt',
        cues: ['Lead with your elbows', 'Stop at shoulder height', '3-second descent'],
        prog: { Sets: '3 × 15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Barbell Curl',
        muscle: 'Biceps · Brachialis',
        cues: ['No swinging at all', 'Full range of motion', 'Squeeze hard at the top'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '60 sec', Progress: '+2.5 kg' },
      },
    ],
  },
  {
    day: 'TUE',
    theme: 'BACK & SHOULDERS',
    exercises: [
      {
        name: 'Pull Up',
        muscle: 'Lats · Biceps · Rear Delt',
        cues: ['Dead hang to start', 'Drive elbows to your hips', 'Full extension every rep'],
        prog: { Sets: '4 × 6–8', RPE: '8', Rest: '2 min', Progress: 'Reps then weight' },
      },
      {
        name: 'Cable Row',
        muscle: 'Mid Back · Lats · Rhomboids',
        cues: ['Retract scapula first', 'Pull to your belly button', "Don't round lower back"],
        prog: { Sets: '3 × 10–12', RPE: '7–8', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'DB Front Raise',
        muscle: 'Front Deltoid',
        cues: ['Slight bend in the elbow', 'Stop at eye level max', 'No momentum from hips'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Seated Bicep Curl',
        muscle: 'Biceps peak contraction',
        cues: ['Seated keeps it strict', 'Full supination at top', "Don't let it drop fast"],
        prog: { Sets: '3 × 12', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Rear Delt Fly',
        muscle: 'Rear Delt · Upper Back',
        cues: ['Hinge 45° forward', 'Elbows wide', 'Squeeze hard at the top'],
        prog: { Sets: '3 × 15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
    ],
  },
  {
    day: 'WED',
    theme: 'LEGS',
    exercises: [
      {
        name: 'Barbell Back Squat',
        muscle: 'Quads · Glutes · Hamstrings',
        cues: ['Brace your core hard', 'Break parallel every rep', 'Drive knees out over toes'],
        prog: { Sets: '4 × 6–8', RPE: '7–8', Rest: '2–3 min', Progress: '+5 kg' },
      },
      {
        name: 'Leg Extension',
        muscle: 'Quads (isolation)',
        cues: ['Full extension at top', 'Squeeze for 1 second', '3-second slow eccentric'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Romanian Deadlift',
        muscle: 'Hamstrings · Glutes · Erectors',
        cues: ['Hinge hips back not down', 'Bar stays close to legs', 'Stop when hamstrings stretch'],
        prog: { Sets: '3 × 10–12', RPE: '7–8', Rest: '90 sec', Progress: '+5 kg' },
      },
    ],
  },
]
