<template>
    <div class="breadcrums">
        <ul class="breadcrums__list">
            <li class="breadcrums__item">
                <NuxtLink to="#" class="breadcrums__link">Главная</NuxtLink>
            </li>
            <li class="breadcrums__item">
                <NuxtLink to="#" class="breadcrums__link">Системы хранения</NuxtLink>
            </li>
            <li class="breadcrums__item">
                <span class="breadcrums__link">Комплекты стеллажных систем</span>
            </li>
        </ul>
    </div>
</template>
<script setup>
    import '~/components/breadcrums/__breadcrums.css'
</script>