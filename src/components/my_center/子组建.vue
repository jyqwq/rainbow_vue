<template>
            <li class="start_date_li">
              <input id="start" class="date_ipt" type="text" placeholder="入住日期" readonly="readonly"
                     value="2019-3-19" ref="start_time">
            </li>
            <li class="end_date_li">
              <input id="end" class="date_ipt" type="text" placeholder="离开日期" readonly="readonly"
                     value="" ref="end_time">
            </li>
            <!--入住人数-->
              <div class="ipt_box">
                <input id="personNumIpt" class="person_num_ipt ipt" type="text" placeholder="入住人数"
                       readonly="readonly" data-person="" ref="number_of_people">
              </div>
        <div class="search_bar_r">
          <input id="search_btn" class="search_btn" type="button" value="开始搜索" @click="search">
        </div>
            <td data-type="rent" class="td_c td_md" :[cls]="rent_style==-1 ? 'active' : ''" @click="rent_style=-1">
              <div class="tags" data-rent="">不限</div>
            </td>
            <td data-type="rent" class="td_c td_md" :[cls]="rent_style==0 ? 'active' : ''" @click="rent_style=0">
              <div class="tags" data-rent="0">整套出租</div>
            </td>
            <td data-type="rent" class="td_c td_md" :[cls]="rent_style==1 ? 'active' : ''" @click="rent_style=1">
              <div class="tags" data-rent="1">独立单间</div>
            </td>
            <td data-type="rent" class="td_c td_md" :[cls]="rent_style==2 ? 'active' : ''" @click="rent_style=2">
              <div class="tags" data-rent="2">合住房间</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==1 ? 'active' : ''" @click="house_style=1">
              <div class="tags" data-preview="民居">民居</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==2 ? 'active' : ''" @click="house_style=2">
              <div class="tags" data-preview="客栈">客栈</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==3 ? 'active' : ''" @click="house_style=3">
              <div class="tags" data-preview="别墅">别墅</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==4 ? 'active' : ''" @click="house_style=4">
              <div class="tags" data-preview="老洋房">老洋房</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==5 ? 'active' : ''" @click="house_style=5">
              <div class="tags" data-preview="海景房">海景房</div>
            </td>
            <td data-type="preview" class="td_c td_md" :[cls]="house_style==6 ? 'active' : ''" @click="house_style=6">
              <div class="tags" data-preview="公寓">公寓</div>
            </td>
            <input type="hidden" id="startPrice" ref="startPrice" value="0">
            <input type="hidden" id="endPrice" ref="endPrice" value="10000">
            <input type="hidden" id="lastPrice" ref="lastPrice" value="">
                <input id="keywordIpt" class="keyword_ipt" maxlength="15"
                       onkeyup="showKeywordBtn()" type="text"
                       placeholder="请输入商圈、景点、房间名等" v-model="key_word" value="">
                <div class="keyword_btn" id="keywordBtn"></div>
</template>
<script>
  import axios from "axios"
  export default {
    name: "search_main",
    data:function () {
      return{
        cls:"class",
        city:'',
        start_time:'',
        end_time:'',
        number_of_people:4,
        rent_style:-1,
        house_style:0,
        startPrice:'',
        endPrice:'',
        lastPrice:'',
        key_word:'',
        sss:null,
        rooms:[]
      }
    },
    methods:{
      aaa:function () {
        this.number_of_people=this.$refs.number_of_people.value
        this.endPrice=this.$refs.endPrice.value
        alert(this.number_of_people)
        alert(this.endPrice)
      },
      search:function () {
        let query= {
          "address": `%苏州%`,
          "endPrice": 10000,
          "end_time": "",
          "house_style": "%%",
          "key_word": "%%",
          "lastPrice": "",
          "number_of_people": "%%",
          "rent_style": "%%",
          "startPrice": "0",
          "start_time": "",
        };
        let that=this;
        axios.post('http://47.102.41.1:8080/user/search',query)
          .then(function (response) {
            console.log(response.data)
            that.rooms=response.data;
            that.$emit('rooms_axios',that.rooms)
          })
      }
    },
  }
</script>

