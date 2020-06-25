<template >
	<div id="app" >
		<div id="nav" >
      <span class="m-10 " >
             <router-link to="/" >Home</router-link >
      </span >
			<span class="m-10 main-color" >||</span >
			<span class="m-10 " >
              <router-link to="/contact" >Contact</router-link >
      </span >
			<span class="m-10 main-color " >||</span >
			<span class="m-10 " >
             <router-link to="/admin" >Admin</router-link >
      </span >
			<span class="float-right main-color" >
		<strong >	Cart (0)</strong >
			</span >
		</div >
		<router-view />
	</div >
</template >

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
