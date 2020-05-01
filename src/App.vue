<template>
  <div id="app" @mousemove="updateValues($event)" >
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{pointerx}} , {{pointery}}</h1>
    <div id="mous" style="position: relative; background: white; width: 1000px; height: 600px; margin-left: auto; margin-right: auto;">
      <div v-for="(val, ind) in dots" :key="ind" style="width:50px; height: 50px; border-radius: 50%; position: absolute" :class="val.z>0 ? 'hoverable': ''"
      :style="{bottom: val.y + 'px', left: val.x + 'px' ,transform: 'scale(' + (val.z+1) + ')', background: 'rgb('+val.r+','+val.g+','+val.b+')'}">
        <p>{{ind}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function () {
    return {
      pointerx: 0,
      pointery: 0,
      mappedx: 0,
      mappedy: 50,
      height: 1000,
      width: 1000,
      offsetTop: 1000,
      offsetLeft: 1000,


      dots: [
        {
        name: 'Chris',
        x: 50,
        y: 40,
        z: 1,
        r: 0,
        g: 255,
        b: 0,
        },
        {
        name: 'Center',
        x: 500,
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
    someMethod(){
        this.dots[0].x = this.pointerx - 188
        this.dots[0].y = window.outerHeight - this.pointery - 158
      if (!(this.pointerx > 370 && this.pointerx < 1000 && this.pointery > 270 && this.pointery < 900)){
        this.dots[0].r = 0
        this.dots[0].g = 255
      }
      else{
        this.dots[0].r = 255
        this.dots[0].g = 0
        this.rotate()
      }
      setTimeout(() => this.someMethod(), 30)
    },
    updateValues(event) {
      
      // this.pointerx = event.screenX
      // this.pointery = event.screenY
      this.pointerx = event.pageX-this.offsetLeft
      this.pointery = event.pageY  
    },
    rotate() {
        var pitch = (this.pointerx-685)/(630*2)
        var roll =  (this.pointery-585)/(630*2)
        var yaw = 0
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
        for (var i = 1; i < this.dots.length; i++) {
            var px = this.dots[i].coordinate[0];
            var py = this.dots[i].coordinate[1];
            var pz = this.dots[i].coordinate[2];
            
            this.dots[i].coordinate[0] = Axx*px + Axy*py + Axz*pz;
            this.dots[i].coordinate[1] = Ayx*px + Ayy*py + Ayz*pz;
            this.dots[i].coordinate[2] = Azx*px + Azy*py + Azz*pz;
            this.dots[i].x = Math.round(this.dots[i].coordinate[0]*250+500);
            this.dots[i].y = Math.round(this.dots[i].coordinate[1]*250+300);
            this.dots[i].z = this.dots[i].coordinate[2];
        }
    },
    randomXYZ() {
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
    for(var i=0; i < 10; i++){
      temp = {}
      temp.name = this.makeid
      rando = this.randomXYZ()
      
      temp.coordinate = [rando.x,rando.y,rando.z]
      temp.x = Math.round(rando.x*100+500)
      temp.y = Math.round(rando.y*100+300)
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
}
</style>
