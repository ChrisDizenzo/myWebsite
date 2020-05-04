<template>
  <div id="app" class="font-sans flex flex-col" ref="app" @mousemove="updateValues($event)" >
    <div class="h-screen w-full flex flex-col ">
      <div class="w-full flex justify-center items-center  py-3">
        <div data-aos="fade-down"
    data-aos-offset="0"
    data-aos-delay="0"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="container flex items-baseline text-white justify-between">
          <p class="text-xl opacity-75 font-medium cursor-pointer hover:opacity-100">Chris DiZenzo</p>
          <div class="flex items-baseline">
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 mx-8">About</p>
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded py-2 px-4 mx-8">Resume</p>
            <p class="text-md opacity-75 font-normal cursor-pointer hover:opacity-100 rounded  py-2 px-4 mx-8">Contact</p>
            
          </div>
        </div>
      </div>
    <!-- <h1>{{dots[0].x}} , {{dots[0].y}}</h1> -->
    <!-- <h1>{{dots[1].x}} , {{dots[1].y}}</h1> -->
    <!-- <h1>{{lastpitch}} , {{lastroll}}</h1> -->
    <div class="h-screen w-full -mt-16 pointer-events-none">
      <div class="flex w-full h-screen items-center">
        <div v-if="elemDisplaying!=-1" class="w-1/2 flex items-baseline justify-between text-white">
          <div v-for="(val,ind) in projects" :key="ind" v-show="ind==elemDisplaying">
            <p class="text-6xl w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 6rem">{{val.title}}</p>
            <ul class="list-inside" style="list-style-position: inside">
              <li v-for="(desc, ind) in val.description" :key="ind" >{{desc}}</li>
            </ul>
            
            <h1>{{ val.images[ind] }} </h1>
            <!-- <img v-bind:src="require('./assets/' + val.images[ind])"  alt='no image'/> -->
          </div>
        </div>
        <div v-if="elemDisplaying==-1" class="w-1/2 flex flex-col justify-center pl-10 pr-8 pointer-events-auto">
          <p data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center" class="text-6xl w-full text-bold text-white leading-tight" style="font-weight: 700; font-size: 8rem">Chris</p>

          <p data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="400"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-6xl w-full text-right text-bold text-white -mt-12 leading-tight" style="font-weight: 700; font-size: 8rem">DiZenzo</p>
          
          <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="1000"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-white my-3 leading-tight">I'm a <span class="text-2xl">hecc</span>in good computer <b>programmer, data scientist, and mathematician.</b> </p>

          <div class="flex flex-col justify-between my-3 items-baseline">
            <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="1500"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-white leading-tight">The rules are simple:</p>
            <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="1600"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-center text-white  leading-tight">You give me <span class="italic">pasta</span>, I give you <span class="font-medium">code.</span></p>
          </div>
          
          <p data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="2000"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true" class="text-xl w-full font-light text-white my-3 leading-tight">Let's make something awesome together.</p>

          
        </div>
        <div class="w-1/2 flex flex-col justify-center pointer-events-auto select-none overflow-x-hidden">

          <div id="mous" ref="mous" class="relative w-full h-full" style="height:600px; max-width: 1000px">
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
    
    <div class="h-screen bg-white w-full z-10 flex flex-col items-center">
      <div class="container flex flex-col items-center">
        <p class="text-6xl w-full text-bold text-gray-900 text-center leading-tight" style="font-weight: 700; font-size: 8rem">About me</p>
        
        <img alt="Vue logo" src="./assets/ME.png">

      </div>

    </div>
    
  </div>
</template>

