<script setup>
import { reactive, onMounted, watch } from "vue";


    // Инициализация данных
  const data = reactive({
    tasks: [
    { "id": 1, "title": "Задача 1", "done": false },
    { "id": 2, "title": "Задача 2", "done": false },
    { "id": 3, "title": "Задача 3", "done": false },
    { "id": 4, "title": "Задача 4", "done": false },
    { "id": 5, "title": "Задача 5", "done": false }]
  });


</script>

<template>
  <header>
    <h1>Список задач</h1>
  </header>

  <main>
    <div class="wrapper">
      <ul>
        <li v-for="item in data.tasks" :key="item.id">
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
