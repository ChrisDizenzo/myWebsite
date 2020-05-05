<template>
  <div id="app" class="font-sans flex flex-col overflow-y-hidden" ref="app">
    <div class="fixed top-0 h-screen w-screen z-0 opacity-50">
      <video autoplay muted id="myVideo" class="w-screen">
        <source class="active" src="./assets/earf.mp4" id="vid1" type="video/mp4">
        <source class="inactive" src="./assets/earfR.mp4" id="vid2" type="video/mp4">

      </video>
    </div>
    
    <div class="w-1/2 mr-auto flex flex-col overflow-y-hidden" style="height: 320vh; z-index:100">
      <div class="w-full h-screen flex flex-col justify-center" :style="{padding: -scrollDistVal/2 + 'px 0px ' + '0px 0px',}" >

        <div class="w-full flex justify-center " :style="{padding: scrollDistVal + 'px 0px ' + '0px 0px',}">
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
            <p  class="text-2xl font-normal text-white my-3 leading-tight">I'm a  </p>

          <vue-typed-js :strings="['Programmer', 'Machine Learning Engineer', 'Data Scientist', 'Mathematician']" :backSpeed="13" :typeSpeed="25" :loop="true" :backDelay="1500" :startDelay="2000"  :showCursor="true" :cursorChar="'|'" >
            <p class="text-2xl font-normal text-white my-3 leading-tight font-medium ml-2"> <span class="typing"></span> </p>
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
    data-aos-once="false" class="w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 7rem"> Click on a project </p>

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
    data-aos-once="false" class="w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 6rem"> Scroll to see About Me </p>

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

    

    <div class="fixed top-0 h-screen w-full flex flex-col " style="z-index: 150">
      <div class="w-full flex justify-center items-center  py-3">
        <div data-aos="fade-down"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="container flex items-baseline justify-between" :class="'text-white'" style="z-index: 100" >
          <p class="text-xl opacity-75 font-medium cursor-pointer hover:opacity-100">Chris DiZenzo</p>
          <div class="flex items-baseline">
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 mx-8" v-scroll-to="{duration: 1500, el: '#about'}">About</p>
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 mx-8">Resume</p>
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded  py-2 px-4 mx-8">Contact</p>
            
          </div>
        </div>
      </div>
    <div class="h-screen w-full -mt-16 ">
      <div class="flex w-full h-screen justify-end items-center relative">
        
        
        <div v-if="elemDisplaying!=-1" class="w-1/2 flex items-baseline justify-between text-white" >
        
          <div v-for="(val,ind) in projects" :key="ind" v-show="elemDisplaying==ind">
            <p class="text-6xl w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 6rem">{{val.title}}</p>
            <ul class="list-inside" style="list-style-position: inside">
              <li v-for="(desc, ind) in val.description" :key="ind" >{{desc}}</li>
            </ul>
            
            <h1>{{ val.images[ind] }} </h1>
            <img v-bind:src="require('./assets/projectimages/' + val.images[0])"  alt='no image'/>
          </div>
        </div>
        <div class="w-1/2 flex flex-col justify-center pointer-events-auto select-none overflow-x-hidden " @mousemove="updateValues($event)" @mouseenter="mouseEnter()" @mouseleave="mouseLeave()"  style="z-index: 100;" :style="{transform: (scrollDist>2) ? 'translateY('+ -1/4*((scrollDistVal-windowHeight*2)*6/4) + 'px)' : 'translateY(0px)', opacity: opacFunction(2)}">

          <div id="mous" ref="mous" class="relative w-full h-full mx-auto" style="height:600px; max-width: 1000px">
            <!-- <p class="text-white">{{dots[0].x}} , {{dots[0].y}}</p> -->
            <!-- <p class="text-white">{{dots[1].y}} , {{dots[1].y}}</p> -->
            <div v-for="(val, ind) in dots.slice(2,dots.length)" :key="ind" @click="displayElem(ind)" style="border-radius: 5px; position: absolute" class="px-4 py-1" :class="elemDisplaying==ind ? ['bg-gray-800', 'text-white'] : ['text-gray-400', 'hover:text-white']"
            :style="{top: val.y + 'px', left: val.x + 'px' ,'z-index': Math.round((val.z+1)*10000), transform: 'scale(' + (3*val.z/4+1) + ')'}">
              
              <p v-if="projects[ind].images" class="spheretext text-2xl font-medium"  style="cursor: pointer;" :class="elemDisplaying==ind ? [''] : ''">{{val.name}}</p>
              <!-- <img v-bind:src="'./assets/' + 'ME.png'" alt="no image" style="font-size: 1rem; cursor: pointer; font-weight: 800; transform: scale(.1)"> -->
              <!-- <p v-if="!val.images" class="spheretext" style="font-size: 1rem; cursor: pointer; font-weight: 800;" :class="(val.z>0) ? 'hoverable': ''">{{val.name}}</p> -->
              <!-- <img v-if="val.images" :src="'./assets/realAppeal.png'" style="width: 50px; height: 50px" alt=""> -->
              <!-- <img alt="Vue logo" src="./assets/ME.png" style="transform: scale(.1)"> -->
              <!-- <img v-bind:src="require('./assets/' + projects[ind].images[0])" style="border-radius: 15px; height: 60px; width: 100px; padding: 10px;"/> -->

            </div>
          </div>

        </div>
      </div>
    </div>
    


    



    </div>
    
    
    <div class="fixed top-0 h-screen w-full bg-black" :class="scrollDist>2.2 ? 'screenanim' : 'screenanim3'" style="z-index: 100;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 h-screen w-full bg-gray-700 screenanim2"  style="z-index: 100;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 overflow-y-auto h-screen w-full bg-white " :class="scrollDist>2.2 ? 'screenanim3' : 'screenanim'" style="z-index: 100;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">
      <About  />
      <!-- <Contact/> -->
    </div>

    <div class="fixed top-0 h-screen w-full bg-black" :class="scrollDist>2.2 ? 'screenanim' : 'screenanim3'" style="z-index: 104;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 h-screen w-full bg-gray-700 screenanim2"  style="z-index: 105;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">

    </div>
    <div class="fixed top-0 overflow-y-auto h-screen w-full bg-white " :class="scrollDist>2.2 ? 'screenanim3' : 'screenanim'" style="z-index: 106;" v-if="scrollDist>2" :style="{margin: ((scrollDist>2.2) ? 0 : (windowHeight+5))+'px 0px 0px 0px', 'z-index': 150}">
      <Resume  />
    </div>

    <Contact />
  </div>
