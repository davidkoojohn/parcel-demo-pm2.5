$(function () {
  var $loading = $('.loading')
  $.ajax({
    url: 'http://weather.gtimg.cn/aqi/cityrank.json',
    dataType: 'jsonp',
    jsonpCallback: 'cityrank',
    success: function (res) {
      $.each(res, function (index, item) {
        var itemHtml = '<section class="item">'+
          '<span class="rank">' + (index + 1) + '</span>'+
          '<span class="pm-25">'+ item.pm2_5 +'</span>'+
          '<span class="area">' + item.area + '</span>'+
          '<span class="quality">' + item.quality + '</span>' +
          '</section>'
        $(itemHtml).appendTo($('.list'))
      })
    },
    error: function (error) {
      $('<div class="error">数据加载失败，请刷新重试！！！</div>').appendTo($('.list'))
    },
    complete: function () {
      $loading.hide()
    }
  })

})
