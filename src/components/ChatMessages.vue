<template>
    <div class="overflow-hidden h-96 overflow-y-auto" ref="messages">
        <ul>
            <li v-for="message in data" :key="message.id" class="p-2">
                <span class="text-blue-400 font-bold">
                    {{message.createdAt}}
                    {{message.user}}: 
                </span>
                <span class="text-gray-600">
                    {{message.message}}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { onUpdated, watch, watchEffect } from 'vue';
    import { ref } from 'vue';
    import  useCollection  from '../composibles/useCollection';
    const {data , error} = useCollection('messages');

    const messages = ref();

    onUpdated(() => {
        messages.value.scrollTop = messages.value.scrollHeight;
    });


</script>
