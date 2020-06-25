<template >
	<div >
		<table class="table" >
			<thead >
			<tr >
				<th scope="col" >id</th >
				<th scope="col" >Title</th >
				<th scope="col" >Author</th >
				<th scope="col" >Publisher</th >
				<th scope="col" >Year</th >
				<th scope="col" >Image</th >
				<th scope="col" ></th >
				<th scope="col" ></th >
			</tr >
			</thead >
			<tbody >
			<tr :key="product.id"
			    v-for="product in products" >
				<th scope="row" >{{product.id}}</th >
				<td >{{product.title}}</td >
				<td >{{product.author.firstName}} {{product.author.lastName}}</td >
				<td >{{product.publisher}}</td >
				<td >{{product.year}}</td >
				<td >{{product.image}}</td >
				<td >
					<div class="badge badge-warning" >Edit</div >
				</td >
				<td >
					<div class="badge badge-danger" >Edit</div >
				</td >
			</tr >
			</tbody >
		</table >
	</div >
</template >
<script >
    export default {
        name: 'Products',
        created() {
            this.$store.dispatch('getProducts')
        },
        computed: {
            products() {
                return this.$store.state.products
            }
        }
    }
</script >
