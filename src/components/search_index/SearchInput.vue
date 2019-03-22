<template>
  <div class="row sch">
    <div class="col-md-12">
      <div class="input-group icy_sch">
        <input type="text" class="form-control" placeholder="搜索你想要的内容..." v-model="keywords" >
        <span class="input-group-btn">
          <router-link :to="{name:'Result'}"><button class="btn " id="search" type="button" @click="search">搜索</button></router-link>
         </span>
      </div>
    </div>
  </div>
</template>

<script>
    import Bus from '../../bus.js'
    export default {
        name: "SearchInput",
        data:function () {
          return{
            keywords:'',
            condition:'',
            method:'',
            list:[],
          }
        },
        methods:{
          // cdt:function () {
          //   var vm = this;
          //   Bus.$on('btn', (data) => {
          //     vm.condition = data
          //     console.log(vm.condition);
          //   });
          // },
          search:function () {
            this.condition=window.sessionStorage.getItem('condition')
            if (this.condition==0){
              this.method=1
            } else {
              this.method=2
            }
            //历史列表
            // console.log(typeof this.list);
            if (localStorage.getItem('history')) {
              this.list=JSON.parse(window.localStorage.getItem('history'))
            }
              if (this.list.length>=10) {
                this.list.splice(0,1)
                this.list.push(this.keywords)
              }else {
                this.list.push(this.keywords)
              }

            //搜索条件
            let message={'keyword':this.keywords,'condition':this.condition,'method':this.method};
            message=JSON.stringify(message)
            window.sessionStorage.setItem('message',message)
            //历史记录
            window.localStorage.setItem('history',JSON.stringify(this.list))
          }
        },
    }
</script>

<style scoped>
  .icy_sch input{
    border: 2px solid rgb(255, 20, 147);
    border-radius: 0;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0 0 0;
  }
  .icy_sch button{
    border: 1px solid rgb(255, 20, 147);
    border-radius: 0;
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
    outline: 0;
  }
  .sch{
    margin-top: 20px;
  }
</style>
