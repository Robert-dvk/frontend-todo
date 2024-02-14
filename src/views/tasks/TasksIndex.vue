<script setup>
    import useTasks from '@/composables/tasks.js';
    import { onMounted } from 'vue';

    const { tasks, getTasks, destroyTask, updateStatus, filterByStatus } = useTasks();

    onMounted(() => getTasks());

    const today = new Date();
    const day = today.getDate();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
</script>

<template>
     <div class="flex justify-end p-2 mt-2">
        <RouterLink :to="{name: 'TasksStore' }" class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-800 rounded text-white">New Task</RouterLink>
    </div>
    <div class="mt-12 p-4 bg-slate-300 shadow-2xl text-center rounded-lg min-h-8 flex items-center justify-between">
        <div>
            <span class="text-black">
                Tasks {{ day }}/{{ month }}
            </span>
        </div>
        <div class="flex items-center space-x-2">
            <input type="date" class="border-solid border-2 border-indigo-600 rounded-md">
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-green-500 transition-colors duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-yellow-500 transition-colors duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black  hover:text-red-500 transition-colors duration-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
    </div>
    <div v-for="(task, index) in tasks" :key="index" class="relative overflow-hidden rounded-lg mt-4">
        <input type="checkbox" class="peer ml-auto mr-4 absolute top-0 opacity-0 inset-x-0 w-4 h-12 z-10 cursor-pointer">
        <div class="bg-slate-300 h-12 w-full pl-5 flex items-center">
            <h1 class="text-lg" :class="{
                'text-green-500': task.status === 'completed',
                'text-yellow-500': task.status === 'in progress',
                'text-red-500': task.status === 'pending'
            }">
            {{ task.title }}
            </h1>
            <div class="ml-auto mr-10 flex items-center space-x-2">
                <RouterLink :to="{name: 'TasksUpdate', params: {id: task.id}}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-blue-700 transition-colors duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </RouterLink>
                <button @click="destroyTask(task.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-red-800 transition-colors duration-300">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </button>
            </div>
            <div class="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
        <hr style="border-color:black">
        <div class="bg-slate-300 overflow-hidden transition-all duration-200 max-h-0 peer-checked:max-h-full">
            <div class="flex justify-between">
                <div class="p-4 text-black">
                    <p>
                        Descrição: {{ task.description }}
                    </p>
                    <p>
                        Prazo: {{ task.due_date }}
                    </p>
                </div>
                <div class="p-4">
                    <button type="submit" @click="updateStatus(task.id, 'completed')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" :class="{'text-green-500': task.status === 'completed'}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-green-500 transition-colors duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <button type="submit"  @click="updateStatus(task.id, 'in progress')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" :class="{'text-yellow-500': task.status === 'in progress'}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black hover:text-yellow-500 transition-colors duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                    <button type="submit"  @click="updateStatus(task.id, 'pending')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" :class="{'text-red-500': task.status === 'pending'}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black  hover:text-red-500 transition-colors duration-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
