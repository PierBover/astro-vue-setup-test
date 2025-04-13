<script setup lang="ts">
const count = ref(0);

function add () {
	count.value ++;
}
</script>

<template>
	<p>{{ count }}</p>
	<button @click="add">Add</button>
</template>