const BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

// All videos: male demonstrators, short clips
const EXERCISE_DATA: Record<string, { start: string; end: string; videoId: string }> = {
  'Barbell Bench Press': { start: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`, end: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/1.jpg`, videoId: 'lWFknlOTbyM' },
  'DB Incline Press':    { start: `${BASE}/Incline_Dumbbell_Press/0.jpg`,             end: `${BASE}/Incline_Dumbbell_Press/1.jpg`,             videoId: 'IP4oeKh1Sd4' },
  'Tricep Pushdown':     { start: `${BASE}/Cable_Incline_Pushdown/0.jpg`,             end: `${BASE}/Cable_Incline_Pushdown/1.jpg`,             videoId: 'rcIAT7jOOKw' },
  'Lateral Raise':       { start: `${BASE}/Side_Lateral_Raise/0.jpg`,                end: `${BASE}/Side_Lateral_Raise/1.jpg`,                videoId: 'PzsMitRdI_8' },
  'Pull Up':             { start: `${BASE}/Pullups/0.jpg`,                            end: `${BASE}/Pullups/1.jpg`,                            videoId: 'xpFvPf032Bg' },
  'Cable Row':           { start: `${BASE}/Seated_Cable_Rows/0.jpg`,                 end: `${BASE}/Seated_Cable_Rows/1.jpg`,                 videoId: 'dTkhHp_kX_c' },
  'DB Front Raise':      { start: `${BASE}/Front_Raise_And_Pullover/0.jpg`,           end: `${BASE}/Front_Raise_And_Pullover/1.jpg`,           videoId: 'M4wvk5o-cN0' },
  'Seated Bicep Curl':   { start: `${BASE}/Seated_Dumbbell_Curl/0.jpg`,              end: `${BASE}/Seated_Dumbbell_Curl/1.jpg`,              videoId: '9jC2tlOKl9A' },
  'Rear Delt Fly':       { start: `${BASE}/Reverse_Flyes/0.jpg`,                     end: `${BASE}/Reverse_Flyes/1.jpg`,                     videoId: '3gJXpfwg_go' },
  'Barbell Back Squat':  { start: `${BASE}/Barbell_Squat/0.jpg`,                     end: `${BASE}/Barbell_Squat/1.jpg`,                     videoId: '1kIqv3qY1vY' },
  'Leg Extension':       { start: `${BASE}/Leg_Extensions/0.jpg`,                    end: `${BASE}/Leg_Extensions/1.jpg`,                    videoId: 'RlL2GYKqiEQ' },
  'Romanian Deadlift':   { start: `${BASE}/Romanian_Deadlift/0.jpg`,                 end: `${BASE}/Romanian_Deadlift/1.jpg`,                 videoId: 'ypY8WmNTUco' },
  'Incline Bench Press': { start: `${BASE}/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg`, end: `${BASE}/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg`, videoId: 'DutO2wEtqaw' },
  'High-to-Low Cable Fly': { start: `${BASE}/Low_Cable_Crossover/0.jpg`,             end: `${BASE}/Low_Cable_Crossover/1.jpg`,               videoId: 'bptdQtH7IQA' },
  'Cable Crossover':     { start: `${BASE}/Cable_Crossover/0.jpg`,                   end: `${BASE}/Cable_Crossover/1.jpg`,                   videoId: 'Vo7vqb8mink' },
  'DB Shoulder Press':   { start: `${BASE}/Dumbbell_Shoulder_Press/0.jpg`,           end: `${BASE}/Dumbbell_Shoulder_Press/1.jpg`,           videoId: '3rd1lF6gyFI' },
  'Chest-Supported Dumbbell Row': { start: `${BASE}/Dumbbell_Incline_Row/0.jpg`,     end: `${BASE}/Dumbbell_Incline_Row/1.jpg`,              videoId: 'Du5oIfDeayg' },
  'Tricep Kickback':     { start: `${BASE}/Tricep_Dumbbell_Kickback/0.jpg`,           end: `${BASE}/Tricep_Dumbbell_Kickback/1.jpg`,           videoId: 'jP6_dkEAfj0' },
  'Incline Cable Row':   { start: `${BASE}/Bent_Over_Two-Dumbbell_Row/0.jpg`,        end: `${BASE}/Bent_Over_Two-Dumbbell_Row/1.jpg`,        videoId: '_5I3fTjiAYs' },
  'Overhead Cable Extension': { start: `${BASE}/Triceps_Overhead_Extension_with_Rope/0.jpg`, end: `${BASE}/Triceps_Overhead_Extension_with_Rope/1.jpg`, videoId: 'mRozZKkGIfg' },
  'Lat Pull Down':       { start: `${BASE}/Wide-Grip_Lat_Pulldown/0.jpg`,            end: `${BASE}/Wide-Grip_Lat_Pulldown/1.jpg`,            videoId: 'SALxEARiMkw' },
  'Barbell Row':         { start: `${BASE}/Bent_Over_Barbell_Row/0.jpg`,             end: `${BASE}/Bent_Over_Barbell_Row/1.jpg`,             videoId: 'vT2GjY_Umpw' },
  'Hammer Curl':         { start: `${BASE}/Hammer_Curls/0.jpg`,                      end: `${BASE}/Hammer_Curls/1.jpg`,                      videoId: 'zC3nLlEvin4' },
  'Leg Press':           { start: `${BASE}/Leg_Press/0.jpg`,                         end: `${BASE}/Leg_Press/1.jpg`,                         videoId: 'IZxyjW7MPJQ' },
  'Calf Press':          { start: `${BASE}/Calf_Press_On_The_Leg_Press_Machine/0.jpg`, end: `${BASE}/Calf_Press_On_The_Leg_Press_Machine/1.jpg`, videoId: 'yUeAXOp_oLQ' },
  'Preacher Curl':       { start: `${BASE}/Preacher_Curl/0.jpg`,                     end: `${BASE}/Preacher_Curl/1.jpg`,                     videoId: 'fIWP-FRFNU0' },
}

export default defineEventHandler((event) => {
  const { name } = getQuery(event) as { name?: string }
  const data = name ? (EXERCISE_DATA[name] ?? null) : null
  return { data }
})
