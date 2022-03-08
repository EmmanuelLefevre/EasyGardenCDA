<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderComp from '@/components/include/HeaderComp.vue'
import FooterComp from '@/components/include/FooterComp.vue'
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style>
@import '@/assets/base.css';

#app {
  margin: 0 auto;
  min-height:100%;
  max-width: 1280px;
  padding-bottom:100px;
}
</style>
