<template >
	<div class="container" >
		<div class="jumbotron" >
			<h1 class="display-3" >Cart</h1 >
			<hr class="my-4" >
			<div v-if="cart" >
				<div :key="product.id" v-for="product in cart.products" >
					<ul >
						<li >
							{{product.quantity}} || {{product.title}} || {{product.price}} €
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
        }
    }
</script >

<style scoped >

</style >
