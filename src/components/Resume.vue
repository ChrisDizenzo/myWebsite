<template>
    <div class="bg-gray-100 w-full z-10 flex flex-col items-center">
      
      <div class="hidden container lg:flex flex-col items-center mt-16 h-full w-full z-10">
        <p class="text-6xl w-full text-normal text-blue-900 text-center leading-tight mb-3" style="font-weight: 700;">Resume</p>        
        <!-- <img alt="Vue logo" src="../assets/ME.png"> -->
          <!-- <p v-for="(val,ind) in Object.keys(courses)" :key="ind">{{val}}____________{{coursesKey[courses[val]]}}</p> -->
        <div class="flex h-full text-black w-full border border-gray-400 rounded-md">
          <div class="w-1/3 flex flex-col items-center border-r border-gray-400 bg-blue-900 text-white rounded-md">
              <img alt="Me !" src="../assets/ME.png" class="h-64 w-64 rounded-full my-8 border-2 border-white" >

              <div class="px-6 py-2 mb-5 bg-blue-600 hover:bg-blue-700 text-black hover:shadow-md rounded cursor-pointer">
                <a class="text-md text-white hover:cursor-pointer" href="https://drive.google.com/uc?id=1omZnbeJmNgblTSyY86jdBdlCcaRNV6pZ&export=download" download>Download as pdf</a>
                <!-- <link rel="preload" do="<%= BASE_URL %>CDizenzoResume.pdf"> -->
              </div>

              <div class="flex flex-col items-start w-full px-5 mb-6">
                <!-- <p class="text-2xl text-left font-medium w-full mb-3">About Me</p> -->
                <!-- <p class="text-md font-light text-left w-full">I'm a good lad and I like long walks on sandy beaches. Don't even get me started on eating pasta.</p> -->
                
              </div>

              <div class="flex flex-col items-start w-full px-5 my-4">
                <p class="text-2xl text-left font-medium w-full my-1">Contact</p>
                
                <div class="flex items-center my-2">
                  <font-awesome-icon :icon="['fas', 'phone-square-alt']" size="2x" class="mr-4"/>

                  <p class="text-md font-light text-left w-full leading-tight">(561)-866-0110</p>
                </div>
                <div class="flex items-center my-2">
                  <font-awesome-icon :icon="['fas', 'envelope-square']" size="2x" class="mr-4"/>
                  <p class="text-md font-light text-left w-full leading-tight">cddizenzo4@gmail.com</p>
                </div>
                <div class="flex items-center my-2">
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="mr-4"/>

                  <a onclick="window.open(this.href); return false;" href="https://www.linkedin.com/in/chrisdizenzo/" class="text-md font-light text-left text-blue-500 underline cursor-pointer w-full leading-tight">https://www.linkedin.com/in/chrisdizenzo/</a>
                </div>
                
              </div>
          </div>
          <div class="flex-1 flex flex-col items-center px-12 bg-white">
            <div class="rounded-md flex flex-col w-full h-32 justify-center bg-blue-900 text-white items-center my-6">
                <p class="text-4xl text-left font-medium leading-tight">Christopher DiZenzo</p>
                <p class="text-xl text-left font-medium leading-tight">Computer Scientist</p>

              
            </div>
            <div class="flex w-full flex-col text-blue-900">
              <div class="flex flex-col w-full justify-center border-b-2 border-blue-900 items-center">
                <div class="flex items-center w-full">

                  <p class="text-2xl text-left w-full font-medium leading-tight">Education</p>

                </div>
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-3/4 flex flex-col item-start">
                    <p class="text-sm text-left">UNIVERSITY OF FLORIDA, GAINESVILLE, FL</p>
                    <p class="text-sm text-left">Bachelor of Science in Computer Science	</p>
                    <p class="text-sm text-left">Completed Minor in Mathematics	</p>
                    

                  </div>
                  <div class="w-1/2 flex flex-col item-start">
                    <p class="text-sm text-right">Graduated: May 2020</p>
                    <p class="text-sm text-right">Major GPA:  3.83/4.0</p>
                    <p class="text-sm text-right">Minor GPA:  3.95/4.0	</p>
                    <p class="text-sm text-right">Cumulative GPA:  3.7/4.0	</p>
                    

                  </div>
                  
              </div>
              <p class="text-xs uppercase font-bold text-blue-900 mt-2 mb-2">Filter</p>

              <div class="flex items-center ">
                <div class="text-white rounded-md flex justify-between items-center mb-2 w-full">
                  <p class="px-3 rounded-full text-sm font-medium border border-blue-900 cursor-pointer mx-2" @click="filterMethods(-1)" :class="filter==-1 ? ['bg-blue-900', 'text-white', 'hover:bg-blue-800'] : ['text-blue-900','text-white', 'hover:bg-blue-900', 'hover:text-white']">All</p>
                  <p v-for="(course, ind) in coursesKey" :key="ind" @click="filterMethods(ind)" class="bg-white border border-blue-900   cursor-pointer font-medium px-3 rounded-full text-sm " 
                  :class="filter==ind ? ['bg-blue-900', 'text-white', 'hover:bg-blue-800'] : ['text-blue-900','text-white', 'hover:bg-blue-900', 'hover:text-white']">{{course}}</p>
                </div>
              </div>
              <div class="flex flex-col w-full items-center">
                <div class="w-full flex flex-col items-start">
                    <p class="text-sm text-left"><b>Relevant Coursework:</b>  </p>
                    
                  </div>
              </div>
              <div class="flex w-full items-center">
                <div class="flex flex-wrap w-full  items-center">
                    <div v-for="(course, ind) in Object.keys(courses)" :key="ind" v-show="filter==-1 || filter==courses[course]" class="w-1/2 flex pr-12 items-baseline">
                      <p class="text-sm text-blue-900 text-left">{{course}}</p>
                      <p class="text-sm ml-auto text-blue-900 text-left w-4">{{courseGrades[course]}}</p>

                    </div>
                    
                  
                </div>

              </div>
              <div class="flex flex-col w-full justify-center border-b-2 border-blue-900 items-center mt-6">
                <div class="flex items-center w-full">

                  <p class="text-2xl text-left w-full font-medium leading-tight">Experience</p>

                </div>
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-sm text-left"> <b>Startup - realAppeal </b></p>
                      <p class="text-sm text-left">  April 2020 - Present</p>

                    </div>
                    <p class="text-sm text-left"> <i>Full-stack Developer</i> </p>
                    
                    <p class="text-sm ml-6">Consulted with team managers to advise on best fitting website architecture to meet the companies’ needs.</p>
                    <p class="text-sm ml-6">I designed and created the front-end and back-end for a beta version of the realAppeal website. Functionalities included: Responsive web design,High quality animations, and a real-time cloud-based noSQL database.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-sm text-left"> <b>Startup - Event Discovery Platform</b></p>
                      <p class="text-sm text-left">  January 2020 - April 2020</p>

                    </div>
                    <p class="text-sm text-left"> <i>Software Development</i> </p>
                    
                    <p class="text-sm ml-6">Created and launched a geocentric iOS app using Swift, SwiftUI, Firebase authentication (for Google and Facebook sign-in), Firestore (NoSQL backend), and Firebase Storage (backend image database).</p>
                    <p class="text-sm ml-6">Implemented a single-page Web application using Vue.js that deep-links users to the iOS application, allowing users to share information stored in Firestore across devices.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-sm text-left"> <b>University of Florida</b></p>
                      <p class="text-sm text-left">  August 2019 - May 2020</p>

                    </div>
                    <p class="text-sm text-left"> <i>Teaching Assistant (Discrete Structures)</i> </p>
                    
                    <p class="text-sm ml-6">Led weekly class discussions of over 40 students and developed a practice problem library with solutions in order to enhance students’ understanding of logic, algorithmic complexity, discrete probability, and graphs.</p>
                    <p class="text-sm ml-6">Provided reviews of coding interview questions in order to enhance connection of subject matter to real world applications, including outlines of how course materials may be applied to fields in computer science - ultimately making the material less discrete from reality.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-sm text-left"> <b>University of Florida</b></p>
                      <p class="text-sm text-left">  March 2019 - August 2019 </p>

                    </div>
                    <p class="text-sm text-left"> <i>Research Assistant</i> </p>
                    
                    <p class="text-sm ml-6">Applied featurization and a ResNet-101 Neural Network to detect explosive hazards from a Markov Ground Region Segmentation System.</p>
                    <p class="text-sm ml-6">Developed object-detection algorithms including R-CNN, Faster R-CNN, and YOLO</p>
                    <p class="text-sm ml-6">Created a real-time hand-tracking system, using YOLOv3 on a handmade dataset, capable of detecting positions and gestures of a hand at speeds over 60 frames per second.</p>
                    

                  </div>
                  
              </div>
              
              
              
            </div>
            
          </div>
        </div>
      </div>

      <div class="w-full flex lg:hidden flex-col items-center mt-16 h-full w-full z-10">
        <p class="text-xl w-full text-normal text-blue-900 text-center leading-tight mb-3" style="font-weight: 700;">Resume</p>        
        <!-- <img alt="Vue logo" src="../assets/ME.png"> -->
          <!-- <p v-for="(val,ind) in Object.keys(courses)" :key="ind">{{val}}____________{{coursesKey[courses[val]]}}</p> -->
        <div class="flex flex-col h-full text-black w-full border border-gray-400 rounded-md">

          <div class="w-full flex items-center bg-blue-900">
              <img alt="Me !" src="../assets/ME.png" class="h-32 w-auto my-4 rounded-full mx-4 border-2 border-white" >
              <div class="flex flex-col items-center justify-center">
                <p class="text-lg w-full text-normal text-white text-left leading-tight mb-3" style="font-weight: 700;">Chris DiZenzo</p>        
                <div class="flex flex-col text-md text-white items-start w-full">
                  <p class="text-md text-left font-medium w-full my-1">Contact</p>
                  
                  <div class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'phone-square-alt']" />
                    <p class="text-xs font-light text-left w-full leading-tight">(561)-866-0110</p>
                  </div>
                  <div class="flex items-center">
                    <font-awesome-icon :icon="['fas', 'envelope-square']" />
                    
                    <p class="text-xs font-light text-left w-full leading-tight">cddizenzo4@gmail.com</p>
                  </div>
                  <div class="flex items-center">
                    <font-awesome-icon :icon="['fab', 'fa-linked-in']" />

                    <p class="text-xs font-light text-left w-full leading-tight">https://www.linkedin.com/in/chrisdizenzo/</p>
                  </div>
                  
                </div>
                
              </div>
              
          </div>
          <div class="flex w-full flex-col text-blue-900 px-2">
              <div class="flex flex-col w-full justify-center border-b-2 border-blue-900 items-center">
                <div class="flex items-center w-full">

                  <p class="text-xl mt-2 text-left w-full font-medium leading-tight">Education</p>

                </div>
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-3/4 flex flex-col item-start">
                    <p class="text-xs text-left">UNIVERSITY OF FLORIDA, GAINESVILLE, FL</p>
                    <p class="text-xs text-left">Bachelor of Science in Computer Science</p>
                    <p class="text-xs text-left">Completed Minor in Mathematics	</p>
                    

                  </div>
                  <div class="w-1/2 flex flex-col item-start">
                    <p class="text-xs text-right">Graduated: May 2020</p>
                    <p class="text-xs text-right">Major GPA:  3.83/4.0</p>
                    <p class="text-xs text-right">Minor GPA:  3.95/4.0	</p>
                    <p class="text-xs text-right">Cumulative GPA:  3.7/4.0	</p>
                    

                  </div>
                  
              </div>
              <p class="text-xs uppercase font-bold text-blue-900 mt-2 mb-2">Filter</p>

              <div class="flex items-center ">
                <div class="text-white rounded-md flex justify-between items-center mb-2 w-full">
                  <p class="px-3 rounded-full text-xs font-medium border border-blue-900 cursor-pointer mx-2"  style="font-size: 0.5rem" @click="filterMethods(-1)" :class="filter==-1 ? ['bg-blue-900', 'text-white', 'hover:bg-blue-800'] : ['text-blue-900','text-white', 'hover:bg-blue-900', 'hover:text-white']">All</p>
                  <p v-for="(course, ind) in coursesKey" :key="ind" @click="filterMethods(ind)" class="bg-white border border-blue-900   cursor-pointer font-medium px-3 rounded-full" 
                  style="font-size: 0.5rem" :class="filter==ind ? ['bg-blue-900', 'text-white', 'hover:bg-blue-800'] : ['text-blue-900','text-white', 'hover:bg-blue-900', 'hover:text-white']">{{course}}</p>
                </div>
              </div>
              <div class="flex flex-col w-full items-center">
                <div class="w-full flex flex-col items-start">
                    <p class="text-xs text-left"><b>Relevant Coursework:</b>  </p>
                    
                  </div>
              </div>
              <div class="flex w-full items-center">
                <div class="flex flex-wrap w-full  items-center">
                    <div v-for="(course, ind) in Object.keys(courses)" :key="ind" v-show="filter==-1 || filter==courses[course]" class="w-1/2 flex pr-12 items-baseline">
                      <p class="text-xs text-blue-900 text-left">{{course}}</p>
                      <p class="text-xs ml-auto text-blue-900 text-left w-4">{{courseGrades[course]}}</p>

                    </div>
                    
                  
                </div>

              </div>
              <div class="flex flex-col w-full justify-center border-b-2 border-blue-900 items-center mt-6">
                <div class="flex items-center w-full">

                  <p class="text-2xl text-left w-full font-medium leading-tight">Experience</p>

                </div>
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-sm text-left"> <b>Startup - realAppeal </b></p>
                      <p class="text-sm text-left">  April 2020 - Present</p>

                    </div>
                    <p class="text-sm text-left"> <i>Full-stack Developer</i> </p>
                    
                    <p class="text-sm ml-6">Consulted with team managers to advise on best fitting website architecture to meet the companies’ needs.</p>
                    <p class="text-sm ml-6">I designed and created the front-end and back-end for a beta version of the realAppeal website. Functionalities included: Responsive web design,High quality animations, and a real-time cloud-based noSQL database.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-xs text-left"> <b>Startup - Event Discovery Platform</b></p>
                      <p class="text-xs text-left">  January 2020 - Present</p>

                    </div>
                    <p class="text-xs text-left"> <i>Software Development</i> </p>
                    
                    <p class="text-xs ml-6">Created and launched a geocentric iOS app using Swift, SwiftUI, Firebase authentication (for Google and Facebook sign-in), Firestore (NoSQL backend), and Firebase Storage (backend image database).</p>
                    <p class="text-xs ml-6">Implemented a single-page Web application using Vue.js that deep-links users to the iOS application, allowing users to share information stored in Firestore across devices.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-xs text-left"> <b>University of Florida</b></p>
                      <p class="text-xs text-left">  August 2019 - Present</p>

                    </div>
                    <p class="text-xs text-left"> <i>Teaching Assistant (Discrete Structures)</i> </p>
                    
                    <p class="text-xs ml-6">Led weekly class discussions of over 40 students and developed a practice problem library with solutions in order to enhance students’ understanding of logic, algorithmic complexity, discrete probability, and graphs.</p>
                    <p class="text-xs ml-6">Provided reviews of coding interview questions in order to enhance connection of subject matter to real world applications, including outlines of how course materials may be applied to fields in computer science - ultimately making the material less discrete from reality.</p>
                    

                  </div>
                  
              </div>
              <div class="flex flex w-full justify-center items-start mt-1">
                  <div class="w-full flex flex-col item-start">
                    <div class="flex items-baseline justify-between">
                      <p class="text-xs text-left"> <b>University of Florida</b></p>
                      <p class="text-xs text-left">  August 2019 - Present</p>

                    </div>
                    <p class="text-xs text-left"> <i>Research Assistant</i> </p>
                    
                    <p class="text-xs ml-6">Applied featurization and a ResNet-101 Neural Network to detect explosive hazards from a Markov Ground Region Segmentation System.</p>
                    <p class="text-xs ml-6">Developed object-detection algorithms including R-CNN, Faster R-CNN, and YOLO</p>
                    <p class="text-xs ml-6">Created a real-time hand-tracking system, using YOLOv3 on a handmade dataset, capable of detecting positions and gestures of a hand at speeds over 60 frames per second.</p>
                    

                  </div>
                  
              </div>
              
            </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "About",
  data: function () {
    return {
      filter: -1,
      coursesKey: ["Software Engineering","Machine Learning","Mathematics",],
      courses: {
        "CEN3031 Software Engineering" : 0,
        "COT3100 Applied Discrete Structures" : 2,
        "CDA3101 Intro Computer Organization" : 2,
        "COP3502: Prog. Fundamentals 1 (Java)" : 0,
        "COP3503: Prog. Fundamentals 2 (C++)" : 0,
        "COP3530 Data Structures and Alg." : 0,
        "CNT4007C Computer Networking" : 0,
        "CIS4301 Information and Database Systems" : 0,
        "MAP4305 Intermediate Differential Equations" : 2,
        "STA4321 Fundamentals of Probability" : 1,
        "MAD4401 Intro to Numerical Analysis" : 2,
        "MAA4402 Functions of Complex Variables" : 2,
        "CIS4930 Data Science in Bioinformatics" : 1,
        "COT5615 Math for Intelligent Systems" : 1,
        "EEL5840 Fundamentals of Machine Learning" : 1,
        "CAP6610 Machine Learning" : 3
      },
      courseGrades: {
        "CEN3031 Software Engineering" : 'A',
        "CIS4301 Information and Database Systems" : 'A',
        "COP3502: Prog. Fundamentals 1 (Java)" : 'A',
        "MAA4402 Functions of Complex Variables" : 'A-',
        "MAD4401 Intro to Numerical Analysis" : 'A',
        "COP3530 Data Structures and Alg." : 'A',
        "COP3503: Prog. Fundamentals 2 (C++)" : 'A',
        "COT5615 Math for Intelligent Systems" : 'A-',
        "CDA3101 Intro Computer Organization" : 'A',
        "COT3100 Applied Discrete Structures" : 'A',
        "EEL5840 Fundamentals of Machine Learning" : 'A-',
        "CNT4007C Computer Networking" : 'A-',
        "CAP6610 Machine Learning" : 'A-',
        "STA4321 Fundamentals of Probability" : 'A',
        "MAP4305 Intermediate Differential Equations" : 'A',
        "CIS4930 Data Science in Bioinformatics" : 'A',
      }
    }
  },
  methods: {
    filterMethods(val){
      this.filter = this.filter==val ? -1 : val
    }
  }
}
</script>

<style>

</style>