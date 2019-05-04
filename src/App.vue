<template>
    <div class="screen container">
        <div class="contents">
            <main-menu></main-menu>
        </div>

        <transition name="fade">
            <div v-if="page === 'main'" class="contents">
                <character-list></character-list>
                <main-location></main-location>
                <main-time-gil></main-time-gil>
            </div>
        </transition>

        <div class="footer"></div>
    </div>
</template>

<script>
    import CharacterList from './components/CharacterList'
    import MainMenu from './components/MainMenu'
    import MainLocation from './components/MainLocation'
    import MainTimeGil from './components/MainTimeGil'

    export default {
        name: 'app',
        components: {
            CharacterList,
            MainMenu,
            MainLocation,
            MainTimeGil
        },
        computed: {
            page() {
                return this.$store.state.page;
            }
        }
    }
</script>


<style>
    .screen {
        animation: .4s ease 0s 1 screen-appear;
        margin: 0 auto;
        background-image: url("assets/bg.png");
        width: 1024px;
        height: 768px;
        padding: 20px 10px 0 10px;
        display: grid;
        grid-template-columns: 7fr 3fr;
        grid-gap: 20px;
        grid-template-rows: repeat(10, 64px);
    }

    .contents {
        display: contents;
    }

    .footer {
        grid-column: 1/3;
        grid-row: 10;
        background-image: url("../src/assets/container-bg.png");
        position: relative;
        border-top: 5px ridge #d3d5da;
    }

    .fade-enter-active > *, .fade-leave-active > * {
        transition: all .3s;
    }
    .fade-enter > *, .fade-leave-to > * /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
