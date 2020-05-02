<template>
  <div id="app" ref="app" @mousemove="updateValues($event)" >
    <h1>My Brain:</h1>
    <!-- <h1>{{dots[0].x}} , {{dots[0].y}}</h1> -->
    <!-- <h1>{{dots[1].x}} , {{dots[1].y}}</h1> -->
    <!-- <h1>{{lastpitch}} , {{lastroll}}</h1> -->
    <div v-for="(val,ind) in projects" :key="ind" v-show="ind==elemDisplaying">
      <h1>{{val.title}}</h1>
      <h1>{{val.desc}}</h1>
      <img :src="val.img" alt="no image">
    </div>
    <div id="mous" ref="mous" style="position: relative; background: white; width: 1000px; height: 600px; margin-left: auto; margin-right: auto; margin-top: auto; margin-bottom: auto;">
      <div v-for="(val, ind) in dots.slice(1,dots.length)" :key="ind" @click="displayElem(ind)" style="width:50px; height: 50px; border-radius: 50%; position: absolute" :class="(val.z>0 && ind!=0) ? 'hoverable': ''"
      :style="{top: val.y + 'px', left: val.x + 'px' ,'z-index': Math.round((val.z+1)*10000),transform: 'scale(' + (3*val.z/4+1) + ')', background: 'rgb('+val.r+','+val.g+','+val.b+')'}">
        <p>{{ind}}</p>
      </div>
    </div>
    <img alt="Vue logo" src="./assets/ME.png">
  </div>
</template>

<script>

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
      lastpitch: 0,
      lastroll: 0,
      speedratio: 1/5,
      slowratio: 1/16,

      projects: [
        {
          title: 'Hubub', 
          desc: 'This was my first major iOS app that deployed to the App Store'
        },
        {
          title: 'webcam ML', 
          desc: 'This was Machine Learning project that tracks my hand'
        },
        {
          title: 'realAppeal', 
          desc: 'This was a website I developed in Vue',
          img: 'https://static.wixstatic.com/media/d3cd5a_9edfed9ee4b641ca9dfff6a371963886~mv2.png/v1/fill/w_50,h_34,al_c,q_85,usm_0.66_1.00_0.01/realAppeal_icon.webp',
        }
      ],
      updateTime: 30,

      dots: [
        {
        name: 'Chris',
        x: 50,
        y: 40,
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
      this.elemDisplaying = val
      this.calcCenter()
    },
    someMethod(){
      // if (this.checking==0){
      //   this.calcCenter()
      //   this.checking=1
      //   setTimeout(() => {this.checking=0}, 100)
      // }
      if (!(Math.abs(this.dots[0].x-this.dots[1].x) < this.$refs['mous'].clientWidth/2 && Math.abs(this.dots[0].y-this.dots[1].y) < this.$refs['mous'].clientHeight/2)){
        this.dots[0].r = 0
        this.dots[0].g = 255
        this.SlowRotate()
      }
      else{
        this.dots[0].r = 255
        this.dots[0].g = 0
        this.rotate()
      }
      setTimeout(() => this.someMethod(), this.updateTime)
    },
    updateValues(event) {
      
      // this.pointerx = event.screenX
      // this.pointery = event.screenY
      this.pointerx = event.pageX-10
      this.pointery = event.pageY -10 
      this.dots[0].x = event.pageX - this.$refs['mous'].offsetLeft-20
      this.dots[0].y = event.pageY - this.$refs['mous'].offsetTop-20

    },SlowRotate() {
        var pitch = this.lastpitch*(1-this.slowratio)
        var roll =  this.lastroll*(1-this.slowratio)
        var yaw = 0
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
            this.dots[i].x = Math.round(this.dots[i].coordinate[0]*250+this.dots[1].x);
            this.dots[i].y = Math.round(this.dots[i].coordinate[1]*250+this.dots[1].y);
            this.dots[i].z = this.dots[i].coordinate[2];
        }
    },
    rotate() {
        var pitch = (this.dots[0].x-this.dots[1].x)/(this.$refs['mous'].clientWidth*4)*this.speedratio + (1-this.speedratio)*this.lastpitch
        var roll =  -1*(this.dots[0].y-this.dots[1].y)/(this.$refs['mous'].clientHeight*4)*this.speedratio+ (1-this.speedratio)*this.lastroll
        var yaw = 0
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
            this.dots[i].x = Math.round(this.dots[i].coordinate[0]*250+this.dots[1].x);
            this.dots[i].y = Math.round(this.dots[i].coordinate[1]*250+this.dots[1].y);
            this.dots[i].z = this.dots[i].coordinate[2];
        }
    },
    calcCenter(){
      this.dots[1].x = this.$refs['mous'].clientWidth/2-25
      this.dots[1].y = this.$refs['mous'].clientHeight/2-25
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
    var temp = {}
    var rando = {}
    // console.log("here")
    var points = this.smartXYZ(40)
    this.calcCenter()
    for(var i=0; i < 40; i++){
      temp = {}
      temp.name = this.makeid
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
    setTimeout(() => this.someMethod(), 30)
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background: gray;
}

.hoverable{
  transition: background 0.3s;
  border: solid; 
  cursor: pointer;
}

.hoverable:hover {
  background: green !important;
  border: dotted;
  color: white;
}
</style>
