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
        name: 'Overhead Cable Extension',
        muscle: 'Triceps (long head)',
        cues: ['Face away from cable machine', 'Keep elbows close to head', 'Full stretch behind, full lockout in front'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
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
      {
        name: 'Lat Pull Down',
        muscle: 'Lats · Biceps · Rear Delt',
        cues: ['Wide grip, lean back slightly', 'Pull bar to upper chest', 'Squeeze lats at the bottom'],
        prog: { Sets: '3 × 10–12', RPE: '7–8', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'Barbell Row',
        muscle: 'Mid Back · Lats · Rhomboids',
        cues: ['Hinge forward 45°', 'Pull bar to lower chest', 'Keep core braced throughout'],
        prog: { Sets: '4 × 8–10', RPE: '7–8', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'Hammer Curl',
        muscle: 'Brachialis · Biceps · Forearms',
        cues: ['Neutral grip throughout', 'No swinging', 'Squeeze at the top'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
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
      {
        name: 'Leg Press',
        muscle: 'Quads · Glutes · Hamstrings',
        cues: ['Feet shoulder-width on platform', 'Lower until 90° knee bend', 'Drive through full foot'],
        prog: { Sets: '4 × 10–12', RPE: '7–8', Rest: '90 sec', Progress: '+5 kg' },
      },
      {
        name: 'Calves Press',
        muscle: 'Gastrocnemius · Soleus',
        cues: ['Toes on edge of platform', 'Full stretch at the bottom', 'Pause and squeeze at the top'],
        prog: { Sets: '4 × 15–20', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
    ],
  },
  {
    day: 'FRI',
    theme: 'SHOULDERS',
    exercises: [
      {
        name: 'Incline Bench Press',
        muscle: 'Upper Chest · Front Delt · Triceps',
        cues: ['30–45° incline only', 'Bar touches upper chest', 'Drive through your feet'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Rear Delt Fly',
        muscle: 'Rear Delt · Upper Back',
        cues: ['Hinge 45° forward', 'Elbows wide', 'Squeeze hard at the top'],
        prog: { Sets: '3 × 15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Cable Flyers Down',
        muscle: 'Lower Chest · Front Delt',
        cues: ['Stand centered between cables set high', 'Slight bend in elbows', 'Bring hands down and together at hip level'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Cable Flyers Middle',
        muscle: 'Mid Chest · Front Delt',
        cues: ['Stand centered, cables at chest height', 'Slight bend in elbows throughout', 'Squeeze hard when hands meet in front'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'DB Shoulder Press',
        muscle: 'Anterior Delt · Lateral Delt · Triceps',
        cues: ['Start at ear level', 'Press straight up, don\'t flare', 'Control the descent'],
        prog: { Sets: '4 × 8–10', RPE: '7–8', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'DB Incline Rows',
        muscle: 'Upper Back · Rear Delt · Biceps',
        cues: ['Chest flat on incline bench', 'Pull elbows back and up', 'Full stretch at the bottom'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'Bent Over Tricep Dips',
        muscle: 'Triceps (all heads)',
        cues: ['Hinge forward 45°', 'Upper arms parallel to floor', 'Full extension at the back'],
        prog: { Sets: '3 × 12–15', RPE: '7', Rest: '60 sec', Progress: 'Reps first' },
      },
      {
        name: 'Incline Sit Back Pull',
        muscle: 'Lats · Rear Delt · Rhomboids',
        cues: ['Sit facing incline bench, chest against pad', 'Pull cable handles to lower chest', 'Squeeze shoulder blades at the end'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '90 sec', Progress: '+2.5 kg' },
      },
      {
        name: 'Pull Up',
        muscle: 'Lats · Biceps · Rear Delt',
        cues: ['Dead hang to start', 'Drive elbows to your hips', 'Full extension every rep'],
        prog: { Sets: '4 × 6–8', RPE: '8', Rest: '2 min', Progress: 'Reps then weight' },
      },
      {
        name: 'Preacher Curl',
        muscle: 'Biceps (short head focus)',
        cues: ['Armpits snug on pad', 'Full stretch at the bottom', 'Squeeze hard at the top'],
        prog: { Sets: '3 × 10–12', RPE: '7', Rest: '60 sec', Progress: '+2.5 kg' },
      },
    ],
  },
]
