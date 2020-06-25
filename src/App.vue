<template >
	<div id="app" >
		<div id="nav" >
			<span class="m-10 " >
                <router-link to="/" >Home</router-link >
            </span >
			<span class="m-10 " >
              <router-link to="/contact" >Contact</router-link >
            </span >
			<span class="m-10 " >
                <router-link to="/admin" >Admin</router-link >
            </span >
			<span class="float-right main-color" >
				<router-link to="/cart" >
					<strong >	Cart ( {{cart.length}} )</strong >
				</router-link >

			</span >
		</div >

		<router-view />
	</div >
</template >

<script >
    export default {
        computed: {
            cart() {
                return this.$store.state.cart
            }
        }
    }
</script >

<style >
	.main-color {
		color : #42B983;
		}

	#nav {
		padding : 30px;
		}

	#nav a {
		color : #42B983;
		}

	.m-10 {
		margin : 10px;
		}
</style >
