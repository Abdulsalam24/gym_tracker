<template>
  <div class="min-h-screen flex flex-col bg-[#0a0a0a] text-white font-sans">
    <!-- Header -->
    <div class="px-4 md:px-6 pt-5 md:pt-6">
      <div class="flex items-start justify-between mb-4 md:mb-5">
        <div>
          <div class="text-[11px] tracking-widest text-[#666] uppercase mb-0.5">Weekly Training</div>
          <div class="text-2xl md:text-[28px] font-bold text-accent leading-none">DO OR DIE MF!</div>
        </div>
        <div class="text-[10px] tracking-widest text-[#666] border border-[#2a2a2a] px-2.5 py-1.5 mt-1 whitespace-nowrap">
          WEEK 1 — CALIBRATION
        </div>
      </div>

      <!-- Day tabs -->
      <div class="flex border-b border-[#1a1a1a]">
        <div
          v-for="(w, i) in workouts"
          :key="w.day"
          class="px-3 md:px-4 py-2.5 md:py-3 cursor-pointer border-b-2 transition-all duration-150"
          :class="activeDay === i ? 'border-accent' : 'border-transparent'"
          @click="selectDay(i)"
        >
          <div class="text-[13px] font-bold tracking-wide" :class="activeDay === i ? 'text-accent' : 'text-[#444]'">
            {{ w.day }}
          </div>
          <div class="text-[10px] tracking-wide uppercase mt-0.5 hidden sm:block" :class="activeDay === i ? 'text-[#666]' : 'text-[#333]'">
            {{ w.theme }}
          </div>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="flex flex-col md:flex-row flex-1">

      <!-- Exercise list -->
      <div class="md:w-[280px] lg:w-[300px] md:shrink-0 md:border-r border-b md:border-b-0 border-[#1a1a1a]">
        <div class="text-[10px] tracking-widest text-[#444] px-4 pt-3 pb-2 uppercase">
          Exercises — Click to view
        </div>
        <div
          v-for="(ex, i) in currentDay.exercises"
          :key="ex.name"
          class="flex items-center gap-3 px-4 py-3 border-l-[3px] border-b border-[#111] cursor-pointer transition-all duration-100"
          :class="activeEx === i ? 'bg-[#111] border-l-accent' : 'border-l-transparent hover:bg-[#111]'"
          @click="selectEx(i)"
        >
          <div class="text-[12px] font-bold min-w-[20px]" :class="activeEx === i ? 'text-accent' : 'text-[#2a2a2a]'">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-[13px] font-medium leading-snug truncate" :class="activeEx === i ? 'text-white' : 'text-[#aaa]'">
              {{ ex.name }}
            </div>
            <div class="text-[11px] text-[#3a3a3a] mt-0.5 truncate">{{ ex.muscle }}</div>
          </div>
          <div class="text-[13px] shrink-0" :class="activeEx === i ? 'text-accent' : 'text-[#2a2a2a]'">→</div>
        </div>
      </div>

      <!-- Detail panel -->
      <div class="flex-1 overflow-y-auto min-h-[320px] md:min-h-0">
        <div v-if="activeEx === null" class="h-full flex items-center justify-center min-h-[320px]">
          <div class="text-[11px] tracking-widest text-[#2a2a2a] uppercase">Select an exercise</div>
        </div>

        <template v-else-if="selected">
          <div class="p-4 md:p-5 flex flex-col gap-4">

            <!-- Title -->
            <div>
              <div class="text-lg md:text-[19px] font-bold text-accent mb-0.5">{{ selected.name }}</div>
              <div class="text-[12px] text-[#555]">{{ selected.muscle }}</div>
            </div>

            <!-- Photos / Motion / Video tabs -->
            <div>
              <div class="flex gap-1 mb-3">
                <button
                  v-for="tab in (['photos', 'motion', 'video'] as const)"
                  :key="tab"
                  class="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded transition-colors capitalize"
                  :class="mediaTab === tab ? 'bg-accent text-black font-bold' : 'text-[#555] hover:text-[#888]'"
                  @click="mediaTab = tab"
                >{{ tab }}</button>
              </div>

              <div class="bg-[#0f0f0f] border border-[#1e1e1e] rounded-md overflow-hidden">
                <template v-if="loading">
                  <div class="flex items-center justify-center min-h-[160px]">
                    <div class="text-[11px] tracking-widest text-[#333] uppercase">Loading...</div>
                  </div>
                </template>
                <template v-else-if="exData">

                  <!-- Photos: start + end side by side -->
                  <div v-if="mediaTab === 'photos'" class="grid grid-cols-2 w-full">
                    <div class="relative">
                      <img :src="exData.start" :alt="selected.name + ' start'" class="w-full object-cover aspect-square" />
                      <div class="absolute bottom-1.5 left-2 text-[9px] tracking-widest text-white/50 uppercase">Start</div>
                    </div>
                    <div class="relative border-l border-[#1e1e1e]">
                      <img :src="exData.end" :alt="selected.name + ' end'" class="w-full object-cover aspect-square" />
                      <div class="absolute bottom-1.5 left-2 text-[9px] tracking-widest text-white/50 uppercase">End</div>
                    </div>
                  </div>

                  <!-- Motion: 4-step crossfade pendulum -->
                  <div v-else-if="mediaTab === 'motion'" class="relative w-full aspect-square max-w-sm mx-auto">
                    <img
                      :src="exData.start"
                      :alt="selected.name"
                      class="fx-start absolute inset-0 w-full h-full object-cover"
                    />
                    <img
                      :src="exData.end"
                      :alt="selected.name"
                      class="fx-end absolute inset-0 w-full h-full object-cover"
                    />
                    <div class="absolute bottom-2 right-2 flex items-center gap-1.5">
                      <div class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span class="text-[9px] tracking-widest text-white/40 uppercase">Live</span>
                    </div>
                  </div>

                  <!-- Video: short YouTube demo -->
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
                  <div class="flex items-center justify-center min-h-[160px]">
                    <div class="text-[11px] tracking-widest text-[#2a2a2a] uppercase">No data available</div>
                  </div>
                </template>
              </div>
            </div>

            <!-- Coaching cues -->
            <div>
              <div class="text-[10px] tracking-widest text-[#444] uppercase mb-2.5">Coaching cues</div>
              <div v-for="cue in selected.cues" :key="cue" class="flex gap-2.5 mb-1.5 items-start">
                <div class="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                <div class="text-[13px] text-[#999] leading-relaxed">{{ cue }}</div>
              </div>
            </div>

            <!-- Progress grid -->
            <div>
              <div class="text-[10px] tracking-widest text-[#444] uppercase mb-2.5">Week 1 — Calibration</div>
              <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-1.5">
                <div
                  v-for="(val, key) in selected.prog"
                  :key="key"
                  class="bg-[#111] px-3 py-2 rounded"
                >
                  <div class="text-[10px] text-[#444] tracking-wide uppercase mb-0.5">{{ key }}</div>
                  <div class="text-[12px] font-medium text-[#ccc]">{{ val }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer nav -->
          <div class="flex justify-between items-center px-4 py-2.5 border-t border-[#1a1a1a]">
            <button
              class="text-[#333] text-base px-2.5 py-1 transition-colors hover:text-[#888] disabled:opacity-30"
              :disabled="activeEx === 0"
              @click="prevEx"
            >←</button>
            <div class="text-[10px] tracking-widest text-[#2a2a2a] uppercase">
              {{ (activeEx ?? 0) + 1 }} / {{ currentDay?.exercises.length ?? 0 }}
            </div>
            <button
              class="text-[#333] text-base px-2.5 py-1 transition-colors hover:text-[#888] disabled:opacity-30"
              :disabled="activeEx === (currentDay?.exercises.length ?? 0) - 1"
              @click="nextEx"
            >→</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { workouts } from '~/data/workouts'

type ExData = { start: string; end: string; videoId: string }
type MediaTab = 'photos' | 'motion' | 'video'

const activeDay = ref(0)
const activeEx = ref<number | null>(0)
const mediaTab = ref<MediaTab>('photos')
const exData = ref<ExData | null>(null)
const loading = ref(false)

const currentDay = computed(() => workouts[activeDay.value])
const selected = computed(() => activeEx.value !== null ? currentDay.value.exercises[activeEx.value] : null)

watch(selected, async (ex) => {
  exData.value = null
  mediaTab.value = 'photos'
  if (!ex) return
  loading.value = true
  try {
    const res = await $fetch<{ data: ExData | null }>(`/api/exercise-image?name=${encodeURIComponent(ex.name)}`)
    exData.value = res.data
  } finally {
    loading.value = false
  }
}, { immediate: true })

function selectDay(i: number) {
  activeDay.value = i
  activeEx.value = 0
  mediaTab.value = 'photos'
}

function selectEx(i: number) {
  activeEx.value = activeEx.value === i ? null : i
  mediaTab.value = 'photos'
}

function prevEx() {
  if (activeEx.value !== null && activeEx.value > 0) {
    activeEx.value--
    mediaTab.value = 'photos'
  }
}

function nextEx() {
  if (activeEx.value !== null && activeEx.value < currentDay.value.exercises.length - 1) {
    activeEx.value++
    mediaTab.value = 'photos'
  }
}
</script>

<style scoped>
/* Hold start → ease to end → hold end → ease back */
@keyframes fx-start {
  0%, 20%  { opacity: 1; }
  45%, 55% { opacity: 0; }
  80%, 100% { opacity: 1; }
}
@keyframes fx-end {
  0%, 20%  { opacity: 0; }
  45%, 55% { opacity: 1; }
  80%, 100% { opacity: 0; }
}
.fx-start { animation: fx-start 5s ease-in-out infinite; }
.fx-end   { animation: fx-end   5s ease-in-out infinite; }
</style>
