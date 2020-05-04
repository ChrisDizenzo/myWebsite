<template>
    <div class="flex items-center w-full mb-1">
        <vue-typed-js :strings="msg" :showCursor="false" :startDelay="sDelay" @onComplete="hideCursor" :typeSpeed="30">
        <p class="w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 9rem"> <span class="typing"></span> </p>
        </vue-typed-js>
        <div class="w-2 hoverable" :class="cursorShow? 'bg-white' : 'bg-black'" style="height: 9rem;">
        </div>
    </div>
</template>

<script>
export default {
    props: ['msg', 'sDelay', 'cDelay'],
    data: function() {
        return {
            cursorShow: false,
        }
    },
    methods: {
        hideCursor() {
            setTimeout(() =>  this.cursorShow = false, this.cDelay)
        }
    },
    mounted() {
        console.log('creebo', this.cursorShow)
        setTimeout(() => this.cursorShow = true, this.sDelay-500)
        console.log('creebo', this.cursorShow)

    }
}
</script>

<style>

</style>