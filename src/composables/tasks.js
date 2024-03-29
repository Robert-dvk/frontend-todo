import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/V1/';

export default function useTasks() {
    const tasks = ref([]);
    const task = ref([]);
    const errors = ref([]);
    const router = useRouter();

    const getTasks = async () => {
        const response = await axios.get("tasks");
        tasks.value = response.data.data;
    }

    const getTask = async(id) => {
        const response = await axios.get("tasks/" + id);
        task.value = response.data.data;

    };

    const storeTask = async (data) => {
        try {
            await axios.post("tasks", data);
            await router.push({name: "TasksIndex"});
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateTask = async(id) => {
        try {
            await axios.put("tasks/" + id, task.value)
            await router.push({name: "TasksIndex"});
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyTask = async(id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("tasks/" + id);
        await getTasks();
    }

     const updateStatus = async(id, status) => {
        task.status = status;
        await axios.put("tasks/" + id + "/updatestatus", task)
        await router.push({name: "TasksIndex"});
        window.location.reload();
     }

    return {
        tasks,
        task,
        getTasks,
        getTask,
        destroyTask,
        updateTask,
        storeTask,
        updateStatus,
        errors
    }
}