<script>
import projectsJSON from './assets/data/projects.json'
export default {
  name: 'App',
  data: function () {
    return {


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

      lastpitch: 1/16,
      lastroll: -1/4,
      speedratio: 1/5,
      speedNumber: 5,
      slowratio: 1/20,
      slowestSpeed: .003,

      sphereLoad: false,
      sphereLoadTime: 10,
      sphereTime: 0,
      sphereRadius: 20,
      sphereMaxRadius: 250,

      bezier: {
        p0: 0,
        p1: .3,
        p2: 1.5,
        p3: 1,
      },

      // projects: [
      //   {
      //     title: 'Hubub', 
      //     desc: 'This was my first major iOS app that deployed to the App Store'
      //   },
      //   {
      //     title: 'webcam ML', 
      //     desc: 'This was Machine Learning project that tracks my hand'
      //   },
      //   {
      //     title: 'realAppeal', 
      //     desc: 'This was a website I developed in Vue',
      //     img: 'https://static.wixstatic.com/media/d3cd5a_9edfed9ee4b641ca9dfff6a371963886~mv2.png/v1/fill/w_50,h_34,al_c,q_85,usm_0.66_1.00_0.01/realAppeal_icon.webp',
      //   }
      // ],
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
    displayElem(val) {
      if(this.elemDisplaying != val) {
        this.elemDisplaying = val
        console.log(val)
        console.log(this.dots[this.elemDisplaying+2].name)
        console.log(this.dots[this.elemDisplaying+2].coordinate)
      } else {
        console.log("rotate again")
        setTimeout(() => this.rotate(), 30)
        setTimeout(() => this.sphereLoad = true, this.sphereLoadTime)
        setTimeout(() => this.updateRadius() , this.sphereLoadTime)
        setTimeout(() =>{
          this.height = document.getElementById('mous').clientHeight
          this.width = document.getElementById('mous').clientWidth
          this.offsetTop = document.getElementById('mous').offsetTop
          this.offsetLeft = document.getElementById('mous').offsetLeft
        }, 50)
      }
      
    },
    stepFunction(number){

      if (number < this.slowestSpeed){
        return this.slowestSpeed
      }


    },
    updateValues(event) {
      
      // this.pointerx = event.screenX
      // this.pointery = event.screenY
      this.pointerx = event.pageX-10
      this.pointery = event.pageY -10 
      this.dots[0].x = event.pageX - this.$refs['mous'].offsetLeft-20
      this.dots[0].y = event.pageY - this.$refs['mous'].offsetTop-20
    },
    rotate() {
      var pitch = 0
      var roll =  0
      var yaw = 0
      if ((this.elemDisplaying==-1)){
        if ((Math.abs(this.dots[0].x-this.dots[1].x) < this.$refs['mous'].clientWidth/2 && Math.abs(this.dots[0].y-this.dots[1].y) < this.$refs['mous'].clientHeight/2)){
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
    calcCenter(){
      this.dots[0].x = this.$refs['mous'].clientWidth/2-25-500
      this.dots[0].y = this.$refs['mous'].clientHeight/2-25-500
      this.dots[1].x = this.$refs['mous'].clientWidth/2-25
      this.dots[1].y = this.$refs['mous'].clientHeight/2-25
    },
    bezierFunc(t) {
      let hold = 1-t
      return Math.pow(hold,3)*this.bezier.p0 + 3*Math.pow(hold,2)*t*this.bezier.p1 + 3*hold*Math.pow(t,2)*this.bezier.p2 + Math.pow(t,3)*this.bezier.p3
    },
    updateRadius(){
      if (this.sphereTime < this.sphereMaxRadius-20){
        this.sphereTime += 3
        this.sphereRadius = this.bezierFunc(this.sphereTime/this.sphereMaxRadius)*this.sphereMaxRadius
        setTimeout(() => this.updateRadius() , this.sphereLoadTime)
      }else if (this.sphereTime < this.sphereMaxRadius){
        this.sphereTime += 1
        this.sphereRadius = this.bezierFunc(this.sphereTime/this.sphereMaxRadius)*this.sphereMaxRadius
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
    var temp = {}
    var rando = {}
    // console.log("here")
    
    
    var points = this.smartXYZ(Object.keys(projectsJSON).length)
    this.calcCenter()
    var project = {}
    for(var i=0; i < Object.keys(projectsJSON).length; i++){
      project = {}
      project = projectsJSON[Object.keys(projectsJSON)[i]]
      project.title = Object.keys(projectsJSON)[i]
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
      this.dots.push(temp)
    }
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
</style>
