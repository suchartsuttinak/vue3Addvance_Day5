<template>
    <div className='row my-4'>

        <ProductListItem v-for="product in store.products" 
            :key="product.id" :product="product" />

    </div>
</template>

<script setup lang="ts">

    import ProductListItem from '@/components/ProductListItem.vue'
    import { useShoppingStore } from '@/store/index'


    // Mockup Data
    // import products from '@/mockupdata/products'

    // Load from pinia state
    const store = useShoppingStore()

</script>

