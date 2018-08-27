<template>
  <div>
    <p>{{ newData }}</p>
    <!-- 这是轮播团区域 -->
    <mt-swipe :auto="4000">
      
      <mt-swipe-item v-for="item in lunbotuList" :key="item._id">
        <img :src="item.url" alt="">
      </mt-swipe-item>
      
    </mt-swipe>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newData: {},
        lunbotuList: []
      }
    },
    created() {
      this.getLunbotu()
    },
    methods: {
      getLunbotu() {
        this.$http.get('http://localhost:3024/homelunbo', {
          params: {
            methods: 'get'
          }
        })
        .then(response => {
          console.log("response==" +  JSON.stringify(response))
          this.lunbotuList = response
          this.newData = response
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe {
    height: 200px;

    .mint-swipe-item {
      // &:nth-child(1) {
      //   background-color: red;
      // }
      // &:nth-child(2) {
      //   background-color: blue;
      // }
      // &:nth-child(3) {
      //   background-color: yellow;
      // }
    }
  }

  p {
    color: red;
  }
</style>

