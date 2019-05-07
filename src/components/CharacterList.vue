<template>
    <div class="characters">
        <div v-for="character in characters" v-bind:key="character.name" class="character" :class="{'position-back': character.position === 'back'}">
            <div class="picture">
                <img class="picture__img" :src="character.picture" :alt="character.name">
            </div>
            <div class="about">
                <div class="about__row">
                    <div class="name">{{character.name}}</div>
                    <div class="level">{{character.level}}</div>
                </div>
                <div class="about__row">
                    <div class="hp">{{character.hp.max}} / {{character.hp.current}}</div>
                </div>
                <div class="about__row">
                    <div class="mp">{{character.mp.max}} / {{character.mp.current}}</div>
                </div>
            </div>
            <div class="info">
                <div class="status"></div>
                <div class="crystals">{{character.crystals.all}} / {{character.crystals.free}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CharacterList",
        data() {
            return {
                characters: [
                    {
                        name: "Zidane",
                        picture: require("@/assets/characters/zidane.jpg"),
                        level: "21",
                        hp: {max: "350", current: "270"},
                        mp: {max: "30", current: "2"},
                        crystals: {all: "12", free: "9"},
                        position: "front"
                    },
                    {
                        name: "Dagger",
                        picture: require("@/assets/characters/dagger.jpg"),
                        level: "21",
                        hp: {max: "350", current: "270"},
                        mp: {max: "30", current: "2"},
                        crystals: {all: "12", free: "9"},
                        position: "back"
                    },
                    {
                        name: "Vivi",
                        picture: require("@/assets/characters/vivi.jpg"),
                        level: "21",
                        hp: {max: "350", current: "270"},
                        mp: {max: "30", current: "2"},
                        crystals: {all: "12", free: "9"},
                        position: "back"
                    },
                    {
                        name: "Steiner",
                        picture: require("@/assets/characters/steiner.jpg"),
                        level: "21",
                        hp: {max: "350", current: "270"},
                        mp: {max: "30", current: "2"},
                        crystals: {all: "12", free: "9"},
                        position: "front"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .characters {
        display: grid;
        grid-row: 1/9;
        grid-column: 1;
        margin-left: 40px;
    }

    .character {
        height: 157px;
        background-image: url("../assets/container-bg.png");
        box-sizing: content-box;
        border: 3px solid #6e7776;
        border-right-color: #252727;
        border-bottom-color: #252727;
        padding-left: 10px;
        display: grid;
        grid-template-columns: 130px 10fr 10fr;
        column-gap: 10px;
    }

    .character:first-child {
        animation: .3s ease 0s 1 character-slide-in-from-left-1;
    }
    .character:nth-child(2) {
        animation: .3s ease 0s 1 character-slide-in-from-left-2;
    }
    .character:nth-child(3) {
        animation: .3s ease 0s 1 character-slide-in-from-left-3;
    }
    .character:last-child {
        animation: .3s ease 0s 1 character-slide-in-from-left-4;
    }

    .picture {
        height: calc(100% + 3px);
        background: #2e2f32;
        border-top: 3px solid #3b3d40;
        position: relative;
        margin-top: -3px;
    }

    .picture__img {
        display: block;
        height: 100%;
    }

    .about {
        padding: 10px 0;
        display: grid;
    }

    .about__row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .level {
        position: relative;
        width: 50px;
        text-align: right;
    }

    .level::before {
        content: 'L';
        display: block;
        position: absolute;
        font-weight: normal;
        font-size: 1.1em;
        left: -40px;
        text-shadow: #2d2b2c 3px 3px 0,
        #2d2b2c -3px -3px 0,
        #2d2b2c -1px -3px 0,
        #2d2b2c -3px 3px 0,
        #2d2b2c 1px -3px 0,
        #2d2b2c 3px -3px 0,
        #2d2b2c 3px 0 0,
        #2d2b2c -1px 1px 0,
        #2d2b2c 3px 1px 0,
        #2d2b2c 3px -1px 0;
    }

    .level::after {
        content: 'V';
        display: block;
        position: absolute;
        font-weight: normal;
        font-size: 1.1em;
        left: -26px;
        top: 4px;
        text-shadow: #2d2b2c 2px -2px 0,
        #2d2b2c 4px -2px 0,
        #2d2b2c 0 -2px 0,
        #2d2b2c -2px -2px 0,
        #2d2b2c -4px -2px 0,
        #2d2b2c -2px 3px 0,
        #2d2b2c 2px 3px 0,
        #2d2b2c 0 3px 0;
    }

    .hp, .mp {
        position: relative;
        width: 100%;
        text-align: center;
    }

    .hp::before {
        content: 'HP';
        display: block;
        position: absolute;
        text-shadow: 2px 0 #2d2b2c,
        2px 3px #2d2b2c,
        2px -3px #2d2b2c,
        2px 1px #2d2b2c,
        2px -1px #2d2b2c,
        -2px -3px #2d2b2c,
        -2px -1px #2d2b2c,
        -2px 3px #2d2b2c,
        0 3px #2d2b2c,
        0 -3px #2d2b2c,
        -3px -3px #2d2b2c,
        -3px 3px #2d2b2c;
    }

    .mp::before {
        content: 'MP';
        display: block;
        position: absolute;
        text-shadow: 2px 0 #2d2b2c,
        2px 3px #2d2b2c,
        2px -3px #2d2b2c,
        2px 1px #2d2b2c,
        2px -1px #2d2b2c,
        -2px -3px #2d2b2c,
        -2px -1px #2d2b2c,
        -2px 3px #2d2b2c,
        0 3px #2d2b2c,
        0 -3px #2d2b2c,
        -3px -3px #2d2b2c,
        -3px 3px #2d2b2c;
    }

    .info {
        display: grid;
        grid-template-rows: 50px auto;
    }

    .status {
        border-left: 3px solid #6e7776;
        border-bottom: 3px solid #252727;
        width: 100%;
    }

    .crystals {
        position: relative;
        align-self: center;
        justify-self: center;
        margin: auto;
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
    }

    .crystals::before {
        content: '';
        display: block;
        position: absolute;
        top: -25%;
        left: -61px;
        width: 44px;
        height: 44px;
        background: url("../assets/crystal.png") no-repeat center;
    }

    .position-back .picture__img {
        float: right;
    }

    @keyframes character-slide-in-from-left-1 {
        0% {
            transform: translateX(-5%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes character-slide-in-from-left-2 {
        0% {
            transform: translateX(-7%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes character-slide-in-from-left-3 {
        0% {
            transform: translateX(-9%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes character-slide-in-from-left-4 {
        0% {
            transform: translateX(-11%);
        }
        100% {
            transform: translateX(0);
        }
    }
</style>