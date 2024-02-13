<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="w-2/3 bg-white rounded-lg shadow-lg flex space-between flex-col">
            <h1 class="bg-blue-400 text-white rounded-t-lg text-center py-4">
                Public Chat Room
            </h1>
            <ChatMessages />
            <SendField />
        </div>
    </div>   
</template>

<script setup>
import ChatMessages from '@/components/ChatMessages.vue';
import SendField from '@/components/SendField.vue';


</script>
