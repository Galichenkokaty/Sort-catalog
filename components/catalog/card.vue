<template>
    <div class="catalog__card">
        <span v-show="card.price.old_price" class="catalog__card-discount">Скидка</span>
        <div class="catalog__card-thumb thumb">
            <NuxtPicture class="catalog__card-img" :src="card.image.url" />
        </div>
        <div class="catalog__card-content">
            <span v-show="card.code" class="catalog__card-code">{{ card.code }}</span>
            <h4 class="catalog__card-name">{{ card.name }}</h4>
            <div class="catalog__card-price">
                <div class="catalog__card-cost">
                    <span v-show="card.price.old_price" class="catalog__card-cost-old"><del>{{ card.price.old_price }}₽</del></span>
                    <span class="catalog__card-cost-current">{{ card.price.current_price }}₽</span>
                </div>
                <div class="catalog__card-control">
                    <div class="catalog__card-basket --pointer thumb">
                        <NuxtIcon  @click="addStorage('basket', card)" class="catalog__card-basket-icon" name="basket" filled/>
                        <!-- <NuxtIcon  @click="addStorage('basket', card)" class="catalog__card-ok" name="ok" filled/> -->
                    </div>
                    <div class="catalog__card-like --pointer thumb">
                        <NuxtIcon @click="addStorage('like', card)" class="catalog__card-like-icon" name="like" filled/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    const { card } = defineProps(['card']);
    let array;
    // Добавление и удаление из LocalStorage
    function addStorage(category, item){
        if(JSON.parse(window.localStorage.getItem(category)) == null){
            array = [];
        }else{
            array = JSON.parse(window.localStorage.getItem(category));
        }
        if(array.length > 0){
            includeStorage(array,item)
        }else{
            array.push(item)
        }
        window.localStorage.setItem(category, JSON.stringify(array));
    }
    function includeStorage(arr,card){
        let includ = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id == card.id){
                arr.splice(i, 1);
                includ = true
            }
        }
        if(includ == false){
            arr.push(card)
        }
        return includ
    }
</script>