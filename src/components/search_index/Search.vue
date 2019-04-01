
<template>
  <div class="container-fluid con" >
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <search-logo></search-logo>
        <filter-button></filter-button>
        <search-input></search-input>
        <bilibili></bilibili>
        <popular></popular>
        <model></model>
      </div>
    </div>

  </div>

</template>

<script>
  import FilterButton from './FilterButton'
  import Model from './Model'
  import Popular from './Popular'
  import SearchInput from './SearchInput'
  import SearchLogo from './SearchLogo'
  import Bilibili from './Bilibili'
    export default {
        name: "Search",
      data:function(){
        return{
            flag:false
        }
      },
        components:{
            'search-logo':SearchLogo,
            'filter-button':FilterButton,
            'search-input':SearchInput,
            'popular':Popular,
            'model':Model,
            'bilibili':Bilibili
        },

        methods:{


  },

    }

</script>

<style scoped>

  .con{
    padding-top: 100px;
    background-image: url("../../assets/dy-background.png");
    padding-bottom: 40px;
  }
  button{
    border: rgba(255, 20, 147, 0.54);
  }


</style>
