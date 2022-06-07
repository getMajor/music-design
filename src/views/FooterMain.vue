<template>
  <div class="footer-main">
  </div>
</template>

<script>
  export default {
    name: "FooterMain"
  }
</script>

<style scoped lang="less">
.footer-main{
  width: 100%;
  background-color: #161e27;
  padding-top: 20px;
  .footer-content{
    border-bottom: 1px solid #797979;
    p:first-child{
      color: #fff;
      padding: 30px 0 20px 20px;
      border-left: 5px solid #fa2800;
    }
    .last-p{
      padding: 10px;
      color: #a9a9a9;
    }
    .link{
      padding: 20px 0 20px 20px;
      i{
        font-size: 18px;
        border: 10px solid #232a31;
        border-radius: 50%;
        margin-left: 10px;
        color: #e7e7e7;
      }
    }
  }
  .footer-copy{
    padding: 20px 0;
    color: #6d7685;
  }
}
</style>
