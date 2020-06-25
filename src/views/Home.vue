<template >
	<div class="home" >
		<h1 class="display-1" >BooKShop</h1 >
		<hr >
		<Products />
	</div >
</template >

<script >
    import Products from './Products'

    export default {
        name      : 'Home',
        components: {
            Products
        }
    }
</script >

<style scoped >
	h1 {
		color       : #42B983;
		font-weight : bolder;
		text-align  : center;
		}

	hr {
		background-color : #42B983;
		}
</style >
