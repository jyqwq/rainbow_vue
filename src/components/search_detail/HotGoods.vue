<template>
  <div class="r-3-left" id="r-3-left">
    <div class="row r-3-1" id="r-3-1">
      <span>热门产品</span>
    </div>
    <div class="row r-3-2 h-1" v-for="(hot,index) in hotinfo"  @click='detailhot(hot.id)'>
      <div class="col-md-4 r-3-2-1">
        <img src="../../../static/search_img/good-1.jpg" alt="">
        <span>{{hot.id}}</span>
      </div>
      <div class="col-md-8 r-3-2-2">
        <span>{{hot.brand}}</span>
        <span>{{hot.name.slice(0,15)+'...'}}</span>
        <p><img src="../../../static/search_img/fbs.png" alt="">{{hot.fbs}}
          <img src="../../../static/search_img/collection.png" alt="">{{hot.cols}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Bus from '../../bus'
    export default {
        name: "HotGoods",
        data:function () {
          return{
              hotinfo:'',
              oneinfo:'',

          }
        },
        methods:{
            detailhot:function (id) {
              axios.get(this.GLOBAL.HOST+'search/oneProduct/'+'?id='+id)
                .then((res) =>{
                  if (res){
                    this.oneinfo=res.data
                    this.oneinfo=JSON.stringify(this.oneinfo)
                    this.$emit('transferProduct',this.oneinfo)
                    axios.post(this.GLOBAL.HOST+'user/viewCollections/',
                      {"method":"check","target":[{"type":"commodity","id":id,"user_id":1}]}
                    ).then((res)=>{
                      if (res){
                        if (res.data[0].status_code==10017) {
                          let iscollect=false
                          console.log('ok>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                          Bus.$emit('transfercollect',iscollect)
                          this.recact()
                        }else {
                          let iscollect=true
                          console.log('no>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                          Bus.$emit('transfercollect',iscollect)
                        }

                      }
                    }).catch((err)=>{
                      console.log(err);
                    })
                  }
                }).catch((err)=>{
                console.log(err);
              })
            },
            recact:function () {

            }
        },
        mounted:function () {
            axios.get(this.GLOBAL.HOST+'search/hotCosmetics/'+'?page=1').then((response)=>{
              this.hotinfo=response.data;
              console.log(this.hotinfo[0].name);
            }).catch(function (err) {
              console.log(err);
            })
            var vm=this
            Bus.$on('reset',(data)=>{
              this.recact=data
            })
        },
    }
</script>

<style scoped>
  .r-3-left{
    width: 21.25%;
    display: inline-block;
  }
  #r-3-1{
    margin-left: 0 !important;
    border-left: 5px solid #c69a62;
    height: 50px;
    padding-left: 40px;
    line-height: 50px;
    background: white;
    margin-bottom: 2px;
  }
  .r-3-1 span{
    font-size: 1.3em;
  }
  #r-3-left .r-3-2{
    margin-left: 0;
    /*margin-top: 2px;*/
    background: white;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }
  #r-3-left .r-3-2:hover{
    cursor: pointer;
    box-shadow: 0 0 10px #888888;;
  }
  .r-3-2-1 img{
    margin-left:0;
    width: 65px;
  }
  .r-3-2-1 :nth-child(2){
    display: none;
  }
  .r-3-2-2{
    /*text-align: center;*/
  }
  .r-3-2-2>:nth-child(1){
    display: inline-block;
    background: rgba(0, 179, 238, 0.58);
    border-radius: 3px;
    color:white;
    padding: 3px;
    font-weight:600;

  }
  .r-3-2-2 p {
    margin-top: 20px;
  }
  .r-3-2-2 p img{
    margin-right: 10px;
    margin-bottom: 5px;
  }
</style>
