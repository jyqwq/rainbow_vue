<template>
  <div class="row r-1">
    <ul class="nav nav-tabs  dao_ul "id="dao_ul">
      <li role="presentation" v-for="(type,index) in types" @click="changetype(index,type)"
      :class="choose==index ? 'active': '' "><a>{{type}}</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Classes",
        data:function () {
          return{
            types:['产品','心情','日记','测评'],
            choose:0,
            kind:''
          }
        },
        props:['router','keyword']
        ,
        methods:{
          changetype:function (index,type) {
              this.choose=index
              this.kind=type
              this.$emit('getkind',this.kind)
              let li =this.keyword
              let router
              if (index==0) {
                router=this.router.searchAll
              }else if (index==1) {
                router=this.router.searchDynamic
              }else if (index==2) {
                router=this.router.searchJournal
              }else if (index==3){
                router=this.router.searchTest
              }
            console.log(li);
            console.log(router);
            this.$emit('search', li,router)
          }
        }
    }
</script>

<style scoped>
  .active{
    background: gray;
  }
  .r-1 .dao_ul{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .r-1 .dao_ul li a{
    color: gray;
  }
  a{
    cursor: pointer;
  }
  li{
    text-align: center;
    list-style: none;
    border-radius:5px;
  }
</style>
