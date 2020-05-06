<template>
    <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
      <div class="w-full flex flex-col items-center mt-20 shadow-xl overflow-hidden relative">
        <img src="../assets/about.jpg" class="absolute top-0 w-full " style="top: -170%" alt="">
        <img alt="Vue logo" class="h-40 w-40 rounded-full border-2 border-gray-400 shadow-lg mt-4 mb-2 z-10" src="../assets/ME.png">
        <div class=" flex flex-col items-center mb-6 bg-white rounded-md opacity-75 shadow-lg">
            <p class="text-3xl text-blue-900 font-medium px-4 py-2">Hi, I'm Chris</p>
        </div>
      </div>
      <div class="container flex items-center mt-20">
        <div class="w-1/2 flex flex-col rounded-md bg-blue-900 text-white px-8 py-4 mx-6">
          <p class="text-2xl text-left font-medium w-full mb-3">About Me</p>
          <p class="text-md font-normal text-left w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br> <br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </div>
        <div class="w-1/2 flex flex-col rounded-md bg-blue-900 text-white px-8 py-4 mx-6">
          <p class="text-2xl text-left font-medium w-full mb-3">For fun</p>
          <p class="text-md font-normal text-left w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          
          <div class="flex flex-wrap w-full mt-4">
            <p v-for="(fun,ind) in funs" :key="ind" :class="backgCalc(ind)" class="w-1/5 text-center  mx-2 rounded-full text-sm border border-white-900 cursor-pointer text-white hover:bg-blue-800">{{fun}}</p>

          </div>

        </div>
      </div>
    </div>
</template>

<script>
import contactInfo from '../assets/data/contactInfo.json'
export default {
  name: "About",
    data: function () {
        return {
            email: contactInfo['email'],
            linkedin: contactInfo['linkedin'],
            phoneNumber: contactInfo['phoneNumber'],
            funs: ['Soccer', 'Volleyball', 'Guitar', 'Pasta'],
        }
    },
    methods: {
      backgCalc(ind) {
        let colors = ['bg-teal-600','bg-blue-700', 'bg-blue-600']
        ind = ind%colors.length
        return colors[ind]
      }
    }
}
</script>

<style>

</style>