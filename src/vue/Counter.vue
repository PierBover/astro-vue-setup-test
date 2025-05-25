<script setup lang="ts">
const counter = ref(0);
const props = defineProps(['title']);
</script>

<template>
	<h1>{{ props.title }}</h1>
	<h2>{{ counter }}</h2>
	<button @click="() => counter++">Add</button>
</template>