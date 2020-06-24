<template >
	<div class="products container" >
			<router-link to="/admin/product-add">Add new reference</router-link>
		<ProductList />
	</div >
</template >
<script >
    import ProductList from '@/components/Admin/ProductList';

    export default {
        name: 'Products',
        components: {
            ProductList,
        },
    };
</script >

<style scoped >

</style >
