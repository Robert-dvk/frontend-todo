<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav>
        <RouterLink to="/tasks" class="text-white">Tasks</RouterLink>
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
