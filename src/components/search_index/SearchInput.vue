<template>
  <div class="row sch">
    <div class="col-md-12">
      <div class="input-group icy_sch">
        <input type="text" class="form-control" placeholder="搜索你想要的内容...">
        <span class="input-group-btn">
                       <a href="#"><button class="btn " id="search" type="button">搜索</button></a>
                            </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchInput"
    }
</script>

<style scoped>
  .icy_sch input{
    border: 2px solid rgb(255, 20, 147);
    border-radius: 0px;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0px 0px 0px;
  }
  .icy_sch button{
    border: 1px solid rgb(255, 20, 147);
    border-radius: 0px;
    background-color: rgb(255, 20, 147);
    color: white;
    width: 90px;
  }

  #search:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #search:focus{
    color: white;
    outline: 0px;
  }
  .sch{
    margin-top: 20px;
  }
</style>
