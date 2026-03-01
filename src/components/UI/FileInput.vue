<script setup lang="ts"></script>

<template>
    <label class="label">
        <slot></slot>
        <input class="visually-hidden" type="file" v-bind="$attrs" />
    </label>
</template>

<style scoped>
.label {
    text-wrap: nowrap;
    padding: 5px 10px;
    border: 1px solid blue;
    border-radius: 5px;
    cursor: pointer;
}
</style>
