<template>
  <div class="min-h-screen bg-[#0b0b0f] text-white font-sans">
    <div class="max-w-lg mx-auto px-4 py-6 pb-20">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div>
          <div class="text-[13px] text-[#666] mb-0.5">{{ todayLabel }}</div>
          <div class="text-[22px] font-bold leading-tight">Don't stop!</div>
        </div>
        <div class="h-10 px-3 rounded-full bg-[#12121a] border border-[#1f1f2e] flex items-center gap-2 shrink-0">
          <div class="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div class="text-[11px] tracking-wide text-[#666] font-medium">{{ nigeriaTime }}</div>
        </div>
      </div>

      <!-- Day pills -->
      <div class="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
        <button
          v-for="(w, i) in workouts"
          :key="w.day"
          class="flex flex-col items-center px-4 py-2.5 rounded-2xl transition-all duration-200 shrink-0 min-w-[72px] border"
          :class="activeDay === i
            ? 'bg-accent text-black border-accent'
            : 'bg-[#16161d] border-[#1f1f2e] hover:border-[#333]'"
          @click="selectDay(i)"
        >
          <div
            class="text-[12px] font-bold tracking-wide"
            :class="activeDay === i ? 'text-black' : 'text-[#888]'"
          >{{ w.day }}</div>
          <div
            class="text-[9px] tracking-wide mt-0.5"
            :class="activeDay === i ? 'text-black/60' : 'text-[#444]'"
          >{{ w.theme.split(' ')[0] }}</div>
          <div
            v-if="w.day === todayAbbr"
            class="w-1 h-1 rounded-full mt-1"
            :class="activeDay === i ? 'bg-black/40' : 'bg-accent'"
          />
        </button>
      </div>

      <!-- Workout summary card -->
      <div class="bg-gradient-to-br from-[#1a1a2e] to-[#16161d] rounded-2xl p-5 mb-6 border border-[#1f1f2e]">
        <div class="flex items-center justify-between">
          <div>
            <div class="text-[17px] font-bold mb-1">{{ currentDay.theme }}</div>
            <div class="flex items-center gap-4 text-[12px] text-[#666]">
              <div class="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                {{ currentDay.exercises.length }} exercises
              </div>
            </div>
          </div>
          <!-- <button
            v-if="selected"
            class="flex items-center gap-1.5 bg-accent/10 text-accent text-[11px] font-semibold tracking-wide px-3 py-2 rounded-xl hover:bg-accent/20 transition-colors shrink-0"
            @click="scrollToDetail"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            View
          </button> -->
        </div>
      </div>

      <!-- Exercise list (always visible) -->
      <div class="text-[11px] tracking-widest text-[#444] uppercase mb-3">Exercises</div>
      <div class="flex flex-col gap-2.5 mb-6">
        <div
          v-for="(ex, i) in currentDay.exercises"
          :key="ex.name"
          class="flex items-center gap-3.5 rounded-xl p-3.5 cursor-pointer transition-colors border"
          :class="activeEx === i
            ? 'bg-[#18182a] border-accent/20'
            : 'bg-[#12121a] border-transparent hover:bg-[#18182a] hover:border-[#1f1f2e]'"
          @click="selectEx(i)"
        >
          <div class="w-12 h-12 rounded-lg bg-[#1a1a2e] flex items-center justify-center shrink-0 overflow-hidden">
            <img
              v-if="exerciseImages[ex.name]"
              :src="exerciseImages[ex.name]"
              :alt="ex.name"
              class="w-full h-full object-cover"
            />
            <div v-else class="text-[16px] text-accent/40 font-bold">{{ String(i + 1).padStart(2, '0') }}</div>
          </div>
          <div class="flex-1 min-w-0">
            <div
              class="text-[13px] font-semibold leading-snug truncate"
              :class="activeEx === i ? 'text-accent' : ''"
            >{{ ex.name }}</div>
            <div class="text-[11px] text-[#555] mt-0.5">{{ ex.prog.Sets }}</div>
          </div>
          <div class="text-[10px] text-[#444] bg-[#1a1a2e] px-2.5 py-1 rounded-full shrink-0 truncate max-w-[90px]">
            {{ ex.muscle.split('·')[0].trim() }}
          </div>
        </div>
      </div>

      <!-- Exercise detail (below the list) -->
      <div ref="detailSection" />
      <template v-if="selected">
        <!-- Exercise nav header -->
        <div class="flex items-center justify-between mb-4">
          <div class="text-[19px] font-bold">{{ selected.name }}</div>
          <div class="flex gap-2">
            <button
              class="w-8 h-8 rounded-lg bg-[#12121a] flex items-center justify-center text-[#555] hover:text-white transition-colors disabled:opacity-20"
              :disabled="activeEx === 0"
              @click="prevEx"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              class="w-8 h-8 rounded-lg bg-[#12121a] flex items-center justify-center text-[#555] hover:text-white transition-colors disabled:opacity-20"
              :disabled="activeEx === currentDay.exercises.length - 1"
              @click="nextEx"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
        <div class="text-[12px] text-[#555] mb-4">{{ selected.muscle }}</div>

        <!-- Media tabs -->
        <div class="mb-4">
          <div class="flex gap-1 mb-3 bg-[#12121a] rounded-xl p-1">
            <button
              v-for="tab in (['motion', 'photos', 'video'] as MediaTab[])"
              :key="tab"
              class="flex-1 text-[10px] tracking-widest uppercase py-2 rounded-lg transition-all duration-150 font-semibold"
              :class="mediaTab === tab
                ? 'bg-accent text-black'
                : 'text-[#444] hover:text-[#777]'"
              @click="mediaTab = tab"
            >
              {{ tab }}
            </button>
          </div>

          <div class="bg-[#12121a] rounded-xl overflow-hidden border border-[#1a1a2e]">
            <template v-if="loading">
              <div class="flex items-center justify-center min-h-[200px]">
                <div class="text-[11px] tracking-widest text-[#333] uppercase">Loading...</div>
              </div>
            </template>
            <template v-else-if="exData">
              <div v-if="mediaTab === 'photos'" class="grid grid-cols-2 w-full">
                <div class="relative">
                  <img :src="exData.start" :alt="selected.name + ' start'" class="w-full object-cover aspect-square" />
                  <div class="absolute bottom-2 left-2.5 text-[9px] tracking-widest text-white/50 uppercase bg-black/40 px-1.5 py-0.5 rounded">Start</div>
                </div>
                <div class="relative border-l border-[#1a1a2e]">
                  <img :src="exData.end" :alt="selected.name + ' end'" class="w-full object-cover aspect-square" />
                  <div class="absolute bottom-2 left-2.5 text-[9px] tracking-widest text-white/50 uppercase bg-black/40 px-1.5 py-0.5 rounded">End</div>
                </div>
              </div>
              <div v-else-if="mediaTab === 'motion'" class="relative w-full aspect-square">
                <img :src="exData.start" :alt="selected.name" class="fx-start absolute inset-0 w-full h-full object-cover" />
                <img :src="exData.end" :alt="selected.name" class="fx-end absolute inset-0 w-full h-full object-cover" />
                <div class="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full">
                  <div class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span class="text-[9px] tracking-widest text-white/50 uppercase">Live</span>
                </div>
              </div>
              <div v-else class="aspect-video w-full">
                <iframe
                  :key="exData.videoId"
                  :src="`https://www.youtube-nocookie.com/embed/${exData.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=${exData.videoId}&end=30`"
                  class="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </template>
            <template v-else>
              <div class="flex items-center justify-center min-h-[200px]">
                <div class="text-[11px] tracking-widest text-[#2a2a2a] uppercase">No data available</div>
              </div>
            </template>
          </div>
        </div>

        <!-- Progress grid -->
        <div class="grid grid-cols-4 gap-2 mb-4">
          <div
            v-for="(val, key) in selected.prog"
            :key="key"
            class="bg-[#12121a] rounded-xl p-3 text-center"
          >
            <div class="text-[9px] text-[#444] tracking-wide uppercase mb-1">{{ key }}</div>
            <div class="text-[12px] font-semibold text-[#ccc]">{{ val }}</div>
          </div>
        </div>

        <!-- Coaching cues -->
        <div class="mb-4">
          <div class="text-[11px] tracking-widest text-[#444] uppercase mb-2.5">Coaching Cues</div>
          <div class="flex flex-col gap-2">
            <div
              v-for="cue in selected.cues"
              :key="cue"
              class="flex gap-2.5 items-start bg-[#12121a] rounded-lg px-3.5 py-2.5"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              <div class="text-[12px] text-[#888] leading-relaxed">{{ cue }}</div>
            </div>
          </div>
        </div>

        <!-- Progress Tracker -->
        <div>
          <div class="text-[11px] tracking-widest text-[#444] uppercase mb-2.5">Progress Tracker</div>

          <div v-if="latestProgress" class="bg-gradient-to-br from-[#1a1a2e] to-[#12121a] rounded-xl p-4 mb-3 border border-[#1f1f2e]">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-[10px] text-[#444] tracking-wide uppercase mb-0.5">Current Weight</div>
                <div class="text-[20px] font-bold text-accent">{{ latestProgress.weight }}</div>
              </div>
              <div v-if="latestProgress.note" class="text-[11px] text-[#555] max-w-[140px] text-right">{{ latestProgress.note }}</div>
            </div>
            <div class="text-[10px] text-[#333] mt-1">{{ latestProgress.date }}</div>
          </div>

          <div class="flex flex-col sm:flex-row gap-2 mb-3">
            <div class="flex gap-2 flex-1 min-w-0">
              <input
                v-model="newWeight"
                type="text"
                placeholder="Weight (e.g. 20kg)"
                class="flex-1 min-w-0 bg-[#12121a] border border-[#1a1a2e] rounded-xl px-3.5 py-2.5 text-[12px] text-white placeholder-[#333] outline-none focus:border-accent/50 transition-colors"
                @keydown.enter="logProgress"
              />
              <input
                v-model="newNote"
                type="text"
                placeholder="Note"
                class="flex-1 min-w-0 bg-[#12121a] border border-[#1a1a2e] rounded-xl px-3.5 py-2.5 text-[12px] text-white placeholder-[#333] outline-none focus:border-accent/50 transition-colors"
                @keydown.enter="logProgress"
              />
            </div>
            <button
              class="bg-accent text-black text-[11px] font-bold tracking-wide uppercase px-4 py-2.5 rounded-xl hover:opacity-80 transition-opacity shrink-0"
              @click="logProgress"
            >
              Log
            </button>
          </div>

          <div v-if="progressEntries.length > 0" class="flex flex-col gap-1.5">
            <div
              v-for="(entry, idx) in progressEntries.slice().reverse()"
              :key="idx"
              class="flex items-center justify-between bg-[#12121a] rounded-lg px-3.5 py-2.5 group"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div class="text-[11px] text-[#333] font-mono shrink-0">{{ entry.date }}</div>
                <div class="text-[13px] font-medium text-[#ccc] truncate">{{ entry.weight }}</div>
                <div v-if="entry.note" class="text-[11px] text-[#444] truncate">{{ entry.note }}</div>
              </div>
              <button
                class="text-[#222] hover:text-red-500 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2"
                @click="removeProgress(progressEntries.length - 1 - idx)"
              >
                ×
              </button>
            </div>
          </div>
          <div v-else class="text-[11px] text-[#2a2a2a] tracking-wide">
            No entries yet — log your first weight above
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script setup lang="ts">
import { workouts } from "~/data/workouts";
import { useProgress } from "~/composables/useProgress";

type ExData = { start: string; end: string; videoId: string };
type MediaTab = "photos" | "motion" | "video";

const todayDayNum = new Date().getDay();
const dayOrder = ['MON', 'TUE', 'WED', 'FRI'];
const dayNumMap: Record<number, string> = { 1: 'MON', 2: 'TUE', 3: 'WED', 5: 'FRI' };
const todayAbbr = dayNumMap[todayDayNum];
const initialDay = todayAbbr ? dayOrder.indexOf(todayAbbr) : 0;
const activeDay = ref(initialDay >= 0 ? initialDay : 0);
const activeEx = ref<number | null>(0);
const mediaTab = ref<MediaTab>("motion");
const exData = ref<ExData | null>(null);
const loading = ref(false);
const exerciseImages = ref<Record<string, string>>({});
const detailSection = ref<HTMLElement | null>(null);

function scrollToDetail() {
  detailSection.value?.scrollIntoView({ behavior: 'smooth' });
}

const nigeriaTime = ref('');
let clockInterval: ReturnType<typeof setInterval> | null = null;

function updateClock() {
  nigeriaTime.value = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).toLowerCase();
}
onMounted(() => {
  updateClock();
  clockInterval = setInterval(updateClock, 10000);
});

onUnmounted(() => {
  if (clockInterval) clearInterval(clockInterval);
});

const currentDay = computed(() => workouts[activeDay.value]);
const selected = computed(() =>
  activeEx.value !== null ? currentDay.value.exercises[activeEx.value] : null
);

const estimatedTime = computed(() => {
  const count = currentDay.value.exercises.length;
  return Math.round(count * 6.5);
});

const { getEntries, getLatest, addEntry, removeEntry, seedIfEmpty } = useProgress();

const newWeight = ref('');
const newNote = ref('');

const progressEntries = computed(() =>
  selected.value ? getEntries(selected.value.name) : []
);
const latestProgress = computed(() =>
  selected.value ? getLatest(selected.value.name) : null
);

function logProgress() {
  if (!selected.value || !newWeight.value.trim()) return;
  addEntry(selected.value.name, newWeight.value.trim(), newNote.value.trim());
  newWeight.value = '';
  newNote.value = '';
}

function removeProgress(index: number) {
  if (!selected.value) return;
  removeEntry(selected.value.name, index);
}

async function loadExerciseImages() {
  currentDay.value.exercises.forEach(async (ex) => {
    if (exerciseImages.value[ex.name]) return;
    try {
      const res = await $fetch<{ data: ExData | null }>(
        `/api/exercise-image?name=${encodeURIComponent(ex.name)}`
      );
      if (res.data?.start) {
        exerciseImages.value[ex.name] = res.data.start;
      }
    } catch {}
  });
}

onMounted(() => {
  seedIfEmpty({
    'High-to-Low Cable Fly': { weight: '18.5kg' },
    'Cable Crossover': { weight: '18.5kg' },
    'Incline Bench Press': { weight: '20kg each' },
    'Barbell Bench Press': { weight: '20kg each', note: '+5 progress' },
    'DB Incline Press': { weight: '20kg' },
    'Tricep Pushdown': { weight: '31.5kg' },
    'Lateral Raise': { weight: '10kg', note: 'progress 12kg' },
    'Pull Up': { weight: '8 max reps' },
    'Cable Row': { weight: '34kg' },
    'DB Front Raise': { weight: '25lbs / 11.3kg' },
  });
  loadExerciseImages();
});

const dayMap: Record<number, string> = {
  1: "MON",
  2: "TUE",
  3: "WED",
  5: "FRI",
};
const todayLabel = computed(() => {
  const abbr = dayMap[new Date().getDay()];
  const match = workouts.find((w) => w.day === abbr);
  return match ? `Today · ${match.theme}` : "Rest Day";
});

watch(activeDay, () => {
  loadExerciseImages();
});

watch(
  selected,
  async (ex) => {
    exData.value = null;
    mediaTab.value = "motion";
    if (!ex) return;
    loading.value = true;
    try {
      const res = await $fetch<{ data: ExData | null }>(
        `/api/exercise-image?name=${encodeURIComponent(ex.name)}`
      );
      exData.value = res.data;
    } finally {
      loading.value = false;
    }
  },
  { immediate: true }
);

function selectDay(i: number) {
  activeDay.value = i;
  activeEx.value = 0;
  mediaTab.value = "motion";
}

function selectEx(i: number) {
  activeEx.value = i;
  mediaTab.value = "motion";
  newWeight.value = '';
  newNote.value = '';
}

function prevEx() {
  if (activeEx.value !== null && activeEx.value > 0) {
    activeEx.value--;
    mediaTab.value = "motion";
  }
}

function nextEx() {
  if (
    activeEx.value !== null &&
    activeEx.value < currentDay.value.exercises.length - 1
  ) {
    activeEx.value++;
    mediaTab.value = "motion";
  }
}
</script>

<style scoped>
@keyframes fx-start {
  0%, 20% { opacity: 1; }
  45%, 55% { opacity: 0; }
  80%, 100% { opacity: 1; }
}
@keyframes fx-end {
  0%, 20% { opacity: 0; }
  45%, 55% { opacity: 1; }
  80%, 100% { opacity: 0; }
}
.fx-start { animation: fx-start 5s ease-in-out infinite; }
.fx-end { animation: fx-end 5s ease-in-out infinite; }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

</style>
