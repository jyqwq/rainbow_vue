<template >
  <div id="modal" class="modal" v-show="dd">
    <div class="modal-content">
      <header class="modal-header">
        <h4>清除历史记录</h4>
        <span class="close">×</span>
      </header>
      <div class="modal-body">
        <p>确定要清除历史记录吗</p>
      </div>
      <footer class="modal-footer">
        <button id="cancel" @click="close">取消</button>
        <button id="sure"   @click="sure">确定</button>
      </footer>
    </div>
  </div>

</template>

<script>
    import Bus from '../../bus.js'
    export default {
        // props:['flag'],
        name: "Model",
        data:function(){
          return{
            dd:false,
            history:''
          }
        },
         mounted:function(){
           let vm = this;
           Bus.$on('val', (data)=>{
             console.log(data);
             vm.dd = data
           })
        },
        methods:{
          'close':function () {
              this.dd=false
          },
          sure:function () {
            this.dd=false;
            window.localStorage.setItem('history','')
            Bus.$emit('his',this.history)
          }
        }
    }
</script>

<style scoped>
  .modal{
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-content{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 50%;
    max-width: 700px;
    height: 40%;
    max-height: 500px;
    margin: 100px auto;
    border-radius:10px;
    background-color:#fff;
    -webkit-animation: zoom 0.6s;
    animation: zoom 0.6s;
    resize: both;
    overflow: auto;
  }
  @-webkit-keyframes zoom{
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
  }
  @keyframes zoom{
    from {transform: scale(0)}
    to {transform: scale(1)}
  }
  .modal-header{
    box-sizing:border-box;
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close{
    color: #b7b7b7;
    font-size: 30px;
    font-weight: bold;
    margin-right: 20px;
    transition: all 0.3s;
  }
  .close:hover, .close:focus{
    color: #95b4ed;
    text-decoration: none;
    cursor: pointer;
  }
  .modal-body{
    padding: 10px;
    font-size: 16px;
    box-sizing:border-box;
  }
  .modal-footer{
    box-sizing:border-box;
    border-top:1px solid #ccc;
    display: flex;
    padding: 15px;
    justify-content: flex-end;
    align-items: center;
  }
  .modal-footer button{
    width: 60px;
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
    margin-right: 10px;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    background-color: cornflowerblue;
  }
  .modal-footer button:hover, .modal-footer button:focus{
    background-color: #95b4ed;
    cursor: pointer;
  }
  @media only screen and (max-width: 700px){
    .modal-content {
      width: 80%;
    }
  }
</style>
