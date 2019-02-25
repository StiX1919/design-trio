<template>
  <div class="home">
    <h1>Dynamic</h1>
    <div>
      <div class='filter-inputs'>
        <div>
          <h2>Hit Points</h2>
          <h4>{{hit_points}} than</h4>
          <input type='number' v-model="hpInput"/>
          <button @click="updateSort('hit_points', 'less', hpInput)">Less</button>
          <button @click="updateSort('hit_points', 'more', hpInput)" >More</button>
        </div>
        <div>
          <h2>Build Time</h2>
          <h4>{{build_time ? 'More' : 'Less'}} than</h4>
          <input type='number' v-model="btInput"/>
          <button @click="updateSort('build_time', 'less', btInput)">Less</button>
          <button @click="updateSort('build_time', 'more', btInput)">More</button>
        </div>
        <div>
          <h2>Cost (gold)</h2>
          <h4>{{cost ? 'More' : 'Less'}} than</h4>
          <input type='number' v-model="cstInput"/>
          <button @click="updateSort('cost', 'less')">Less</button>
          <button @click="updateSort('cost', 'more')">More</button>
        </div>
      </div>
      <button @click='reset'>Reset</button>

      <div class='sorted-units'>
        <div class="unit-box" 
              v-for="(unit, index) in sortedUnits" 
              :key="index"
              >
          <h3 class='unit-name'>{{unit.name}}</h3>
          <h5>Hit Points: {{unit.hit_points}}</h5>
          <h5>Build Time: {{unit.build_time}}</h5>
          <h5>Gold: {{unit.cost.Gold}}</h5>
        </div>
      </div>
      <div>
        <h3>5 Best Units</h3>
        <div class='checkBoxes'>
          <h5>Same Units</h5>
          <input type='checkbox' :checked="anyCheck === false" @click="updateCheck"/>
          <h5>Any Units (WIP)</h5>
          <input type='checkbox' :checked="anyCheck === true" @click="updateCheck"/>
        </div>
      </div>


      <div class='sorted-units'>
        <div class="unit-box" 
              v-for="(unit, index) in bestUnits" 
              :key="index"
              >
          <h3 class='unit-name'>{{unit.name}}</h3>
          <h5>Hit Points: {{unit.hit_points}}</h5>
          <h5>Build Time: {{unit.build_time}}</h5>
          <h5>Gold: {{unit.cost.Gold}}</h5>
        </div>
      </div>


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
      hit_points: 'more',
      btInput: 0,
      build_time: 'more',

      cstInput: 0,
      cost: 'more',

      anyCheck: true,

      units: [],
      sortedUnits: [],
      bestUnits: []
    }
  },
  methods: {
    updateSort: function(name, type, input){
      this[name] = type

      this.sortedUnits = this.sortedUnits.filter(unit => {
        if(type === 'more'){
          return unit[name] > input
        } else return unit[name] < input
      })

    },
    sortAllUnits: function(){
      this.sortedUnits = this.units.filter((unit, index) => {
        //hp Filter
        if(this.hit_points === 'more'){
          return unit.hit_points > this.hpInput
        } else return unit.hit_points < this.hpInput
      }).filter((unit, index) => {
        //build filter
        if(this.build_time === 'more'){
          return unit.build_time > this.btInput
        } else return unit.build_time < this.btInput
      }).filter((unit, index) => {
        //cost filter
        if(this.cost === 'more'){
          
          return unit.cost.Gold > this.cstInput
        } else if(this.cstMore === false){
          if(unit.cost.Gold === undefined){
              return true
          }
          return unit.cost.Gold < this.cstInput
        }
      }).sort((a, b) => a.cost.Gold - b.cost.Gold)
      this.bestFive()
      console.log(this.sortedUnits)
    },
    bestFive: function(){
      let finalFive = []
      if(this.anyCheck === false){

        let filteredUnits = this.sortedUnits
          .sort((a, b) => a.build_time - b.build_time)
          .filter((unit, index, arr) => {
            return unit.build_time === arr[0].build_time
          })
          .sort((a, b) => b.hit_points - a.hit_points)

        for(let i = 0; i < 5; i++){
          finalFive.push(filteredUnits[0])
        }
        console.log(filteredUnits) 
        this.bestUnits = finalFive
        // this.bestUnits = filteredUnits
      }
      else {

      }
    },
    updateCheck: function() {
      this.anyCheck = !this.anyCheck
    },

    getUnits: function(){
      axios.get('http://localhost:3001/api/getUnits').then(response => {
        let sorted = response.data.units.sort((a, b) => a.cost.Gold)
        this.units = sorted
        this.sortedUnits = sorted
      }).catch(err => console.log(err, 'broke'))
    },
    reset: function(){
      this.sortedUnits = this.units
    }

  },
  mounted() {
    this.getUnits()
  }
}
</script>

<style>

  .filter-inputs {
    display: flex;
    justify-content: space-around;

    width: 100%
  }

  .sorted-units {
    height: 240px;
    width: 700px;

    /* border: solid black 2px; */
    display: flex;
    overflow-x: auto;

    box-shadow: inset 0px 0px 15px 5px

    /* overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap; */
  }

  .unit-box {
    height: 200px;
    min-width: 150px;
    margin: 10px;

    border: solid black 2px;
    /* display: inline-block; */
  }
  .unit-name {
    height: 60px;
    max-width: 100%;
  }

  .checkBoxes {
    display: flex
  }

</style>