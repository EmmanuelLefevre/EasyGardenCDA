<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from '@/components/include/HeaderComp.vue'
import FooterComp from '@/components/include/FooterComp.vue'
</script>

<style>
@import '@/assets/base.css';
</style>
