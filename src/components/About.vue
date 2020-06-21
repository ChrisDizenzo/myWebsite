<template>
    <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
      <img src="../assets/about.jpg" class="absolute top-0 w-full h-full " alt="">

      <div class="w-full flex flex-col items-center mt-10 md:mt-20  overflow-hidden relative">
        <img alt="Vue logo" class="h-24 w-24 md:h-40 md:w-40 rounded-full border-2 border-gray-400  md:mt-4 mb-2 z-100" src="../assets/ME.png">
        <div class=" flex flex-col items-center mb-6 bg-white rounded-md opacity-75 ">
            <p class="text-xl md:text-3xl text-blue-900 font-medium px-4 py-2">Hi, I'm Chris</p>
        </div>
      </div>
      <div class="w-full lg:w-3/4 lg:container flex flex-col lg:flex-row items-center lg:mt-20 z-10">
        <div class="w-full lg:w-1/2 flex flex-col rounded-t-md lg:rounded-md bg-blue-900 text-white px-2 lg:px-8 md:py-4 mx-2 lg:mx-6">
          <p class="text-xl lg:text-2xl text-left font-medium w-full md:mb-3">About Me</p>
          <p class="text-xs md:text-sm lg:text-md font-normal text-left w-full"> I am a graduate from Boca Raton Community High school and The University of Florida. Throughout my years in education I loved to learn and I loved to apply myself. Nothing made me happier than finding new challenges and overcoming them. From welding and milling as a mechanical engineering to implementing the newest neural network architectures to make a hand-detection device, I enjoyed having hard problems, and finding great solutions. If I had one major skill, its to learn quickly and adapt to new environments. <br> <br>  Thank you for taking the time to visit my website!</p>
          
        </div>
        <div class="w-full lg:w-1/2 flex flex-col rounded-b-md lg:rounded-md bg-blue-900 text-white px-2 lg:px-8 md:py-4 mx-2 mx-6">
          <p class="text-xl lg:text-2xl text-left font-medium w-full md:mb-3">For fun</p>
          <p class="text-xs md:text-sm lg:text-md font-normal text-left w-full">I relax by casually learning. I learn by playing competitive sports. The competition is fun, exciting, and challenges me to better myself in new ways. I learn by taking up new hobbies like cooking or playing instruments. I've been playing music ever since I was little. Lastly, I learn by reading. I mostly use books to relax while I'm on the beach. I am very much a beach person if you couldn't tell by the color choice.</p>
          
          <div class="flex flex-wrap w-full mt-4">
            <p v-for="(fun,ind) in funs" :key="ind" :class="backgCalc(ind)" class="lg:w-1/5 text-center my-2 mx-2 rounded-full text-xs lg:text-sm border border-white-900 cursor-pointer text-white hover:bg-blue-800">{{fun}}</p>

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
            funs: ['Soccer', 'Volleyball', 'Cooking' ,'Guitar', 'Basketball', 'Frisbee','Reading', 'Teaching'],
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