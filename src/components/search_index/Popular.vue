<template>
  <div class="row hot">
    <div class="hot-left ">
      <div class="hot-title">
        <span class="glyphicon glyphicon-fire"></span>
        <span class="hs">热门搜索</span>
      </div>
      <div class="hot-list">
        <div class="list-1  col-md-5">
          <table class="table table-condensed tab-1 " id="tab-1">
            <tr>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="list-2  col-md-5 col-md-offset-1">
          <table class="table table-condensed tab-2" id="tab-2">
            <tr>
              <td>11</td>
              <td></td>
            </tr>
            <tr>
              <td>12</td>
              <td></td>
            </tr>
            <tr>
              <td>13</td>
              <td></td>
            </tr>
            <tr>
              <td>14</td>
              <td></td>
            </tr>
            <tr>
              <td>15</td>
              <td></td>
            </tr>
            <tr>
              <td>16</td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td></td>
            </tr>
            <tr>
              <td>18</td>
              <td></td>
            </tr>
            <tr>
              <td>19</td>
              <td></td>
            </tr>
            <tr>
              <td>20</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="hot-right ">
      <div class="history-title">
        <span class="glyphicon glyphicon-time"></span>
        <span class="hs">搜索历史</span>
        <span class="glyphicon glyphicon-trash" @click="clear"></span>
      </div>
      <div class="history-list">
        <div class="list-1  col-md-12">
          <table class="table table-condensed tab-3" id="tab-3">
            <tr>
              <td>1</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Bus from '../../bus.js'
    export default {
        name: "Popular",
        data:function(){
          return{
              flag:''
          }
        },
        methods:{
          clear:function () {
              this.flag=true
              Bus.$emit('val',this.flag)
          }
        }


    }
</script>

<style scoped>
  .hot{
    border-radius: 2px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    overflow: hidden;
  }
  #tab-1 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  #tab-2 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  #tab-3 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  .hot-left{
    display: inline-block;
    width: 64%;
    padding: 0px 10px 0px 0px;
    box-sizing:border-box;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin-right: 18px;

  }
  .hot-title,.history-title{
    padding: 15px;
  }
  .glyphicon-fire{
    font-size: 1.6em;
  }
  .glyphicon-time{
    font-size: 1.6em;
  }
  .hs{
    font-size: 1.6em;
  }
  .hot-title .hs{
    font-size: 1.6em;
  }
  .hot-right{
    margin-left: 3px;
    display: inline-block;
    width: 31%;
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .glyphicon-trash{
    font-size: 1em;
    color: rgb(128, 128, 128);
  }
  .glyphicon-trash:hover{
    cursor: pointer;
    color: rgba(0, 0, 255, 0.62);
  }
  button{
    border: deeppink;
  }
  #tab-1 tr :nth-child(2),#tab-2 tr :nth-child(2),#tab-3 tr :nth-child(2):hover{
    cursor: pointer;
  }
</style>
