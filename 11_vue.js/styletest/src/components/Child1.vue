<template>
    <div class="main">{{ msg }}</div>
</template>
<script>
    export default {
        name: 'child1',
        data() {
            return {
                msg: 'Child1'
            }
        }
    }
</script>
<style>
    .main {
        border: solid 1px black;
        background-color: yellow;
    }
</style>