<template>
    <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
      <div class="container flex flex-col items-center">
        <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 8rem">About me</p>        
        <img alt="Vue logo" src="../assets/ME.png">
        <div>Courses</div>
          <p v-for="(val,ind) in Object.keys(courses)" :key="ind">{{val}}____________{{coursesKey[courses[val]]}}</p>

      </div>
    </div>
</template>

<script>
export default {
  name: "About",
  data: function () {
    return {
      coursesKey: ["Software Engineering","Mathematics","Data Science"],
      courses: {
        "CEN3031 Software Engineering" : 0,
        "CIS4301 Information and Database Systems" : 0,
        "MAA4402 Functions of Complex Variables" : 1,
        "COP3503: Programming Fundamentals 2 (C++)" : 0,
        "EGM2511: Engineering Mechanics" : 1,
        "COP4600 Operating Systems" : 0,
        "COT5615 Math for Intelligent Systems" : 2,
        "EEL5840 Fundamentals of Machine Learning" : 2,
        "CNT4007C Computer Networking" : 0,
        "CAP6610 Machine Learning" : 2,
        "STA4321 Fundamentals of Probability" : 2,
        "MAP4305–Intermediate Differential Equations" : 1,
        "CIS4930 Data Science in Bioinformatics" : 2
      }
    }
  }
}
</script>

<style>

</style>