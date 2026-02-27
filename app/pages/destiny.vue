<template>
  <div class="min-h-screen bg-[#0f172a] text-slate-200 p-5 font-sans">
    <div class="relative py-8 text-center">
      <h1
        class="text-4xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse"
      >
        天機運勢
      </h1>
      <div class="mt-2 text-xs tracking-widest text-slate-500 uppercase">
        AI Destiny Insight
      </div>
    </div>

    <div
      v-if="data?.chart"
      class="mt-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl"
    >
      <div class="grid grid-cols-4 gap-2 text-center">
        <div
          v-for="(word, i) in data.chart.eightWords.split(' ')"
          :key="i"
          class="flex flex-col"
        >
          <span class="text-xs text-slate-400 mb-1">{{
            ["年", "月", "日", "時"][i]
          }}</span>
          <div
            class="bg-gradient-to-b from-slate-700 to-slate-800 p-3 rounded-xl border border-white/5 shadow-inner"
          >
            <span class="text-xl font-bold text-purple-300">{{ word[0] }}</span>
            <span class="text-xl font-bold text-pink-300">{{ word[1] }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="data?.analysis" class="mt-8 space-y-4">
      <div class="flex items-center gap-2 text-purple-400 font-semibold">
        <span class="w-2 h-2 bg-purple-400 rounded-full animate-ping"></span>
        大師解析
      </div>
      <div
        class="bg-slate-800/50 rounded-2xl p-5 leading-relaxed text-slate-300 border-l-4 border-purple-500 shadow-lg"
      >
        {{ data.analysis }}
      </div>
    </div>

    <div class="fixed bottom-10 left-0 w-full px-6">
      <button
        @click="refresh"
        :disabled="pending"
        class="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(147,51,234,0.5)] active:scale-95 transition-all duration-200"
      >
        {{ pending ? "測算中..." : "重啟天機" }}
      </button>
    </div>
  </div>
</template>

<script setup>
const { data, execute, pending } = await useFetch("/api/fortune", {
  method: "POST",
  body: {
    birth: "1975-03-29",
    time: "01:30",
    gender: "男",
  },
  immediate: false, // 點擊按鈕才執行
  watch: false,
});
</script>

<style scoped>
/* 可以在這裡加入針對 Capacitor 狀態列的 padding 修正 */
.min-h-screen {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
</style>