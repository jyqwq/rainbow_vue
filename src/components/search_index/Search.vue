<template>
  <div class="container-fluid con">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <search-logo></search-logo>
        <filter-button></filter-button>
        <search-input></search-input>
        <popular ></popular>
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
            'model':Model
        },
        // methods:{
        //   getter(msg) {
        //     this.flag=msg
        //     window.sessionStorage.setItem('flag',msg)
        //     console.log(this.flag);
        //   },
        // }
    }

</script>

<style scoped>
  .con{
    margin-top: 100px;
  }
  button{
    border: rgba(255, 20, 147, 0.54);
  }

</style>
