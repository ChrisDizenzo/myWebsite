<template>
    <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
      <div class="container flex flex-col items-center mt-16">
        <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700;">About me</p>        
        <img alt="Vue logo" src="../assets/ME.png">
        <div class="container flex flex-col items-center">
            <p class="text-2xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700;">{{email}}</p>    
            <p class="text-2xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700;">{{linkedin}}</p>   
            <p class="text-2xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700;">{{phoneNumber}}</p>       
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
            phoneNumber: contactInfo['phoneNumber']
        }
    },
}
</script>

<style>

</style>