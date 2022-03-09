<template>
  <header>
    <RouterLink to="/"><img alt="EasyGarden logo" class="logo" src="@/assets/easygarden.png" width="75" height="75" /></RouterLink>
    <div class="wrapper">
      <nav>
        <RouterLink to="/lightning">Eclairage</RouterLink>
        <RouterLink to="/watering">Arrosage</RouterLink>
        <RouterLink to="/pool">Bassin</RouterLink>
        <RouterLink to="/lawnmower">Tondeuse</RouterLink>
        <RouterLink to="/portal">Portail</RouterLink>
        <RouterLink to="/login">Connexion</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
export default new class HeaderComp{}
</script>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.logo {
  display: inline;
}
a {
  text-decoration: none;
  color: #a6a6a6;
  transition: 0.4s;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>
