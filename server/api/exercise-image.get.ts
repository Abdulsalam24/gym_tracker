const BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

const IMAGE_MAP: Record<string, { start: string; end: string }> = {
  'Barbell Bench Press': { start: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`, end: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/1.jpg` },
  'DB Incline Press':    { start: `${BASE}/Incline_Dumbbell_Press/0.jpg`,             end: `${BASE}/Incline_Dumbbell_Press/1.jpg` },
  'Tricep Pushdown':     { start: `${BASE}/Cable_Incline_Pushdown/0.jpg`,             end: `${BASE}/Cable_Incline_Pushdown/1.jpg` },
  'Lateral Raise':       { start: `${BASE}/Side_Lateral_Raise/0.jpg`,                end: `${BASE}/Side_Lateral_Raise/1.jpg` },
  'Barbell Curl':        { start: `${BASE}/Barbell_Curl/0.jpg`,                       end: `${BASE}/Barbell_Curl/1.jpg` },
  'Pull Up':             { start: `${BASE}/Pullups/0.jpg`,                            end: `${BASE}/Pullups/1.jpg` },
  'Cable Row':           { start: `${BASE}/Seated_Cable_Rows/0.jpg`,                 end: `${BASE}/Seated_Cable_Rows/1.jpg` },
  'DB Front Raise':      { start: `${BASE}/Front_Raise_And_Pullover/0.jpg`,           end: `${BASE}/Front_Raise_And_Pullover/1.jpg` },
  'Seated Bicep Curl':   { start: `${BASE}/Seated_Dumbbell_Curl/0.jpg`,              end: `${BASE}/Seated_Dumbbell_Curl/1.jpg` },
  'Rear Delt Fly':       { start: `${BASE}/Cable_Rear_Delt_Fly/0.jpg`,               end: `${BASE}/Cable_Rear_Delt_Fly/1.jpg` },
  'Barbell Back Squat':  { start: `${BASE}/Barbell_Squat/0.jpg`,                     end: `${BASE}/Barbell_Squat/1.jpg` },
  'Leg Extension':       { start: `${BASE}/Leg_Extensions/0.jpg`,                    end: `${BASE}/Leg_Extensions/1.jpg` },
  'Romanian Deadlift':   { start: `${BASE}/Romanian_Deadlift/0.jpg`,                 end: `${BASE}/Romanian_Deadlift/1.jpg` },
}

export default defineEventHandler((event) => {
  const { name } = getQuery(event) as { name?: string }
  const images = name ? (IMAGE_MAP[name] ?? null) : null
  return { images }
})
