<template>
    <div class="catalog col --12 center-wrap">
        <Breadcrums />
        <h1 class="catalog__title">Комплекты стеллажных систем</h1>
        <div class="catalog__sort">
            <div class="sort__items">
                <div class="sort__item">
                    <label>Сортировать по:</label>
                    <select v-model="filterPrice" name="" id="" class="sort__drop-down-items">
                        <option v-for="(option, index) in priceSort" :value="option.id" class="sort__drop-down-item">{{ option.name }}</option>
                    </select>
                </div>
                <div class="sort__item">
                    <label>Материал:</label>
                    <select v-model="filterMaterials" name="" id="" class="sort__drop-down-items">
                        <option value="all" selected>Выбрать метриал</option>
                        <option v-for="(option, index) in materials" :value="option.id" class="sort__drop-down-item">{{ option.name }}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="catalog__cards">
            <CatalogCard v-show="filterMaterials == 'all' || filterMaterials == card.material" v-for="(card, index) in sortPrice()" :card="card" />
        </div>
    </div>
</template>
<script setup>
    import '~/components/catalog/__catalog.css';
    import itemsArray from '~/assets/items.json';
    import materialsArray from '~/assets/materials.json';
    const cards = ref(itemsArray)
    const materials = ref(materialsArray);
    const priceSort = ref(
        [
            {
                id:'1',
                name:'Цена по возрастанию'
            },
            {
                id:'2',
                name:'Цена по убыванию'
            },
        ]
    )
    const filterPrice = ref(1);
    const filterMaterials = ref('all');

    function sortPrice(){
        return itemsArray.sort((a,b) =>{
            if(filterPrice.value == 2){
                return b.price.current_price - a.price.current_price;
            }else{
                return a.price.current_price - b.price.current_price;
            }
        })
    }
</script>