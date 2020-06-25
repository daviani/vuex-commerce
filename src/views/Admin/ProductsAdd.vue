<template >
	<div class="container" >
		<h3 >Create a new book</h3 >
		<ProductForm />
	</div >
</template >

<script >
    import ProductForm from '../../components/Admin/ProductForm'

    export default {
        name: 'ProductsAdd',
        components: {
            ProductForm
        }
    }
</script >
