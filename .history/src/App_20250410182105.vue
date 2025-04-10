<script setup>
import { reactive, onMounted, watch } from "vue";

  const loadData = async () => {
    try {
      const response  = await fetch("/assets/data/tasks.json")
      const data = await response.json()
      console.log(data)
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

    // Функция для сохранения данных в localStorage
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
  };

    // Загрузка данных при монтировании компонента
  onMounted(async () => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    
    if (!tasks) {
      // Если нет данных в localStorage, загружаем из файла
      tasks = await loadData();
    }

    // Сохраняем в state и localStorage
    data.tasks = tasks;
    saveDataToLocalStorage(tasks);
  });

    // Следим за изменениями задач и обновляем localStorage
  watch(
    () => data.tasks,
    (newTasks) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    },
    { deep: true }
  );
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
