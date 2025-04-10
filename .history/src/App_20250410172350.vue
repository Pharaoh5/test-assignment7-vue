<script setup>
import json from "./assets/data/tasks.json";
  const data = reactive(json)
</script>

<template>
  <header>
    
  </header>

  <main>
    <div class="wrapper">
      <ul>
        <li v-for="item in data">item</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
