<template>
    <div class="location">
        <div class="title">Location</div>
        <div class="description">Nolrich Heights</div>
    </div>
</template>

<script>
    export default {
        name: "MainLocation"
    }
</script>

<style scoped>
    .location {
        position: relative;
        border: 5px ridge #d3d5da;
        border-radius: 20px;
        grid-column: 1;
        grid-row: 9/10;
        margin-left: 20px;
        background-image: url("../assets/container-bg.png");
    }

    .title {
        position: absolute;
        text-transform: uppercase;
        font-size: 0.6em;
        text-shadow: 3px 0 #2d2b2c,
                2px 0 #2d2b2c,
                -2px 0 #2d2b2c,
                -2px 0 #2D2B2C,
                2px -2px #2d2b2c,
                0 -2px #2d2b2c,
                3px -2px #2d2b2c,
                -2px -2px #2d2b2c,
                -2px 1px #2d2b2c,
                -2px 2px #2d2b2c,
                -1px 2px #2d2b2c,
                2px 2px #2d2b2c,
                1px 2px #2d2b2c,
                0 2px #2d2b2c;
        top: -17px;
        left: 15px;
        letter-spacing: normal;
    }

    .description {
        padding: 7px 15px;
        height: 100%;
    }
</style>