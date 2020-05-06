<template>
    <div class="flex items-center w-full mb-1">
        <div class="items center w-full mb-1 hidden lg:flex">
            <vue-typed-js :strings="msg" :showCursor="false" :startDelay="sDelay" @onComplete="hideCursor" :typeSpeed="30">
            <p class="w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 7rem"> <span class="typing"></span> </p>
            </vue-typed-js>
            <div class="w-2 hoverable" :class="cursorShow? 'bg-white' : 'hidden'" style="height: 9rem;">
            </div>
        </div>
        <div class="flex lg:hidden items center w-full mb-1">
            <vue-typed-js :strings="msg" :showCursor="false" :startDelay="sDelay" @onComplete="hideCursor" :typeSpeed="30">
            <p class="w-full text-bold text-white leading-tight text-xl" style="font-weight: 700;"> <span class="typing"></span> </p>
            </vue-typed-js>
            <div class="w-2 hoverable" :class="cursorShow? 'bg-white' : 'hidden'" style="height: 2rem;">
            </div>
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