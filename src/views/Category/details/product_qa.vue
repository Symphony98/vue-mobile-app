<template>
  <div class="content">
    <table>
      <caption class="head">
        常见问题
      </caption>
      <tr>
        <td>1</td>
        <td>
          <div>此电器售出后可以退货吗？</div>
          <div>满足7天无理由退货，但是需要用户承担费用。</div>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>
          <div>订单金额过大，无法完成支付？</div>
          <div>
            如您支付时因金额较大无法完成支付，是因为您订单金额超过网上银行每日支付限额，您可尝试以下方式解决您的问题：
            1、您可更换无限额或更高限额银行卡完成支付。
            2、您可在所在银行网站-网上银行自助申请，或联系银行客服调整网银每日支付限额。
            3、您可选择分次转入支付宝-余额宝，支付订单时选择支付宝支付。
          </div>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>
          <div>电子发票、纸质发票开具方式</div>
          <div>
            增值税普通发票：下单后填写开票信息以及电子发票收取邮箱，发票将会在货物签收一周后统一发送到您的邮箱。
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.content {
  background-color: blanchedalmond;
}
table {
  height: 527px;
  font-size: 14px;
  padding-left: 30px;
}
table .head {
  display: inline-block;
  width: 100px;
  color: rgba(80, 80, 80, 1);
  font-size: 18px;
}

table tr td:nth-child(1) {
  display: inline-block;
  padding: 0;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* color: rgb(255, 255, 255);
  background-color: red; */
}

table tr td:nth-child(2) {
  display: inline-block;
  padding: 0;
  width: 280px !important;
}
</style>