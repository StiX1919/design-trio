<template>
  <div class="home">
    <h1>Dynamic</h1>
    <div>
      <div class='filter-inputs'>
        <div>
          <h2>Hit Points</h2>
          <h4>{{hpMore ? 'More' : 'Less'}} than</h4>
          <input type='number' v-model="hpInput"/>
          <button :disabled="hpMore === false" @click="updateButton('hpMore')">Less</button>
          <button :disabled="hpMore === true" @click="updateButton('hpMore')" >More</button>
        </div>
        <div>
          <h2>Build Time</h2>
          <h4>{{btMore ? 'More' : 'Less'}} than</h4>
          <input type='number' v-model="btInput"/>
          <button :disabled="btMore === false" @click="updateButton('btMore')">Less</button>
          <button :disabled="btMore === true" @click="updateButton('btMore')">More</button>
        </div>
        <div>
          <h2>Cost (gold)</h2>
          <h4>{{cstMore ? 'More' : 'Less'}} than</h4>
          <input type='number' v-model="cstInput"/>
          <button :disabled="cstMore === false" @click="updateButton('cstMore')">Less</button>
          <button :disabled="cstMore === true" @click="updateButton('cstMore')">More</button>
        </div>
      </div>
      <button @click='sortAllUnits'>Calculate</button>

      <div></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dynamic',
  data() {
    return {
      hpInput: 0,
      hpMore: false,
      btInput: 0,
      btMore: false,
      cstInput: 0,
      cstMore: false,

      units: [],
      sortedUnits: []
    }
  },
  methods: {
    updateButton: function(name){
      this[name] = !this[name]
    },
    sortAllUnits: function(){
      console.log(this.hpInput, -this.hpInput)
      this.sortedUnits = this.units.filter((unit, index) => {
        console.log(unit.hit_points > this.hpInput)
        //hp Filter
        if(this.hpMore === true){
          return unit.hit_points > this.hpInput
        } else return unit.hit_points < this.hpInput
      }).filter((unit, index) => {
        //build filter
        console.log(unit.build_time > this.btInput)
        if(this.btMore === true){
          return unit.build_time > this.btInput
        } else return unit.build_time < this.btInput
      }).filter((unit, index) => {
        //cost filter
        console.log(unit.cost.Gold)
        if(this.cstMore === true){
          return unit.cost.Gold > this.cstInput
        } else return unit.cost.Gold < this.cstInput
      })

      console.log(this.sortedUnits)
    },

    getUnits: function(){
      axios.get('http://localhost:3001/api/getUnits').then(response => {
        console.log(response.data.units, 'inside')
        this.units = response.data.units
      }).catch(err => console.log(err, 'broke'))
    },

  },
  mounted() {
    this.getUnits()
  }
}
</script>

<style>

.filter-inputs {
  display: flex
}

</style>