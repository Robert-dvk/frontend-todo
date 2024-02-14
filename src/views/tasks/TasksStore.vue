<script setup>
    import { reactive } from 'vue';
    import useTasks from '@/composables/tasks';

    const { storeTask, errors } = useTasks();

    const form = reactive({
        title: "",
        description: "",
        due_date: "",
        status: "pending"
    })
</script>
<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-slate-300 shadow-md rounded-md" @submit.prevent="storeTask(form)">
            <div class="space-y-6">
                <div class="mb-6">
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" v-model="form.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.title">
                        <span class="text-sm text-red-400">{{ errors.title[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="description" v-model="form.description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.description">
                        <span class="text-sm text-red-400">{{ errors.description[0] }}</span>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="due_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
                    <input type="date" id="due_date" v-model="form.due_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <div v-if="errors.due_date">
                        <span class="text-sm text-red-400">{{ errors.due_date[0] }}</span>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="px-4 py-2 mr-4 bg-indigo-500 hover:bg-indigo-800 rounded text-white">Store</button>
                </div>
            </div>
        </form>
    </div>
</template>