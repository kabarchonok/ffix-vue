<template>
    <div class="footer"></div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        grid-column: 1/3;
        grid-row: 10;
        background-image: url("../assets/container-bg.png");
        position: relative;
        border-top: 5px ridge #d3d5da;
    }
</style>