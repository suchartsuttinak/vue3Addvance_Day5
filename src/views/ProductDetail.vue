<template>
    <div class="row mt-4">
        <div class="col-md-4">
            <img :src="store.products.find(x => x.id === pid)?.image" class="card-img-top rounded" alt="..." />
        </div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-8 mt-3">
                    <h2 class="fw-bold mb-4">{{ store.products.find(x => x.id === pid )?.name }}</h2>
                </div>
                <div class="col-md-4 text-end">
                    <router-link to='/' class="btn btn-primary"><i class="bi bi-caret-left"></i> กลับหน้าหลัก</router-link>
                </div>
            </div>
            <p class="card-text">{{ store.products.find(x => x.id === pid )?.detail }}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aut repudiandae culpa neque atque, officiis odio voluptas fuga autem dolorum, similique quibusdam nobis dolorem nihil quo. Repudiandae consequatur molestiae expedita ea mollitia explicabo debitis facere voluptas vel. Laudantium, possimus autem fugit assumenda, aspernatur consequatur in, distinctio sed omnis alias eos!</p>
            <button class="btn btn-success" @click="store.addToCart(store.products.find(x => x.id === pid))">
                <i class="bi bi-cart-check"></i> เพิ่มลงรถเข็น
            </button>
        </div>
    </div>

</template>

<script setup lang="ts">

    import { useRoute } from 'vue-router'
    import { useShoppingStore } from '@/store/index'

    // Mockup Data
    // import products from '@/mockupdata/products'

    // Load from pinia state
    const store = useShoppingStore()


    const route = useRoute()
    let pid = Number(route.params.id)

</script>

<style scoped>

</style>