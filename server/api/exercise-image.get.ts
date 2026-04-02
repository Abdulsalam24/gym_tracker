const BASE = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises'

// All videos: male demonstrators, short clips
const EXERCISE_DATA: Record<string, { start: string; end: string; videoId: string }> = {
  'Barbell Bench Press': { start: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`, end: `${BASE}/Barbell_Bench_Press_-_Medium_Grip/1.jpg`, videoId: 'lWFknlOTbyM' },
  'DB Incline Press':    { start: `${BASE}/Incline_Dumbbell_Press/0.jpg`,             end: `${BASE}/Incline_Dumbbell_Press/1.jpg`,             videoId: 'IP4oeKh1Sd4' },
  'Tricep Pushdown':     { start: `${BASE}/Cable_Incline_Pushdown/0.jpg`,             end: `${BASE}/Cable_Incline_Pushdown/1.jpg`,             videoId: 'rcIAT7jOOKw' },
  'Lateral Raise':       { start: `${BASE}/Side_Lateral_Raise/0.jpg`,                end: `${BASE}/Side_Lateral_Raise/1.jpg`,                videoId: 'PzsMitRdI_8' },
  'Barbell Curl':        { start: `${BASE}/Barbell_Curl/0.jpg`,                       end: `${BASE}/Barbell_Curl/1.jpg`,                       videoId: 'ul9yQRaX8Og' },
  'Pull Up':             { start: `${BASE}/Pullups/0.jpg`,                            end: `${BASE}/Pullups/1.jpg`,                            videoId: 'xpFvPf032Bg' },
  'Cable Row':           { start: `${BASE}/Seated_Cable_Rows/0.jpg`,                 end: `${BASE}/Seated_Cable_Rows/1.jpg`,                 videoId: 'dTkhHp_kX_c' },
  'DB Front Raise':      { start: `${BASE}/Front_Raise_And_Pullover/0.jpg`,           end: `${BASE}/Front_Raise_And_Pullover/1.jpg`,           videoId: 'M4wvk5o-cN0' },
  'Seated Bicep Curl':   { start: `${BASE}/Seated_Dumbbell_Curl/0.jpg`,              end: `${BASE}/Seated_Dumbbell_Curl/1.jpg`,              videoId: '9jC2tlOKl9A' },
  'Rear Delt Fly':       { start: `${BASE}/Cable_Rear_Delt_Fly/0.jpg`,               end: `${BASE}/Cable_Rear_Delt_Fly/1.jpg`,               videoId: '3gJXpfwg_go' },
  'Barbell Back Squat':  { start: `${BASE}/Barbell_Squat/0.jpg`,                     end: `${BASE}/Barbell_Squat/1.jpg`,                     videoId: '1kIqv3qY1vY' },
  'Leg Extension':       { start: `${BASE}/Leg_Extensions/0.jpg`,                    end: `${BASE}/Leg_Extensions/1.jpg`,                    videoId: 'RlL2GYKqiEQ' },
  'Romanian Deadlift':   { start: `${BASE}/Romanian_Deadlift/0.jpg`,                 end: `${BASE}/Romanian_Deadlift/1.jpg`,                 videoId: 'ypY8WmNTUco' },
}

export default defineEventHandler((event) => {
  const { name } = getQuery(event) as { name?: string }
  const data = name ? (EXERCISE_DATA[name] ?? null) : null
  return { data }
})
