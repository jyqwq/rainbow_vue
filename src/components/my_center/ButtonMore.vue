<template>
  <div style="zoom:1;overflow: hidden;">
    <a href="../setting/Setting.vue">{{margin_bottom}}</a>
  </div>
</template>

<script>
    export default {
      props:['margin_bottom',],
      name: "ButtonMore",
      data:function () {
        return{
        }
      }
    }
</script>

<style scoped>
  /*结尾更多按钮—开始*/
  .button_qz{
    position: relative;
    padding-right: 2em;
    border-radius: .6em;
    padding: .2em 1em .3em;
    line-height: 1.618;
    display: inline-block;
    text-align: center;
    text-align-last: center;
    vertical-align: middle;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transition: all .2s ease-out;
    text-decoration: none;

    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  /*编辑按钮—开始*/
  .button_edit {
    background: #FFAAAA;
    color: #fff;
    border: #FFAAAA;
  }
  .button_edit:hover{
    background: #FFE3E5;
    text-decoration: none;
    color: #FFAAAA;
  }
  /*编辑按钮—结束*/
  .button_primary {
    background: rgba(220, 20, 60, 0.71);
    color: #fff;
    border: solid 2px rgba(220, 20, 60, 0.71);
  }
  .button_primary:hover{
    background: whitesmoke;
    text-decoration: none;
    color: rgba(220, 20, 60, 0.71);
  }
  /*结尾更多按钮—结束*/
</style>
