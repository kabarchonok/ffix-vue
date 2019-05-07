<template>
    <div class="screen">
        <div class="container container-absolute">
            <main-menu></main-menu>
        </div>

        <transition name="fade" mode="out-in" appear>
            <div v-if="page === 'main'" :key="1" class="container">
                <character-list></character-list>
                <main-location></main-location>
                <main-time-gil></main-time-gil>
                <Footer></Footer>
            </div>
            <div v-if="page === 'config'" :key="2" class="container">
                <Config></Config>
                <Footer></Footer>
            </div>
        </transition>
    </div>
</template>

<script>
    import MainMenu from './components/MainMenu'
    import CharacterList from './components/CharacterList'
    import MainLocation from './components/MainLocation'
    import MainTimeGil from './components/MainTimeGil'
    import Config from './components/Config'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {
            MainMenu,
            CharacterList,
            MainLocation,
            MainTimeGil,
            Config,
            Footer
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
        height: 840px;
    }

    .container {
        width: inherit;
        height: inherit;
        padding: 20px 10px 0 10px;
        display: grid;
        grid-template-columns: 7fr 3fr;
        grid-gap: 20px;
        grid-template-rows: repeat(10, 64px);
    }

    .container-absolute {
        position: absolute;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s;
        position: absolute;
        top: 0;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave {
        opacity: 1;
    }
</style>
