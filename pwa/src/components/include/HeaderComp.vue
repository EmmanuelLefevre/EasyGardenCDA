<template>
    <header>
        <img alt="EasyGarden logo" class="logo" src="@/assets/easygarden.png" width="125" height="125" />
        <div class="wrapper">
        <HelloWorld msg="You did it!" />
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
</template>
<script lang="ts">
export default class HeaderComp{}
</script>
