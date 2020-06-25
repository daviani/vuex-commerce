<template >
	<div class="d-flex flex-wrap container" v-if="products" >
		<div :key="product.id"
		     class="card m-3 product-single d-flex flex-column justify-content-between  "
		     v-for="product in products" >
			<h3 class="card-header card-title text-center" >{{product.title}}</h3 >
			<img :src="product.image"
			     alt="product-image"
			     class="Card image  product-image" />

			<div class="card-body" >
				<div class="text-center main-color" >
					<strong >{{ product.price }} €</strong >
				</div >
			</div >
			<button @click="addToCart(product)"
			        class="btn btn-outline-primary cust-btn" >
				<strong > Add to cart</strong >
			</button >
		</div >
	</div >

</template >
<script >
    export default {
        name    : 'Products',
        created() {
            this.$store.dispatch('getProducts')
        },
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        methods : {
            addToCart(product) {
                this.$store.dispatch('addToCart', product)
                .then(() => {
                    console.log(this.$store.state.products)
                })
            }
        }
    }
</script >

<style scoped >
	.product-single {
		width : 300px;
		}

	.product-image {
		border-radius : 12px;
		box-shadow    : 0 0 21px -1px rgba(0, 0, 0, 0.5);
		margin-left   : auto;
		margin-right  : auto;
		margin-top    : 20px;
		width         : 30%;
		}

	.card-title {
		height : 130px !important;
		}


</style >
