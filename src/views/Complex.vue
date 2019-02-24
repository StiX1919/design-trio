<template>
  <div class='complex'>
    <h1>Complex page</h1>
    <div class='complex-content'>

      <div class='containers'>
        <h3>Vertical scroll</h3>
        <div class='ver-container'>
          <div v-for='n in 30' :key='n' class='ver-box-boxes'></div>

        </div>
      </div>

      <div class='containers'>
        <h3>Horizontal scroll</h3>
        <div class='hor-container'>
          <div v-for='n in 10' :key='n' class='hor-box-boxes'></div>

        </div>
      </div>

      <!-- need to research more on radial scrolling -->
      <div class='containers'>
        <h3>Radial scroll</h3>
        <h4>WIP</h4>
      </div>

      <div class='containers'>
        <h3>Center scroll</h3>
        <div class='cen-container'>

          <div class='side-content'></div>

          <div class='cen-scroll'>
            <div v-for='n in 10' :key='n' class='cen-box-boxes'></div>
          </div>

          <div class='side-content'></div>
        </div>
      </div>
      <div class='containers'>
        <h3>Decending scroll</h3>
        <div class='dec-container'>
            <div 
              v-for='n in 10' 
              :key='n' 
              class='dec-box-boxes'
              :style="styleDec(n)"
            ></div>
        </div>
      </div>

      <div class='containers'>
        <h3>Stagger scroll</h3>
        <div class='sta-container'>
            <div 
              v-for='n in 10' 
              :key='n' 
              :class='n % 2 === 0 ? "sta-box-boxes sta-alt" : "sta-box-boxes"'
              :style='styleStagger(n)'
            ></div>
        </div>
      </div>

      
    </div>

  </div>
</template>


<script>

export default {
  name: 'complex',
  components: {
  },
  data(){
    return {

    }
  },
  methods: {
    styleDec: function(num) {
      let newNum = num * 30
      return {'margin-top': newNum + 'px'}
    },

    styleStagger: function(num) {

    }
  },
  computed: {
    
  }
  
}

</script>

<style>
  .complex-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center
  }


  .containers {
    height: 300px;
    width: 250px;
    background-color: rgb(130, 148, 202);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px
  }
  
  

  .ver-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    overflow: hidden scroll;
  }
  .ver-box-boxes {
    width: 55px;
    height: 100px;
    margin: 10px;

    background-color: rgb(58, 98, 184);
    border: solid black 2px;
  }

  .hor-container {
    /* display: flex; */
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  .hor-box-boxes {
    width: 150px;
    height: 200px;
    margin: 20px;
    border: solid black 2px;

    background-color: rgb(141, 36, 36);
    display: inline-block
  }


  .cen-container {
    display: flex;
    width: 100%;

    overflow: scroll;
    position: relative;
    justify-content: center;

  }
  .side-content {
    width: 20px;
    height: 80%;
    margin: 10px;

    background-color: rgb(155, 155, 51);
    border: solid black 2px;
    position: sticky;
    top: 10px
  }
  .cen-scroll {

  }
  .cen-box-boxes {
    width: 150px;
    height: 30px;
    margin: 10px;

    background-color: rgb(155, 155, 51);
    border: solid black 2px;
  }

  .dec-container {
    display: flex;
    overflow-x: scroll;
    overflow-y: scroll;
    white-space: nowrap;
  }

  .dec-box-boxes {
    width: 60px;
    height: 90px;
    margin: 5px;
    padding: 30px;
    border: solid black 2px;

    background-color: rgb(141, 36, 36);
  }


  .sta-container {
    display: flex;
    flex-direction: column;
    overflow: hidden scroll;
    height: 100%;
    padding: 0 20px;
  }

  .sta-box-boxes {
    width: 50px;
    height: 100px;
    margin: 5px;
    padding: 50px 0;
    border: solid black 2px;

    background-color: rgb(141, 36, 36);
    align-self: flex-start
  }

  .sta-alt {
    height: 50px;
    width: 100px;
    align-self: flex-end;
    padding: 25px 0;
  }
</style>
