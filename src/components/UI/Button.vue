<script setup lang="ts"></script>

<template>
    <button v-bind="$attrs" class="button"><slot /></button>
</template>

<style scoped>
.button {
    padding: 5px 10px;
    border: 1px solid blue;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
}
</style>
