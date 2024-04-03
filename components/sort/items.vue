<template>
    <div class="sort__items">
        <SortItem v-for="(item, index) in list" :item="item" />
    </div>
</template>
<script setup>
    import '~/components/sort/__sort.css';
    import materialsArray from '~/assets/materials.json';
    const materials = ref(materialsArray);
    const list = ref([
        {
            label:'Сортировать по:',
            items: [
                {
                    id:'1',
                    name:'Цена по возрастанию'
                },
                {
                    id:'2',
                    name:'Цена по убыванию'
                },
            ]
        },
        {
            label:'Материал:',
            items: materials
        },
    ])
</script>