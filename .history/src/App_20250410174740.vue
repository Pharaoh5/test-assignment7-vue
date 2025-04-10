<script setup>
import json from "./assets/data/tasks.json";
import { reactive } from 'vue'
  const data = reactive(json)
  const value = localStorage.getItem('task');
  if (value) {
    data = value
  } else {
    localStorage.setItem('task', data);
  }
</script>

<template>
  <header>
    <h1>Список задач</h1>
  </header>

  <main>
    <div class="wrapper">
      <ul>
        <li v-for="item in data" :key="item.id">
          <label>
            <input type="checkbox" v-model="item.done" />
            {{ item.title }}
          </label>
        </li>
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
    color: white;
  }
}
</style>
