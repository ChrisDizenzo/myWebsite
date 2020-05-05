<template>
  <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
        <div class="container flex flex-col items-center">
            <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 8rem">{{email}}</p>    
            <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 8rem">{{linkedin}}</p>   
            <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 8rem">{{phoneNumber}}</p>       
        </div>
        <div class="container flex flex-col items-center">
            <title class="text-6xl w-full text-bold text-gray-900 text-center leading-tight">{{TA['UF Teaching Assistant'].titleL}}</title>
            <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 3rem">{{TA['UF Teaching Assistant'].titleL}}</p>  
            <li v-for="(val, ind) in TA['UF Teaching Assistant'].description" :key="ind" class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 2rem">{{val}}</li>  
        </div>
    </div>
</template>

<script>
import contactInfo from '../assets/data/contactInfo.json'
export default {
    name: "Contact",
    data: function () {
        return {
            email: contactInfo['email'],
            linkedin: contactInfo['linkedin'],
            phoneNumber: contactInfo['phoneNumber'],
            TA : {
                "UF Teaching Assistant":{
                    titleL: "University of Florida Teaching Assistant (Discrete Structures)",
                    description: [ "Led weekly class discussions of over 40 students and developed a practice problem library with solutions in order to enhance students’ understanding of logic, algorithmic complexity, discrete probability, and graphs.", "Provided reviews of coding interview questions in order to enhance connection of subject matter to real world applications, including outlines of how course materials may be applied to fields in computer science - ultimately making the material less discrete from reality."],
                    image: ["realAppeal.png"]
                }
            }
        }
    },
}
</script>

<style>

</style>