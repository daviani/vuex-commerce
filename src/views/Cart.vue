<template >
	<div class="container" >
		<div class="jumbotron" >
			<h1 class="display-3" >Cart</h1 >
			<hr class="my-4" >
			<div v-if="cart" >
				<div :key="product.id" v-for="product in cart.products" >
					<ul >
						<li >
							<span class="quantity" >
							<i @click="decrementQuantity(product)"
						        class="fa fa-lg fa-minus-circle" >
							</i >
								{{product.quantity}}
								<i @click="incrementQuantity(product)"
								   class="fa fa-lg fa-plus-circle" >
							</i >
							</span >
							<span class="product" >
								{{product.title}} || {{product.price}} €
							</span >
							<hr class="mb-2" >
						</li >
					</ul >
				</div >
			</div >
		</div >
	</div >
</template >

<script >
    export default {
        name    : 'Cart',
        computed: {
            cart() {
                return this.$store.state.cart
            }
        },
        methods : {
            incrementQuantity(product) {
                this.$store.dispatch('updateCart', product)
            },
            decrementQuantity(product) {
                this.$store.dispatch('removeOneFromCart', product)
            }
        }

    }
</script >

<style scoped >
	.quantity {
		font-size   : 17px;
		font-weight : bold;
		margin      : 3px;
		padding     : 3px;
		}

	.product {
		height : 89px;
		margin : 25px;
		width  : 80%;
		}

	li {
		list-style : none;
		}

	i {
		color : #42B983;
		}
</style >
