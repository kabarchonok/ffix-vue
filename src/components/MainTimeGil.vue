<template>
    <div class="time-gil">
        <div class="title">Time & Gil</div>
        <div class="time">03 : 07 : 43 </div>
        <div class="money">4543</div>
    </div>
</template>

<script>
    export default {
        name: "MainTimeGil"
    }
</script>

<style scoped>
    .time-gil {
        position: relative;
        grid-row: 8/10;
        grid-column: 2;
        display: grid;
        text-align: right;
        padding: 13px 30px;
        font-size: 1.2em;
        background-image: url("../assets/container-bg.png");
        border: 5px ridge #d3d5da;
        border-radius: 20px;
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

    .time, .money {
        position: relative;
    }

    .time::before {
        content: '';
        display: block;
        position: absolute;
        height: 40px;
        width: 40px;
        background: url("../assets/time.png")no-repeat center;
    }

    .money::before {
        content: '';
        display: block;
        position: absolute;
        height: 37px;
        width: 37px;
        background: url("../assets/money.png")no-repeat center;
    }

    .money::after {
        content: 'G';
        text-transform: uppercase;
        font-size: 0.73em;
    }
</style>