</template>

<script>
import projectsJSON from './assets/data/projects.json'
import TitleTypeVue from './components/TItleTypeVue'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
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
      animateScreen: -1,
      storeScrollY: 0,


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
      if(this.elemDisplaying != val) {
        this.elemDisplaying = val
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
      if(this.animateScreen!= -1) {
        window.scrollTo(0, this.storeScrollY);
        
      } else {
        this.windowHeight = window.innerHeight
        this.scrollDistPrev = this.scrollDist
        this.scrollDist = (window.scrollY/this.windowHeight)
        this.scrollDistVal = window.scrollY
      }
      
      console.log(this.scrollDistPrev, this.scrollDist)

      if(this.scrollDistPrev <2.2 && this.scrollDist > 2.2 && this.animateScreen==-1) {
        this.animateScreen = 0
        this.storeScrollY = window.scrollY
        setTimeout(() => this.animateScreen = -1, 1300)
        setTimeout(() => this.animateScreen = -1, 1300)

      } else if (this.scrollDistPrev > 2.2 && this.scrollDist < 2.2 && this.animateScreen==-1) { 
        this.animateScreen = 1
        this.storeScrollY = window.scrollY
        setTimeout(() => this.animateScreen = -1, 1300)
        setTimeout(() => this.animateScreen = -1, 1300)

      }
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
      console.log("Centerx: " , this.dots[1].x ," Centery: ",this.dots[1].y)
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
  },
  mounted(){
    console.log(projectsJSON)
    console.log(Object.keys(projectsJSON).length)
    window.scrollTo(0,0);
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
      console.log(project)
      this.projects.push(project)
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
      console.log(temp.name)
      this.dots.push(temp)
    }
    this.checkMaxRadius()
    setTimeout(() => this.rotate(), 30)
    setTimeout(() => this.sphereLoad = true, this.sphereLoadTime)
    setTimeout(() => this.updateRadius() , this.sphereLoadTime)
    setTimeout(() =>{
      this.height = document.getElementById('mous').clientHeight
      this.width = document.getElementById('mous').clientWidth
      this.offsetTop = document.getElementById('mous').offsetTop
      this.offsetLeft = document.getElementById('mous').offsetLeft
    }, 50)
  },
  computed: {
  
    
  },
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
