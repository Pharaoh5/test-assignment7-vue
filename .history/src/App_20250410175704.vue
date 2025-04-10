<script setup>
import { reactive } from 'vue'

  const loadData = async () => {
    try {
      const data  = await fetch("./assets/data/tasks.json").json()
      return data
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
      return [];
    }
  }

  // Инициализация данных
const data = reactive({
  tasks: []
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
