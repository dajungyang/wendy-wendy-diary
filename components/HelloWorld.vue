<template>
    <span>
        {{ msg }}
    </span>
</template>

<script>
    export default {
        name: "HelloWorld",
        // props: {
        //     msg
        // },
        data () {
            return {
                msg: 'new message'
            }
        }
    }
</script>

<style scoped>

</style>