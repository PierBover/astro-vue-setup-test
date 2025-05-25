<script setup lang="ts">
const counter = ref(0);
</script>

<template>
	<h1>{{ counter }}</h1>
	<button @click="() => counter++">Add</button>
</template>