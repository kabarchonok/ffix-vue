<template>
    <div class="footer">
        <div v-if="page !== 'main'"  class="action action-back" @click="goToMain()">Back</div>
        <div class="action action-help">? Help</div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        computed: {
            page() {
                return this.$store.state.page
            }
        },
        methods: {
            goToMain() {
                this.$store.commit('updatePage', 'main');
            }
        }
    }
</script>

<style scoped>
    .footer {
        grid-column: 1/3;
        grid-row: 10;
        background-image: url("../assets/container-bg.png");
        position: relative;
        padding: 0 15px;
        border: 3px solid #717479;
        border-top: 5px ridge #d3d5da;
        border-right-color: #3a3b43;
        border-bottom-color: #3a3b43;
    }

    .action {
        text-align: center;
        width: 150px;
        cursor: pointer;
        border: 3px solid #717479;
        border-right-color: #3a3b43;
        border-bottom-color: #3a3b43;
        padding: 11px 0 12px;
    }

    .action-back {
        width: 200px;
        float: left;
    }

    .action-help {
        float: right;
    }

    .action:active {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.14) 35%, transparent);
    }
</style>