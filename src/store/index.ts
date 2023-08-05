import {defineStore} from 'pinia'
import Swal from 'sweetalert2'
import products from '@/mockupdata/products'

export const useShoppingStore = defineStore('shopping', {

    state: () => {
        return {
            products: products,
            cartItems: []
        }
    },
    actions: {

        // Add to cart
        addToCart(item: any) {
            let index = this.cartItems.findIndex((product:any) => product.id === item.id)

            if(index !== -1){
                this.cartItems[index].quantity += 1
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been updated',
                    showConfirmButton: false,
                    timer: 1000
                })
            }else{
                item.quantity = 1
                this.cartItems.push(item)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your item has been saved',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        },


        // Increment Quantity
         incrementQ(item: any) {
            let index = this.cartItems.findIndex((product:any) => product.id === item.id)
            if(index !== -1){
                this.cartItems[index].quantity += 1
         }
      
        },

        decrementQ(item:any){
            let index = this.cartItems.findIndex((product:any) => product.id === item.id)
            if(index !== -1){
                this.cartItems[index].quantity -= 1
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter((product:any) => product.id !== item.id)
                }
         } 
        },
  
        // REmove Item
        removeFromCart(item:any){
            this.cartItems = this.cartItems.filter((product:any) => product.id !== item.id)
        }
    }
    
})