<template>
<div v-if="display">
  <Card>
  <template v-slot:infoImg>
      <img src="./assets/images/image-victor.jpg" alt="icon-luxury">
  </template>

   <template v-slot:infoName>
     Victor Crest
  </template>

   <template v-slot:infoAge>
     26
  </template>

   <template v-slot:infoPlace>
    London
  </template>

  <template v-slot:follows>
     80K
  </template>

  <template v-slot:likes>
      803K
  </template>

  <template v-slot:Photos>
     1.4K
  </template>
</Card>
</div>
<div v-else>
  <Card>
  <template v-slot:infoImg>
        <img :src="person[0].picture.large" alt="profile-photo">
  </template>

   <template v-slot:infoName>
     {{person[0].name.title}} {{person[0].name.last}}
  </template>

   <template v-slot:infoAge>
     {{person[0].dob.age}}
  </template>

   <template v-slot:infoPlace>
     {{person[0].location.city}}
  </template>

  <template v-slot:follows>
     {{follows}}K
  </template>

  <template v-slot:likes>
      {{likes}}K
  </template>

  <template v-slot:Photos>
     {{photos}}.4K
  </template>
</Card>
</div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
   Card
  },
  data() {
    return {
      person : [],
      display:true,
      follows : NaN,
      likes:NaN,
      photos:NaN
      
    }
  }, 
  methods: {
    follow() {
      this.follows = Math.floor(Math.random() * 200);
    },
    like() {
      this.likes = Math.floor(Math.random() * 1000);
    },
    photo() {
      this.photos = Math.floor(Math.random() * 6)
    }
  },
  mounted() {
    fetch('https://randomuser.me/api/')
    .then(x => x.json())
    .then(data =>  {
      this.person = data.results
      if(this.person) {
        this.display =false
        this.follow()
        this.like()
        this.photo()
      }
    })
    .catch(err => console.log(err.message))
  }
}
</script>

<style>
@import '../assets/css/app.css';

#app {
  background-image: url('./assets/images/bg-pattern-top.svg'), url('./assets/images/bg-pattern-bottom.svg');
  background-repeat: no-repeat, no-repeat;
  background-size: 100%;
  background-position: -150px -35px, 140px 110%;
}

@media screen and (min-width:1400px) and (max-width: 1599px) {
   #app {
       background-size: 70%, 70% ;
       background-position:-350px -450px, 700px 400px;
   }
  
}

@media screen and (min-width:1600px){
   #app {
       background-size: 70%, 70% ;
       background-position:-450px -650px, 900px 400px;
   }
  
}


</style>
