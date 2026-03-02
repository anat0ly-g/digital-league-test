<script setup lang="ts"></script>

<template>
    <button class="button"><slot></slot></button>
</template>

<style scoped>
.button {
    padding: 5px 10px;
    border: 1px solid blue;
    border-radius: 5px;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
}

.button:disabled {
    border-color: lightblue;
    cursor: default;
}
</style>
