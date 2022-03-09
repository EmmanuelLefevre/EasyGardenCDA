<template>
  <footer>
    <a>©2022 <a class="tc">LEFEVRE Emmanuel</a> - All rights reserved.</a>
    <div class="container-custom">
        <div class="border-custom">
            <ul>
                <li>
                <router-link to="https://github.com/EmmanuelLefevre" target="new"><font-awesome-icon :icon="['fab', 'github']"/></router-link>
                </li>
                <li>
                <router-link to="https://www.linkedin.com/in/emmanuel-l-06350b167/" target="new"><font-awesome-icon :icon="['fab', 'linkedin']"/></router-link>
                </li>
                <li>
                <router-link to="" target="new"><font-awesome-icon :icon="['fas', 'envelope']"/></router-link>
                </li>
            </ul>
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default new class FooterComp{}

</script>

<style lang="scss">
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--vt-c-low-background);
  margin-top: 7.5rem;
  padding-top: 1rem;
  bottom : 0px;
  text-align: center;
  color: var(--vt-c-grey);
  .tc {
    color: var(--vt-c-main-green);
    font-size: 16px;
  }
  div {
    margin-bottom: 0.7rem;
    ul {
      padding: 0 1rem;
      li {
        display: inline;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        font-size:25px;
        svg {
          color: var(--vt-c-main-green);
          &:hover {
            color: var(--vt-c-grey);
          }
        }
      }
    }
  }
}
</style>
