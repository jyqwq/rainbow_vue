<template>
  <div class="row r-4" >
    <div class="col-md-12">
      <div class="row r-4-1 "id="r-4-1" >
        <router-link :to="{name:'Detail'}">
          <div class="goods  col-md-3"  v-for="(i,index) in goodinfo.length-1" :class="sequence[index%4-1]" >
          <div class="goods-content" @click="infodetail(goodinfo[index].id)">
            <a ><img src="../../assets/search_img/good-1.jpg" class="img-responsive"></a>
            <div class="goods-d-1">
              <p class="goods-p-1"> <strong>{{goodinfo[index].price}}</strong> <span class="rect">市场价</span></p>
              <p class="goods-p-2"><a>{{goodinfo[index].name}}</a></p><p class="goods-p-3"><a ><span class="glyphicon glyphicon-menu-hamburger"></span><span>{{goodinfo[index].brand}}</span><span>产品编号:</span><span>{{goodinfo[index].id}}</span></a></p>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Goods",
        data:function () {
          return{
            sequence:['goods-1','goods-2','goods-3','goods-4'],
          }
        },
        props:['goodinfo'],
        methods:{
          infodetail:function (id) {
              this.$router.push({name:'Detail',params:{com_id:id}})
          }
        },
        mounted:function () {
          console.log(this.goodinfo);
        }
    }
</script>

<style scoped>
  .r-4{
    padding-left: 0;
    height: 500px;
  }

  .con .row .r-4 .r-4-1 .goods{
    padding-left: 0;
    padding-top: 0;
    padding-right: 15px;
    margin-bottom: 20px;
  }
  .goods .goods-content{
    background: white;

  }
  .goods .goods-content:hover{
    box-shadow: 0 0 5px #888888;
  }
  .goods img{

    border-bottom: 1px dashed rgba(128, 128, 128, 0.26);
  }
  #r-4-1 img{
    width: 266px;
    height: 266px;
  }
  .goods .goods-content .goods-d-1{
    padding: 10px;
  }
  .goods-p-1{
    padding-bottom: 10px;
    color: deeppink;
    font-size: 1.5em;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.26);
  }
  .goods-p-1 .rect{
    background: deeppink;
    color: white;
  }
  .goods-p-2{
    margin-top: 15px;
  }
  .goods-p-2 a{
    color: black;
  }
  .goods-p-2 a:hover{
    color: red;
  }
  .goods-p-3{
    margin-top: 15px;
    margin-bottom: 35px;
    font-size: 0.8em;
  }
  .goods-p-3 a{
    color: gray;
  }
  .goods-p-3 a:hover{
    text-decoration: none;
    cursor: default;
  }
  .goods-p-3 a :nth-child(3),.goods-p-3 a :nth-child(3){
    display: inline-block;
    margin-left: 100px;
  }
  .main_content .r-4 .r-4-1{
    margin-bottom:20px;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-4{
    padding-left: 15px;
    padding-right: 0;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-3{
    padding-left: 10px;
    padding-right:5px;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-2{
    padding-left: 5px;
    padding-right:10px;
  }

</style>
