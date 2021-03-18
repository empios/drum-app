<template>
  <div class="hero is-warning is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="card" >
          <div class="card-content mt-6 mb-6" >
            <div class="columns mt-6 mb-6">
              <div class="column" style="margin: auto">
                <div class="columns is-fullheight">
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Heater-1')" id="Heater-1">Heater-1</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Heater-2')" id="Heater-2">Heater-2</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Heater-3')" id="Heater-3">Heater-3</b-button>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Heater-4')" id="Heater-4">Heater-4</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Clap')" id="Clap">Clap</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Open-HH')" id="Open-HH">Open-HH</b-button>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Kick-n\'-Hat')" id="Kick-n'-Hat">Kick-n'-Hat</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Kick')" id="Kick">Kick</b-button>
                  </div>
                  <div class="column">
                    <b-button type="is-warning" size="is-large" @click="handleClick('Closed-HH')" id="Closed-HH">Closed-HH</b-button>
                  </div>
                </div>
              </div>

              <div class="column">
                <div class="column">
                  <b-field label="Volume">
                    <b-slider v-model="value"></b-slider>
                  </b-field>
                </div>
                <div class="column">
                    <p>{{this.clicked}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Drum from "@/Class/Drum";

export default {
  name: 'Player',
  components: {
  },
  data() {
    return {
      value: 0,
      clicked: "",
      drumArr: []
    }
  },
  mounted() {
    let Q = new Drum('Heater-1', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3').getDrum();
    let W = new Drum('Heater-2', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3').getDrum();
    let E = new Drum('Heater-3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3').getDrum();
    let A = new Drum('Heater-4', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3').getDrum();
    let S = new Drum('Clap', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3').getDrum();
    let D = new Drum('Open-HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3').getDrum();
    let Z = new Drum('Kick-n\'-Hat', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3').getDrum();
    let X = new Drum('Kick', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3').getDrum();
    let C = new Drum('', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3').getDrum();
    this.drumArr.push(Q,W,E,A,S,D,Z,X,C);
  },
  methods: {
    handleClick: function (name) {
      this.clicked = "Current: "+name;
      let volume = this.value
      this.drumArr.filter( function (item) {
        if(item.name === name) {
          let audio = new Audio(item.url);
          audio.volume = volume/100
          audio.play();
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
