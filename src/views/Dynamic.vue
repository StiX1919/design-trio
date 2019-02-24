<template>
  <div class="home">
    <h1>Dynamic</h1>
    <div>
      <div class='filter-inputs'>
        <div>
          <h2>Hit Points</h2>
          <h4>{{hpMore ? 'More' : 'Less'}} than</h4>
          <input v-model="hpInput"/>
          <button :disabled="hpMore === false" @click="updateButton('hpMore')">Less</button>
          <button :disabled="hpMore === true" @click="updateButton('hpMore')" >More</button>
        </div>
        <div>
          <h2>Build Time</h2>
          <h4>{{btMore ? 'More' : 'Less'}} than</h4>
          <input v-model="btInput"/>
          <button :disabled="btMore === false" @click="updateButton('btMore')">Less</button>
          <button :disabled="btMore === true" @click="updateButton('btMore')">More</button>
        </div>
        <div>
          <h2>Cost</h2>
          <h4>{{cstMore ? 'More' : 'Less'}} than</h4>
          <input v-modal='cstInput'/>
          <button :disabled="cstMore === false" @click="updateButton('cstMore')">Less</button>
          <button :disabled="cstMore === true" @click="updateButton('cstMore')">More</button>
        </div>
      </div>
      <button>Calculate</button>

      <div></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'dynamic',
  data() {
    return {
      hpInput: 0,
      hpMore: false,
      btInput: 0,
      btMore: false,
      cstInput: 0,
      cstMore: false
    }
  },
  methods: {
    updateButton: function(name){
      this[name] = !this[name]
    }
  }
}
</script>

<style>

.filter-inputs {
  display: flex
}

</style>