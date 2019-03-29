<template>
  <div class="container con">
  <h1>
    <span>R</span>ainbow
    <span>D</span>iary
    </h1>

  <div class="main-content-agile">
    <div class="sub-main-w3">
      <form action="#" method="post">
        <h2> Upload product information</h2>
        <div class="form-style-agile">
          <input placeholder="Product Name" name="Name" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Brand" name="Brand" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Effect" name="Effect" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Capacity" name="Capacity" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Category" name="Category" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Component" name="Component" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Overdue" name="Overdue" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Price" name="Price" type="text" required="">
        </div>
        <div class="form-style-agile">
          <input placeholder="Security" name="Security" type="text" required="">
        </div>

        <div class="form-style-agile">
          <textarea name="Message" placeholder="Product description." ></textarea>
        </div>
        <div class="form-style-agile">
          <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="0" >中性皮肤
          <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="1" >干性皮肤
          <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="2" >油性皮肤
          <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="3" >混合性皮肤
          <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="4" >敏感性皮肤
        </div>
        <input type="submit" value="Information upload">
      </form>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Uploading"
    }
</script>

<style scoped>
    .con{
      margin-top: 80px;
    }
</style>
