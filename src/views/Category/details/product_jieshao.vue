<template>
  <div class="content">
    <table rules="rows">
      <tr>
        <td>商品名称</td>
        <td>海尔BCD</td>
      </tr>
      <tr>
        <td>是否上门安装</td>
        <td>是</td>
      </tr>
      <tr>
        <td>商品毛重</td>
        <td>102.2kg</td>
      </tr>
      <tr>
        <td>商品尺寸</td>
        <td>高170.1-180cm,宽80-85cm,深65-70cm</td>
      </tr>
      <tr>
        <td>总容积</td>
        <td>401-500升</td>
      </tr>
      <tr>
        <td>门款式</td>
        <td>对开门</td>
      </tr>
      <tr>
        <td>发货提醒</td>
        <td>
          部分乡镇及偏远地区，物流无法送达，下单前请先咨询客服。如收货地址不在配送范围，发货前客服将致电您取消订单，感谢您的配合。
        </td>
      </tr>
      <tr>
        <td>特价提醒</td>
        <td>
          1、周六日暂无法发货，周六日订单延至周一发货，请知悉；
          2、本产品属贵重商品，收到商品后请务必检查确认没有问题再签收，商品破损请直接拒收并反馈客服；
          3、退换货需保证商品、配件、包装等完好，不影响二次销售！（有任何退换货可能务必保存好包装，感谢您的配合）
        </td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
.content {
  background-color: blanchedalmond;
  width: 100%;
  height: 502px;
}

.content table{
  height: 100%;
  border-collapse:collapse;
  border:1px dashed #ccc
}

.content table tr td:nth-child(1){
  padding-left: 10px ;
  width: 100px;
}

.content table tr td:nth-child(2){
  padding-right: 10px ;
}
</style>