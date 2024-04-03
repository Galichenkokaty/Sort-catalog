<template>
    <div class="sort__item">
        <label>{{ item.label }}</label>
        <select name="" id="" class="sort__drop-down-items">
            <option v-for="(option, index) in item.items" class="sort__drop-down-item">{{ option.name }}</option>
        </select>
    </div>
</template>
<script setup>
    const { item } = defineProps(['item'])
</script>