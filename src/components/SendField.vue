<template>
    <div class="border-t-2 border-gray-200 p-4">
        <form class="flex items-center justify-between">
            <input type="text" placeholder="Type your message here..." class="border-1 border-slate-600 px-4 py-2 rounded-lg w-4/5" v-model="message">
            <button type="submit" class="text-sm border-1 border-slate-600 px-4 py-2 rounded-lg text-gray-600" @click.prevent="sendMessage">
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useMessage from '../composibles/useMessage';
const message = ref();

const sendMessage = () => {
    if (!message.value) return;

    let newMessage = {
        message: message.value,
        user : 'user',
        createdAt : new Date().toLocaleString()
    }
    useMessage(newMessage);
    message.value = '';
}
</script>

