<template>
  <div id="app" class="font-sans flex flex-col overflow-y-hidden" ref="app">
    <div class="fixed bottom-0 h-screen w-screen z-0" style="opacity: 80%">
      <video autoplay muted id="myVideo" class="w-screen h-screen " style="object-fit: cover">
        <source class="active" src="./assets/earf.mp4" id="vid1" type="video/mp4">

      </video>
    </div>
    
    
    <div v-if="canAnimate==1" class="fixed top-0 h-screen w-full bg-blue-900" :class="screenState==1 ? 'screenanim' : 'screenanim3'" style="z-index: 1000"  :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : (screenState==1) ? '0px 0px 0px 0px' : '0px 0px '+ (windowHeight+5)+ 'px 0px', }">

    </div>
    <div v-if="canAnimate==1" class="fixed top-0 h-screen w-full screenanim2 bg-blue-600"  style="z-index: 1000;" :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : (screenState==1) ? '0px 0px 0px 0px' : '0px 0px '+ (windowHeight+5)+ 'px 0px', }">

    </div>
    <div v-if="canAnimate==1" id="abt" class="fixed top-0 h-screen w-full bg-white " :class="screenState==1 ? 'screenanim3' : 'screenanim'" style="z-index: 1000" :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : (screenState==1) ? '0px 0px 0px 0px' : '0px 0px '+ (windowHeight+5)+ 'px 0px', }">
      <About />
      

    </div>

    
    <div v-if="canAnimate==1" class="fixed top-0 h-screen w-full bg-blue-600" :class="screenState==2 ? 'screenanim' : 'screenanim3'" style="z-index: 1000"  :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : ((screenState==2) ? '0px 0px 0px 0px' : (windowHeight+5) + 'px 0px 0px 0px')}">

    </div>
    <div v-if="canAnimate==1" class="fixed top-0 h-screen w-full screenanim2 bg-blue-900"  style="z-index: 1000;" :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : ((screenState==2) ? '0px 0px 0px 0px' : (windowHeight+5) + 'px 0px 0px 0px')}">

    </div>
    <div v-if="canAnimate==1" id="resum" class="fixed top-0 h-screen w-full bg-white " :class="screenState==2 ? 'screenanim3' : 'screenanim'" style="z-index: 1000;" :style="{margin: (screenState==0) ? (windowHeight+5) + 'px 0px 0px 0px' : ((screenState==2) ?  '0px 0px 0px 0px' : (windowHeight+5) + 'px 0px 0px 0px')}">
      <Resume style="position: absolute" :style="{top: (-1*Math.round((this.scrollDist-3)*windowHeight)) + 'px'}" />
      

    </div>

    <div class="w-3/4 lg:w-1/2 mr-auto flex flex-col" style="height: 320vh; z-index:40">
      <div class="w-full h-screen flex flex-col justify-center" :style="{padding: -scrollDistVal/2 + 'px 0px ' + '0px 0px',}" >

        <div class="w-full flex justify-center px-12 " :style="{padding: scrollDistVal + 'px 0px ' + '0px 0px',}">
          <div v-if="elemDisplaying==-1" class="px-2 flex flex-col items-start pointer-events-auto" style="width:90%" :style="{opacity: ((scrollDist+1)*(scrollDist-0.5) *-2)}">
          <TitleTypeVue :msg="['Hello,']" :sDelay="500" :cDelay="5" />
          <TitleTypeVue :msg="['I\'m Chris!']" :sDelay="1500" :cDelay="400" :typeFade="true"/>
          


          <div data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2000"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="flex items-baseline justify-start">
            <p  class="text-sm lg:text-2xl font-normal text-white my-3 leading-tight">I'm a  </p>

          <vue-typed-js :strings="['Programmer', 'Machine Learning Engineer', 'Data Scientist', 'Mathematician']" :backSpeed="13" :typeSpeed="25" :loop="true" :backDelay="1500" :startDelay="2000"  :showCursor="true" :cursorChar="'|'" >
            <p class="text-sm lg:text-2xl font-normal text-white my-3 leading-tight font-medium ml-2"> <span class="typing"></span> </p>
          </vue-typed-js>
          </div>
          

          <div class="flex flex-col justify-between items-baseline">
            <!-- <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2500"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-2xl w-full font-normal text-white leading-tight">The rules are simple:</p>
            <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2600"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-center text-white  leading-tight">You give me <span class="italic">pasta</span>, I give you <span class="font-medium">code.</span></p> -->
          </div>
          
          <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2500"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-normal text-white leading-tight">Let's make something awesome together.</p>

          
        </div>
        </div>
      </div>
      
        <div class=" h-screen flex flex-col justify-center w-full " :style="{padding: (scrollDist>1) ? (-scrollDistVal/2 + 'px 0px 0px 0px') : '0px 0px 0px 0px',}">
          <div class="w-full flex justify-center " :style="{padding: (scrollDist>1) ? ((scrollDistVal-windowHeight)*6/4 + 'px 0px ' + '0px 0px') : '0px 0px 0px 0px', opacity: opacFunction(1)}">
          <div v-if="elemDisplaying==-1" class="px-2 flex flex-col items-start pointer-events-auto" style="width:90%" :style="{opacity: 1}">        

          <p :data-aos="(scrollDist>1.1) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" class="w-full hidden lg:block text-bold text-white leading-tight" style="font-weight: 700; font-size: 7rem"> Click on a project </p>
      
    <p :data-aos="(scrollDist>1.1) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" class="w-full block lg:hidden text-bold text-white leading-tight text-6xl" style="font-weight: 700;"> Click on a project </p>

          <div :data-aos="(scrollDist>1.1) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" class="flex items-baseline justify-start">
            <p  class="text-2xl font-normal text-white my-3 leading-tight">To learn more about what I've made </p>

          </div>
          
          

          <div class="flex flex-col justify-between items-baseline">
          </div>
          

          
        </div>
        </div>
      </div>
      <div class=" h-screen flex flex-col justify-center w-full " :style="{padding: (scrollDist>2) ? (-scrollDistVal/2 + 'px 0px 0px 0px') : '0px 0px 0px 0px',}">
          <div class="w-full flex justify-center " :style="{padding: (scrollDist>2) ? ((scrollDistVal-windowHeight*2)*6/4 + 'px 0px ' + '0px 0px') : '0px 0px 0px 0px', opacity: opacFunction(2)}">
          <div v-if="elemDisplaying==-1" class="px-2 flex flex-col items-start pointer-events-auto" style="width:90%" :style="{opacity: 1}">        

          <p :data-aos="(scrollDist>2) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false" class="w-full text-bold hidden lg:block text-white leading-tight" style="font-weight: 700; font-size: 6rem"> Scroll to see About Me </p>
      
      <p :data-aos="(scrollDist>2) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false" class="w-full text-bold lg:hidden block text-white leading-tight text-6xl" style="font-weight: 700"> Scroll to see About Me </p>

          <div :data-aos="(scrollDist>2) ? 'fade-down' : 'fade-up'"
    data-aos-offset="200"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false" class="flex items-baseline justify-start mb-48">
            <p  class="text-2xl font-normal text-white my-3 leading-tight">To see more of my work and experience keep clicking on my projects!</p>
            <p class="mt-auto" id="about"></p>
          </div>
          

          <div class="flex flex-col justify-between items-baseline">
            <!-- <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2500"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-2xl w-full font-normal text-white leading-tight">The rules are simple:</p>
            <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2600"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-center text-white  leading-tight">You give me <span class="italic">pasta</span>, I give you <span class="font-medium">code.</span></p> -->
          </div>
          

          
        </div>
        </div>
      </div>
    </div>

    <div class="fixed top-0 w-full flex justify-center items-center  py-3" style="z-index: 1201" >
        <div  class="w-full lg:w-3/4 flex items-baseline justify-between" :class="screenState==0 ? 'text-white' : 'text-black'" >
          <p class="text-md lg:text-xl opacity-75 font-medium cursor-pointer mx-2 lg:mx-0 hover:opacity-100" @click="changeState(0)">Chris DiZenzo</p>
          <div class="flex items-baseline">
            <p class="text-sm lg:text-xl opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 lg:mx-8" @click="changeState(1)" >About</p>
            <p class="text-sm lg:text-xl opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 lg:mx-8" @click="changeState(2)">Resume</p>
            <p class="text-sm lg:text-xl opacity-75 font-normal cursor-pointer lg:block hidden hover:opacity-100 rounded  py-2 px-4 mx-8" @click="changeState(2)" >Contact</p>
            
          </div>
        </div>
      </div>
    

    <div class="fixed top-0 h-screen w-full flex flex-col " style="z-index: 100" >
      
    <div class="h-screen w-full " style="z-index: 0">
      <div class="w-full flex h-screen justify-start lg:justify-end items-center relative">
        
        
        <div v-if="elemDisplaying!=-1" class="w-1/4 lg:w-1/2 flex items-baseline justify-between text-white" style="z-index: 1000;">
        
          <div v-for="(val,ind) in projects" :key="ind+54" v-show="elemDisplaying==ind" class="rounded-lg px-2 py-2 md:px-8 md:py-8" style="background: rgba(0,0,0,0.75); min-width: 16rem">
            <img v-if="val.video==undefined" v-bind:src="require('./assets/projectimages/' + val.images[0])" class="hidden md:block md:max-w-64 md:max-h-64 lg:mx-auto rounded-md" :class="val.images[0]=='ultrasound.gif' ? 'rounded-md' : ''" style="max-height: 25rem; max-width: 25rem" alt='no image'/>
            <img v-if="val.video==undefined" v-bind:src="require('./assets/projectimages/' + val.images[0])" class="block md:hidden lg:mx-auto rounded-md mx-auto" :class="val.images[0]=='ultrasound.gif' ? 'rounded-md' : ''" style="max-height: 15rem; max-width: 15rem;" alt='no image'/>
            <video v-else autoplay loop muted id="valVideo" class="md:block hidden md:max-w-64 md:max-h-64 mx-auto" style="max-height: 25rem; max-width: 25rem">
              <source class="active rounded-md" v-bind:src="require('./assets/projectimages/' + val.video)" type="video/mp4">

            </video>
            <video v-if="val.video!=undefined" autoplay loop muted id="valVideo" class="block md:hidden md:max-w-64 md:max-h-64 mx-auto" style="max-height: 15rem; max-width: 15rem">
              <source class="active rounded-md" v-bind:src="require('./assets/projectimages/' + val.video)" type="video/mp4">

            </video>
            <TitleTypeVue :msg="[val.title]" :sDelay="500" :cDelay="5" />
            <ul   class="list-inside" style="list-style-position: inside">
              <li data-aos="fade-left"
    data-aos-offset="200"
    :data-aos-delay="800 + 200*ind2"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="false"
    data-aos-once="false" v-for="(desc, ind2) in val.description" class="text-sm md:text-base" :key="ind2" >{{desc}}</li>
            </ul>
            
          </div>
        </div>
        <div class="w-1/2 hidden lg:flex flex-col justify-center pointer-events-auto select-none overflow-x-hidden " @mousemove="updateValues($event)" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()"  style="z-index: 5;">

          <div v-show="canAnimate==1" id="mous" ref="mous" class="relative w-full h-full mx-auto" style="height:1000px; max-width: 1000px">
            <!-- <p class="text-white">{{dots[0].x}} , {{dots[0].y}}</p> -->
            <!-- <p class="text-white">{{dots[1].y}} , {{dots[1].y}}</p> -->
            <div v-for="(val, ind) in dots.slice(2,dots.length)" :key="ind+24" @click="displayElem(ind)" style="border-radius: 5px; position: absolute" class="px-4 py-1" :class="elemDisplaying==ind ? ['bg-gray-800', 'text-white'] : ['text-gray-400', 'hover:text-white']"
            :style="{top: val.y + 'px', left: val.x + 'px' ,'z-index': Math.round((val.z+1)*40), transform: 'scale(' + (3*val.z/4+1) + ')'}">
              
              <p v-if="projects[ind].images" class="spheretext text-2xl font-medium"  style="cursor: pointer;" :class="elemDisplaying==ind ? [''] : ''">{{val.name}}</p>
              <!-- <img v-bind:src="'./assets/' + 'ME.png'" alt="no image" style="font-size: 1rem; cursor: pointer; font-weight: 800; transform: scale(.1)"> -->
              <!-- <p v-if="!val.images" class="spheretext" style="font-size: 1rem; cursor: pointer; font-weight: 800;" :class="(val.z>0) ? 'hoverable': ''">{{val.name}}</p> -->
              <!-- <img v-if="val.images" :src="'./assets/realAppeal.png'" style="width: 50px; height: 50px" alt=""> -->
              <!-- <img alt="Vue logo" src="./assets/ME.png" style="transform: scale(.1)"> -->
              <!-- <img v-bind:src="require('./assets/' + projects[ind].images[0])" style="border-radius: 15px; height: 60px; width: 100px; padding: 10px;"/> -->

            </div>
          </div>

        </div>
        <div class="w-1/4 flex ml-auto lg:hidden flex-col justify-center pointer-events-auto select-none overflow-x-hidden " @mousemove="updateValues($event)" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()"  style="z-index: 5;">

          <div id="test" class="lg:hidden flex h-full mx-auto flex-col items-start md:items-center w-full z-10">
            <div v-for="(val,ind) in dots.slice(2,dots.length)" :key="ind+99" @click="displayElem(ind)" class="relative md:ml-auto flex items-center">
                <p class="z-10 text-base text-white font-medium cursor-pointer my-1 px-2">{{val.name}}</p>
                <div v-if="elemDisplaying==ind" class="z-0 bg-black opacity-50 w-full h-full absolute "></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    


    



    </div>
    
    


    <!-- <div class="fixed top-0 h-screen w-full bg-black" :class="scrollDist>2.2 ? 'screenanim' : 'screenanim3'" style="z-index: 104;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 h-screen w-full bg-gray-700 screenanim2"  style="z-index: 105;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 overflow-y-auto h-screen w-full bg-white " :class="scrollDist>2.2 ? 'screenanim3' : 'screenanim'" style="z-index: 106;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">
    </div> -->


    <Contact />
    <div style="height:20vh;"></div>
  </div>
