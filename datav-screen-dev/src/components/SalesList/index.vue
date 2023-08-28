<template>
  <div class="sales-list">
    <base-scroll-list
      :config="config"
    />
  </div>
</template>

<script>
  import { ref, onMounted, watch } from 'vue'

  export default {
    name: 'SalesList',
    props: {
      data: Array
    },
    setup(props) {
      const config = ref({})

      const update = () => {
        const data = []
        const aligns = []
        const headerIndexData = []
        // 数据处理逻辑
        for (let i = 0; i < props.data.length; i++) {
          data[i] = []
          if (i % 2 === 0) {
            headerIndexData[i] = `
<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
  <div style="width:15px;height:15px;background:rgb(72,122,72);border-radius:50%;border:1px solid #fff;"/>
</div>`
          } else {
            headerIndexData[i] = `
<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:rgb(40,40,40)">
  <div style="width:15px;height:15px;background:rgb(38,88,104);border-radius:50%;border:1px solid #fff;"/>
</div>`
          }
          for (let j = 0; j < 5; j++) {
            aligns.push('center')
            let text = ''
            switch (j) {
              case 0:
                text = props.data[i].order
                break
              case 1:
                text = props.data[i].shop
                break
              case 2:
                text = props.data[i].rider
                break
              case 3:
                text = props.data[i].newShop
                break
              case 4:
                text = props.data[i].avgOrder
                break
              default:
            }
            if (j === 1 || j === 3) {
              data[i].push(`<div style="color:rgb(178,209,126)">${text}</div>`)
            } else {
              data[i].push(`<div>${text}</div>`)
            }
          }
        }

        config.value = {
          headerData: ['城市订单量', '店铺数', '接单骑手人数', '新店铺数量', '人均订单量'], // 表头
          headerHeight: 55, // 表头的高度
          headerFontSize: 24, // 表头的字号
          headerColor: '#fff', // 表头的文本颜色
          headerBg: 'rgb(80,80,80)', // 表头的背景色
          headerIndexContent: '', // 表头序号列的内容
          headerIndex: true,
          headerIndexData,
          rowNum: 10,
          rowBg: ['rgb(40,40,40)', 'rgb(55,55,55)'],
          rowFontSize: 24,
          rowColor: '#fff',
          data,
          aligns
        }
      }

      onMounted(() => {
        update()
      })

      watch(() => props.data, () => {
        update()
      })

      return {
        config
      }
    }
  }
</script>

<style scoped lang="scss">
.sales-list {
  width: 100%;
  height: 100%;
}
</style>
