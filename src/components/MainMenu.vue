<template>
    <div class="menu" :class="{'menu--selected': activeItem !== 'main'}">
        <div v-for="item in items"
             v-bind:key="item"
             @click="goTo(item)"
             class="item"
            :class="{
                'item--hidden': item !== activeItem && activeItem !== 'main',
                'item--active': item === activeItem
            }">
            {{item}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainMenu",
        data() {
            return {
                items: [
                    'item',
                    'ability',
                    'equip',
                    'status',
                    'order',
                    'card',
                    'config',
                ],
            }
        },
        computed: {
            activeItem() {
                return this.$store.state.page
            }
        },
        methods: {
            goTo(page) {
                if (page !== this.activeItem)
                    this.$store.commit('updatePage', page);
                else
                    this.$store.commit('updatePage', 'main');
            }
        }
    }
</script>

<style scoped>
    .menu {
        transition: height .3s;
        display: grid;
        list-style-type: none;
        grid-column: 2/3;
        grid-row: 1/8;
        height: 100%;
        background-image: url("../assets/container-bg.png");
        border: 5px ridge #d3d5da;
        border-radius: 20px;
    }

    .menu--selected {
        height: 64px;
    }

    .item {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.1em;
        border: 3px solid #6e7776;
        border-right-color: #252727;
        border-bottom-color: #252727;
        text-transform: capitalize;
    }

    .item:active {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 35%, transparent);
    }

    .item:hover::before {
        content: '';
        display: block;
        position: absolute;
        width: 100px;
        height: 50px;
        top: 25px;
        left: -80px;
        background: url("../assets/cursor.png")no-repeat center;
    }

    .item:first-child {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }

    .item:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }

    .item--hidden {
        display: none;
    }

    .item--active {
        border-radius: 12px;
        cursor: default;
    }

    .item--active:active {
        background: none;
    }

    .item--active:hover::before {
        content: none;
    }
</style>