</template>

<script>
import projectsJSON from './assets/data/projects.json'
import TitleTypeVue from './components/TItleTypeVue'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import db from './components/firebaseInit'

export default {
  name: 'App',
  components: {
    TitleTypeVue,
    About,
    Contact,
    Resume
  },
  data: function () {
    return {
      cursorShow : true,
      scrollDist: 0,
      scrollDistPrev: 0,
      scrollDistVal: 0,
      windowHeight: 0,
      myVideo: undefined,
      animateScreen: false,
      storeScrollY: 0,
      screenState: 0,
      prevScroll: 0,


      pointerx: 0,
      pointery: 0,
      checking: 0,
      mappedx: 0,
      mappedy: 50,
      height: 1000,
      width: 1000,
      offsetTop: 1000,
      offsetLeft: 1000,
      elemDisplaying: -1,
      canAnimate: 0,

      mousee: false,
      lastpitch: 1/16,
      lastroll: -1/4,
      speedratio: 1/5,
      speedNumber: 5,
      slowratio: 1/20,
      slowestSpeed: .005,

      sphereLoad: false,
      sphereLoadTime: 10,
      sphereTime: 0,
      sphereRadius: 20,
      sphereMaxTime: 250,
      sphereMaxRadius: 250,

      bezier: {
        p0: 0,
        p1: .3,
        p2: 1.5,
        p3: 1,
      },

      projects: [],
      updateTime: 30,

      change: 0,
      testing: 0,
      addie: "0.0.0.0.0",
      statesKeys: [],
      states: [],
      pages:[1,0,0],
      docID: "",


      dots: [
        {
        name: 'Chris',
        x: -100,
        y: -100,
        z: -0.5,
        r: 0,
        g: 255,
        b: 0,
        },
        {
        name: 'Center',
        absolutex: 0,
        absolutey: 0,
        x: 450,
        y: 300,
        z: 0,
        coordinate: [0,0,0],
        r: 0,
        g: 0,
        b: 0,
        },
        ]
    }
  },
  methods: {
    changeState(val) {
      if (!this.animateScreen){
        if (val == 0){
          this.scrollDist = 0
          // window.scrollY = 0
          this.prevScroll = 0
          
          // console.log("Puppy")
          this.change = 1
          this.pages[0] +=1
          
        } else if(val == 1){
        
          setTimeout(() =>  this.scrollDist = 2.201, 1300)
          // window.scrollY = Math.round(2.201*window.innerHeight)
          this.prevScroll = Math.round(2.201*window.innerHeight)
          
          this.change = 1
          this.pages[1] +=1
        }else if (val == 2){
          this.scrollDist = 3.001
          // window.scrollY = Math.round(3.001*window.innerHeight)
          this.prevScroll = Math.round(3.001*window.innerHeight)
          
          this.change = 1
          this.pages[2] +=1
        }
        
        if(this.screenState<val) { 
          setTimeout(() => {
            window.scrollTo(0,this.prevScroll)
          }, 1300)
        } else {
          setTimeout(() => {
            window.scrollTo(0,this.prevScroll)
          }, 50)
        }
        
        this.animateScreen = true
        setTimeout(() => this.animateScreen = false, 1300)

        // console.log("tim: ", (Math.round(this.scrollDist*100)/100), " tim: " , (Math.round(window.scrollY*100)/100) , " tim: " , (Math.round(this.prevScroll*100)/100))
        this.screenState = val
      }
      
        

    },
    hideCursor() {
      setTimeout(() => this.cursorShow = false, 500)
    },
    opacFunction(val) {
      if(this.scrollDist > (val + 0.25)) {
        return ((this.scrollDist-(val-0.5))*(this.scrollDist-(val+.5)) *-2)
      } else {
        return 1
      }
        
    },
    displayElem(val) {
      if(this.elemDisplaying != val && val != -1) {
        this.elemDisplaying = -1
        setTimeout(() => {
          this.elemDisplaying = val
          this.states[val] += 1
          this.change = 1
        }, 20); 
      }else{
        this.elemDisplaying = -1
      }
      
    },
    stepFunction(number){

      if (number < this.slowestSpeed){
        return this.slowestSpeed
      }


    },
    handleScroll() {
      if(this.animateScreen) {
        window.scrollTo(0, this.prevScroll)
        return
      }
      // console.log("tim: ", (Math.round(this.scrollDist*100)/100), " John: " , (Math.round(window.scrollY*100)/100) , " bob: " , (Math.round(this.prevScroll*100)/100))
      this.scrollDist += (window.scrollY-this.prevScroll)/window.innerHeight
      this.prevScroll = window.scrollY

    },
    updateValues(event) {
      this.pointerx = event.pageX-10
      this.pointery = event.pageY -10 
      this.dots[0].x = event.clientX - this.$refs['mous'].parentElement.offsetLeft-20
      this.dots[0].y = event.clientY - this.$refs['mous'].parentElement.offsetTop-20
    },
    rotate() {
      var pitch = 0
      var roll =  0
      var yaw = 0
      if ((this.elemDisplaying==-1)){
        if ((this.mousee)){
          pitch = -1*(this.dots[0].x-this.dots[1].x)/(this.$refs['mous'].clientWidth*this.speedNumber)*this.speedratio + (1-this.speedratio)*this.lastpitch
          roll =  1*(this.dots[0].y-this.dots[1].y)/(this.$refs['mous'].clientHeight*this.speedNumber)*this.speedratio+ (1-this.speedratio)*this.lastroll
        }
        else{
          pitch = this.lastpitch*(1-this.slowratio)
          roll =  this.lastroll*(1-this.slowratio)
          if (Math.sqrt(Math.pow(this.lastpitch,2) + Math.pow(this.lastroll,2)) < this.slowestSpeed){
            pitch = this.lastpitch
            roll = this.lastroll
          }
        }
      }
      else{
        pitch = -1*(this.dots[this.elemDisplaying+2].x-this.dots[1].x)/(this.$refs['mous'].clientWidth*this.speedNumber)*this.speedratio + (1-this.speedratio)*this.lastpitch
        roll =  1*(this.dots[this.elemDisplaying+2].y-this.dots[1].y)/(this.$refs['mous'].clientHeight*this.speedNumber)*this.speedratio+ (1-this.speedratio)*this.lastroll
        pitch = Math.round(pitch*1000)/1000
        roll = Math.round(roll*1000)/1000
      }
        this.lastpitch = pitch
        this.lastroll = roll
        var cosa = Math.cos(yaw);
        var sina = Math.sin(yaw);

        var cosb = Math.cos(pitch);
        var sinb = Math.sin(pitch);

        var cosc = Math.cos(roll);
        var sinc = Math.sin(roll);

        var Axx = cosa*cosb;
        var Axy = cosa*sinb*sinc - sina*cosc;
        var Axz = cosa*sinb*cosc + sina*sinc;

        var Ayx = sina*cosb;
        var Ayy = sina*sinb*sinc + cosa*cosc;
        var Ayz = sina*sinb*cosc - cosa*sinc;

        var Azx = -sinb;
        var Azy = cosb*sinc;
        var Azz = cosb*cosc;
        // console.log("Here")
        for (var i = 2; i < this.dots.length; i++) {
            var px = this.dots[i].coordinate[0];
            var py = this.dots[i].coordinate[1];
            var pz = this.dots[i].coordinate[2];
            
            this.dots[i].coordinate[0] = Axx*px + Axy*py + Axz*pz;
            this.dots[i].coordinate[1] = Ayx*px + Ayy*py + Ayz*pz;
            this.dots[i].coordinate[2] = Azx*px + Azy*py + Azz*pz;
            this.dots[i].x = Math.round(this.dots[i].coordinate[0]*this.sphereRadius+this.dots[1].x);
            this.dots[i].y = Math.round(this.dots[i].coordinate[1]*this.sphereRadius+this.dots[1].y);
            this.dots[i].z = this.dots[i].coordinate[2]*this.sphereRadius/this.sphereMaxRadius;
        }
      setTimeout(() => this.rotate(), this.updateTime)
    },
    mouseEnter(){
      this.mousee = true
    },
    mouseLeave(){
      this.mousee = false
    },
    checkMaxRadius(){
      // console.log("Did it")
      if (this.sphereMaxRadius != this.$refs['mous'].clientWidth/3-25){
        // console.log("Fixed")
        this.sphereMaxRadius = this.$refs['mous'].clientWidth/3-25
        this.sphereRadius = this.bezierFunc(this.sphereTime/this.sphereMaxTime)*this.sphereMaxRadius
        this.calcCenter(false)
      }
    setTimeout(() => this.checkMaxRadius(), 500)
    },
    calcCenter(calcZero){
      if (calcZero){
        this.dots[0].x = this.$refs['mous'].clientWidth/2-25-500
        this.dots[0].y = this.$refs['mous'].clientHeight/2-25-500
      }
      this.dots[1].x = this.$refs['mous'].clientWidth/2-50
      this.dots[1].y = this.$refs['mous'].clientHeight/2-25
      // console.log("Centerx: " , this.dots[1].x ," Centery: ",this.dots[1].y)
    },
    bezierFunc(t) {
      let hold = 1-t
      return Math.pow(hold,3)*this.bezier.p0 + 3*Math.pow(hold,2)*t*this.bezier.p1 + 3*hold*Math.pow(t,2)*this.bezier.p2 + Math.pow(t,3)*this.bezier.p3
    },
    updateRadius(){
      if (this.sphereTime < this.sphereMaxTime-20){
        this.sphereTime += 3
        this.sphereRadius = this.bezierFunc(this.sphereTime/this.sphereMaxTime)*this.sphereMaxRadius
        setTimeout(() => this.updateRadius() , this.sphereLoadTime)
      }else if (this.sphereTime < this.sphereMaxTime){
        this.sphereTime += 1
        this.sphereRadius = this.bezierFunc(this.sphereTime/this.sphereMaxTime)*this.sphereMaxRadius
        setTimeout(() => this.updateRadius() , this.sphereLoadTime)
      }
    },
    smartXYZ(points) {
      var gr = (Math.sqrt(5.0)+1.0)/2.0
      var ga = (2.0 - gr)*(2.0*Math.PI)
      var lat = 0
      var lon = 0
      var out = []
      var temp = {}
      for (var i = 1; i <= points; i++){
        temp = {}
        lat = Math.asin(-1.0+2.0*i/(points+1))
        lon = ga*i
        temp.x = Math.cos(lon)*Math.cos(lat)
        temp.y = Math.sin(lon)*Math.cos(lat)
        temp.z = Math.sin(lat)
        out.push(temp)
      }
      // console.log("Out of the function" , out)
      return out
    },
    randomAxisXYZ() {
      var out = {}
      out.x = 0
      out.y = 0
      out.z = Math.random()*2-1
      if (Math.random() > .5){
        out.y = Math.sqrt(1-Math.pow(out.z,2))
        if (Math.random() > .5){
          out.y = -1*out.y 
        }
        return out
      }else{
        out.x = Math.sqrt(1-Math.pow(out.z,2))
        if (Math.random() > .5){
          out.x = -1*out.x 
        }
        return out
      }
    },
    randomXYZ() {
      var out = {}
      out.z = Math.random()*2-1
      var math = (Math.sqrt(1-Math.pow(out.z,2)))
      out.y = Math.random()*math*2-math
      if (Math.random()>0.5){
        out.x = Math.sqrt(1-Math.pow(out.z,2)-Math.pow(out.y,2))
      }
      else{
        out.x = -1*Math.sqrt(1-Math.pow(out.z,2)-Math.pow(out.y,2))
      }
      return out
    },
    makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
    },
    getIP(){
      fetch('https://api.ipify.org?format=json')
      .then(x => x.json())
      .then(({ ip }) => {
          this.addie = ip;
          // console.log(this.addie)
      })
      .catch(()=>{
        // console.log("This broke, but i tried")
        this.addie="1.1.1.1.1"
      })
    },
    pushData(){
      if (this.change == 1){
        // console.log(this.pages)
        // console.log(this.docID)
        // console.log(this.states)
        var puppy = {}
        if (this.docID.length == 0){
          puppy.addie = this.addie
          puppy.pages = this.pages
          puppy.states = this.states
          puppy.statesKeys = this.statesKeys
          if (this.testing==0){
            db.collection("Users").add(puppy)
            .then((docRef) => {
              this.docID = docRef.id;
              // console.log(this.docID)
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
          }
        }else{
          puppy.pages = this.pages
          puppy.states = this.states
          if (this.testing==0){
            db.collection("Users").doc(this.docID).set(puppy,{merge: true})
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
          }
        }
      }
      this.change = 0
      setTimeout(() => this.pushData() , 3000)
    }
  },
  mounted(){
    this.getIP()
    // console.log("tim: ", (Math.round(this.scrollDist*100)/100), " John: " , (Math.round(window.scrollY*100)/100) , " bob: " , (Math.round(this.prevScroll*100)/100))
    // console.log(projectsJSON)
    this.windowHeight = window.innerHeight
    window.scrollTo(0,0);
    // console.log(Object.keys(projectsJSON).length)
    var temp = {}
    var rando = {}
    document.addEventListener('scroll', this.handleScroll)
    // console.log("here")
    let myVid = document.getElementById("myVideo");
    myVid.playbackRate = 0
    // let reversey = function() {
    //   // get the active source and the next video source.
    //   // I set it so if there's no next, it loops to the first one
    //   var activesource = document.getElementById("vid1");

    //   var nextsource = document.getElementById("vid2");
      
    //   // deactivate current source, and activate next one
    //   if(activesource.className=="active") activesource.className="inactive"
    //   else {
    //     activesource.className="active"
    //     myVid.src = activesource.src
    //   } 
    //   if(nextsource.className=="active") nextsource.className="inactive"
    //   else {
    //     nextsource.className="active"
    //     myVid.src = nextsource.src
    //   } 
      
    //   setTimeout(() => reversey(), 3000)
    // };
    // setTimeout(() => reversey(), 3000)

    
    var points = this.smartXYZ(Object.keys(projectsJSON).length)
    this.calcCenter(true)
    var project = {}
    for(var i=0; i < Object.keys(projectsJSON).length; i++){
      project = {}
      project = projectsJSON[Object.keys(projectsJSON)[i]]
      project.title = Object.keys(projectsJSON)[i]
      // console.log(project)
      this.projects.push(project)
      this.statesKeys.push(project.title)
      this.states.push(0)
      temp = {}
      temp.name = Object.keys(projectsJSON)[i]
      // rando = this.randomAxisXYZ()
      rando = points[i]
      
      temp.coordinate = [rando.x,rando.y,rando.z]
      temp.x = Math.round(rando.x*100+this.dots[1].x)
      temp.y = Math.round(rando.y*100+this.dots[1].y)
      temp.z = Math.round(rando.z)
      temp.r = Math.round(Math.random()*255)
      temp.g = Math.round(Math.random()*255)
      temp.b = Math.round(Math.random()*255)
      // console.log(temp.name)
      this.dots.push(temp)
    }
    this.checkMaxRadius()
    setTimeout(() => this.rotate(), 30)
    setTimeout(() => this.canAnimate=1, 10)
    setTimeout(() => this.sphereLoad = true, this.sphereLoadTime)
    setTimeout(() => this.updateRadius() , 500)
    setTimeout(() => this.pushData() , 1000)
    // this.updateRadius()
    setTimeout(() =>{
      this.height = document.getElementById('mous').clientHeight
      this.width = document.getElementById('mous').clientWidth
      this.offsetTop = document.getElementById('mous').offsetTop
      this.offsetLeft = document.getElementById('mous').offsetLeft
    }, 50)

  },
  computed: {

  },
  watch: {
    scrollDist() {
      if(this.scrollDist > 2.2 && this.scrollDist<3 && this.screenState != 1) {
        this.changeState(1)
        // console.log("Puppy")
        this.displayElem(this.elemDisplaying)
      } else if (this.scrollDist > 3 && this.screenState != 2) {
        this.changeState(2)
        // console.log("Puppy")
        this.displayElem(this.elemDisplaying)
      } else if (this.scrollDist < 2.2 && this.screenState != 0) {
        this.changeState(0)
        this.displayElem(this.elemDisplaying)
      }
    }
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #1a1a1a;
}

#app:before {
  content:"";
  position:absolute;
  z-index: 10;
  width:100%;
  height:100%;
  left:0;
  top:0;
  z-index:-1;
  opacity:0.9;
  background-image: url("./assets/space.jpg");
  background-size: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  background-position: center;
}

.sphereBox{
  width: 0px;
  height: 0px;
}

.sphereBoxFull {
  width: 600px;
  height: 600px;
}

.spheretext {
  transition: background 0.3s;
  transition: color 0.3s;


}

.hoverable{
  cursor: pointer;
  transition: background 1s;

}
/* #resum{
  position: absolute;
  overflow-y: auto;
} */

.hoverable:hover {
  text-decoration:  underline;


}
#mous{
  white-space: nowrap;
  overflow: hidden;
}

.screenanim {
  transition: all 1.5s cubic-bezier(.17,.67,0,1);
}
.screenanim2 {
  transition: all 1.5s cubic-bezier(.17,.67,0,1);
  transition-delay: 0.2s;
}
.screenanim3 {
  transition: all 1.5s cubic-bezier(.17,.67,0,1);
  transition-delay: 0.4s;
}

.overflow-y-auto::-webkit-scrollbar {
    display: none;
}

</style>
