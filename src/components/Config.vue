<template>
    <div class="config">
        <div class="title">Config</div>
        <div class="list">
            <div v-for="(item, index) in config" :key="index" class="item">
                <div class="item__name">{{item.name}}</div>
                <div
                        class="item__state"
                        :class='{"item__state--active": item.activeState === 1}'
                        @click="item.activeState = 1">
                    {{item.stateOne}}
                </div>
                <div
                        class="item__state"
                        :class='{"item__state--active": item.activeState === 2}'
                        @click="item.activeState = 2">
                    {{item.stateTwo}}
                </div>
            </div>
        </div>
        <div class="booster">
            <div class="title">Booster</div>
            <div class="actions">
                <div class="action">Master Abilities</div>
                <div class="action">Lv/Mag stone Max</div>
                <div class="action">Gill Max</div>
            </div>
            <div class="postscript">
                *This feature cannot be disabled once active.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Config",
        data() {
            return {
                config: [
                    {name: 'sound', stateOne: 'on', stateTwo: 'off', activeState: 1},
                    {name: 'sound effects', stateOne: 'on', stateTwo: 'off', activeState: 1},
                    {name: 'controls', stateOne: 'normal', stateTwo: 'custom', activeState: 1},
                    {name: 'cursor', stateOne: 'initial', stateTwo: 'memory', activeState: 1},
                    {name: 'ATB', stateOne: 'active', stateTwo: 'wait', activeState: 2},
                    {name: 'Battle Camera', stateOne: 'auto', stateTwo: 'fixed', activeState: 1},
                    {name: 'Skip Battle Camera', stateOne: 'on', stateTwo: 'off', activeState: 2},
                    {name: 'cursor', stateOne: 'initial', stateTwo: 'memory', activeState: 1},
                    {name: 'sound', stateOne: 'on', stateTwo: 'off', activeState: 1},
                    {name: 'sound effects', stateOne: 'on', stateTwo: 'off', activeState: 1},
                    {name: 'controls', stateOne: 'normal', stateTwo: 'custom', activeState: 1},
                    {name: 'cursor', stateOne: 'initial', stateTwo: 'memory', activeState: 1},
                    {name: 'ATB', stateOne: 'active', stateTwo: 'wait', activeState: 2},
                    {name: 'Battle Camera', stateOne: 'auto', stateTwo: 'fixed', activeState: 1},
                    {name: 'Skip Battle Camera', stateOne: 'on', stateTwo: 'off', activeState: 2},
                    {name: 'cursor', stateOne: 'initial', stateTwo: 'memory', activeState: 1},
                ]
            }
        }
    }
</script>

<style scoped>
    .config {
        display: grid;
        grid-template-rows: inherit;
        grid-gap: inherit;
        grid-row: 2/10;
        grid-column: 1/3;
        position: relative;
        border-top: 5px ridge #d3d5da;
        margin-top: -5px;
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
        top: -13px;
        left: 15px;
        letter-spacing: normal;
    }

    .list {
        overflow-y: scroll;
        grid-row: 1/7;
    }

    .list::-webkit-scrollbar {
        width: 0;
    }


    .item {
        display: flex;
        width: 100%;
        text-transform: capitalize;
        border-color: #717479;
        background-image: url("../assets/container-bg.png");
    }

    .item__name {
        width: 40%;
        padding: 16px 0 16px 40px;
    }

    .item__state {
        color: #656465;
        width: 30%;
        text-align: center;
        padding: 16px 0;
        cursor: pointer;
    }

    .item__name,
    .item__state {
        border: 3px solid #717479;
        border-right-color: #3a3b43;
        border-bottom-color: #3a3b43;
    }

    .item__state--active {
        color: inherit;
    }

    .booster {
        grid-row: 7/9;
        position: relative;
        border-top: 5px ridge #d3d5da;
        background-image: url("../assets/container-bg.png");
    }

    .actions {
        display: flex;
    }

    .action {
        flex: 1;
        border: 3px solid #717479;
        border-right-color: #3a3b43;
        border-bottom-color: #3a3b43;
        text-align: center;
        padding: 16px 0;
        cursor: pointer;
    }

    .postscript {
        text-align: center;
        font-size: .8em;
        padding: 16px 0;
    }
</style>