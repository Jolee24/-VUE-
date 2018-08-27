var express = require('express')
var router = express.Router()
var HomeCarousel = require('./models/home_carousel')
var path = require('path')

var lunboimg1 = {
  url: path.join(__dirname, 'apple.png'),
  name: '苹果'
}
var lunboimg2 = {
  url: path.join(__dirname, 'huawei.png'),
  name: '华为'
}
var lunboimg3 = {
  url: path.join(__dirname, 'xiaomi.png'),
  name: '小米'
}

router.get('/homelunbo', function (req, res) {
  // res.send('返回数据成功')
  // 向数据库添加数据
  // new HomeCarousel(lunboimg3).save(function (err, homeCarousel) {
  //   if (err) {
  //     return res.status(500).json({
  //       err_code: 1,
  //       message: "服务器错误"
  //     })
  //   }
  //   console.log(homeCarousel)
  // })

  // 返回数据测试
  // HomeCarousel.find({}, function(err, result) {
  //   res.send(result[0].url)
  // })

  //返回状态
  HomeCarousel.find({}, function(err, data) {
    if (err) {
      return res.status(500).json({
        err_code: 1,
        message: '服务器错误'
      })
    }
    console.log("data" + data)
    res.send(data)
  })
})

module.exports = router