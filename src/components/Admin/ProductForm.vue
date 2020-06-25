<template >
	<div class="mt-5" >
		<form @submit.prevent="create"
		      class="form-control" >
			<div class="row" >
				<div class="col-6" >
					<div class="form-group" >
						<label for="title" >Title</label >
						<input class="form-control"
						       id="title"
						       placeholder="Enter title"
						       type="text"
						       v-model="book.title" >
					</div >
					<div class="form-group" >
						<label for="firstName" >First name</label >
						<input class="form-control"
						       id="firstName"
						       placeholder="Author first name"
						       type="text"
						       v-model="book.author.firstName" >
					</div >
					<div class="form-group" >
						<label for="publisher" >Publisher</label >
						<input class="form-control"
						       id="publisher"
						       placeholder="Publisher"
						       type="text"
						       v-model="book.publisher" >
					</div >
					<div class="form-group" >
						<label for="id" >Id (ISBN *)</label >
						<input class="form-control"
						       id="id"
						       placeholder="Enter ISBN"
						       type="number"
						       v-model="book.id" >
					</div >
				</div >
				<div class="col-6" >
					<div class="form-group" >
						<label class="control-label" >Price</label >
						<div class="input-group mb-3" >
							<div class="input-group-prepend" >
								<span class="input-group-text" >€</span >
							</div >
							<input aria-label="Amount"
							       class="form-control"
							       type="text"
							       v-model="book.price" >

							<div class="input-group-append" >
								<span class="input-group-text" >.00</span >
							</div >
						</div >
					</div >
					<div class="form-group" >
						<label for="lastName" >Last name</label >
						<input class="form-control"
						       id="lastName"
						       placeholder="Author last name"
						       type="text"
						       v-model="book.author.lastName" >
					</div >
					<div class="form-group" >
						<label for="year" >Year</label >
						<input class="form-control"
						       id="year"
						       placeholder="Publication year"
						       type="number"
						       v-model="book.year" >
					</div >
					<div class="form-group" >
						<label for="image" >Image</label >
						<input class="form-control"
						       id="image"
						       placeholder="Image"
						       type="text"
						       v-model="book.image" >
					</div >
				</div >
			</div >

			<button class="btn btn-dark shadow-sm mt-3" type="submit" >Submit</button >
		</form >
	</div >
</template >
<script >
    export default {
        name: 'ProductForm',
        data() {
            return {
                book: {
                    title: '',
                    id: '',
                    author: {
                        firstName: '',
                        lastName: ''
                    },
                    publisher: '',
                    year: '',
                    price: '',
                    image: ''
                }
            }
        },
        methods: {
            create() {
                console.log(this.book)
                this.$store.dispatch('createProduct', this.book)
            }
        }
    }
</script >
