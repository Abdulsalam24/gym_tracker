export type ProgressEntry = {
  date: string
  weight: string
  note: string
}

type ProgressStore = Record<string, ProgressEntry[]>

const STORAGE_KEY = 'workout-progress'

function load(): ProgressStore {
  if (import.meta.server) return {}
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

function save(data: ProgressStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const store = ref<ProgressStore>({})

export function useProgress() {
  if (import.meta.client && Object.keys(store.value).length === 0) {
    store.value = load()
  }

  function getEntries(exerciseName: string): ProgressEntry[] {
    return store.value[exerciseName] ?? []
  }

  function getLatest(exerciseName: string): ProgressEntry | null {
    const entries = getEntries(exerciseName)
    return entries.length > 0 ? entries[entries.length - 1] : null
  }

  function addEntry(exerciseName: string, weight: string, note: string = '') {
    const entries = getEntries(exerciseName)
    entries.push({
      date: new Date().toISOString().slice(0, 10),
      weight,
      note,
    })
    store.value[exerciseName] = entries
    save(store.value)
  }

  function removeEntry(exerciseName: string, index: number) {
    const entries = getEntries(exerciseName)
    entries.splice(index, 1)
    store.value[exerciseName] = entries
    save(store.value)
  }

  function seedIfEmpty(data: Record<string, { weight: string; note?: string }>) {
    const current = load()
    let changed = false
    Object.entries(data).forEach(([name, entry]) => {
      if (!current[name] || current[name].length === 0) {
        current[name] = [{
          date: new Date().toISOString().slice(0, 10),
          weight: entry.weight,
          note: entry.note ?? '',
        }]
        changed = true
      }
    })
    if (changed) {
      store.value = current
      save(current)
    }
  }

  return { getEntries, getLatest, addEntry, removeEntry, seedIfEmpty }
}
