<template>
  <div class='static'>
    <h1>Static page</h1>
    <div class='static-content'>
      <img class='static-img' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/34869df7-b240-414d-b89f-13c862e34bf1/d8bsz28-61f7a052-1192-45a6-b4f5-528f97ff9633.png/v1/fill/w_1024,h_446,q_80,strp/adventure_time___finn_and_jake_fistbump_by_soffeed_d8bsz28-fullview.jpg'/>
      <h2>This is a title</h2>
      <p class='static-txt'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolor ex tempore accusamus pariatur ea at a modi eaque laboriosam? Minus sapiente a aperiam ab, distinctio vero nisi accusamus qui.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores amet quo, ducimus porro aliquid nobis, culpa quia incidunt nulla eum consequuntur mollitia error facilis odit, quidem iusto numquam sint. Placeat?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sapiente id dolores nisi ratione, numquam provident corporis in? Neque accusantium recusandae quasi, vero consequatur ratione adipisci earum doloribus nesciunt laboriosam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae ea quidem, vitae repellendus in eligendi mollitia nulla nesciunt illo tempora exercitationem voluptatum ratione laborum architecto nam reiciendis accusamus inventore.
      </p>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'static',
}
</script>

<style>
  .static{
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 50px);

    display: flex;
    flex-direction: column;
    align-items: center
  }
  .static-content {
    width: 80%;

    /* display: flex; */
  }

  .static-img {
    width: 400px;
    height: 200px;
    margin: 0 20px 10px 0;
    
    
    float: left;
  }
  .static-txt {
    text-align: left
  }

</style>
