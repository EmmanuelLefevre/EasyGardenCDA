<script lang="ts">
export default {
  data () {

  }
}
</script>

<template>
  <div id="home-page">
    <div class="connexion">
      <div class="icon">
        <RouterLink to="/login"><font-awesome-icon :icon="['fas', 'user-circle']"/></RouterLink>  
      </div>
    </div>
    <div class="logo">
      EASY GARDEN
    </div>
    <div class="resume">
      L'application qui vous facilite la gestion de vos équipements de parcs et jardins.<br>
      <RouterLink to="/register"><button>Inscription</button></RouterLink>
    </div>
  </div>
</template>

<style lang="scss">
#home-page {
  background: linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)), url('../assets/KuangSi.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 0.1fr 0.3fr 0.6fr; 
  grid-gap: 2rem 1rem;
  .connexion {
    grid-area: 1/4/2/5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    grid-gap: 3rem 1rem;
    .icon {
      grid-area: 1/3;
      svg {
        color: var(--vt-c-main-green);
        border: 2px solid var(--vt-c-border-button);
        border-radius: 2.5rem;
        font-size: 3rem;
        &:hover {
          color: var(--vt-c-low-background);
        }
      }
    }
  }
  .logo {
    grid-area: 2/1/3/5;
    margin: auto;
    font-family: "Charlotte Southern";
    -webkit-text-stroke: 1px var(--vt-c-border-button);
    font-weight: 200;
    font-size: 10rem;
    color: var(--vt-c-main-green);
  }
  .resume {
    grid-area: 3/2/4/4;
    color: var(--vt-c-low-background);
    text-align: center;
    button {
      color: var(--vt-c-white);
      background-color: var(--vt-c-main-green);
      border: 2px solid var(--vt-c-border-button);
      border-radius: 4px;
      margin-top: 5rem;
      padding: 0.5rem 1rem;
      &:hover {
        color: var(--vt-c-text-button);
        background-color: var(--vt-c-white);
        border-color: var(--vt-c-main-green);
      }
    }
  }
}

</style>
