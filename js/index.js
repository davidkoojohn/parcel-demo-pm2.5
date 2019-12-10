import jsonp from 'jsonp'

jsonp('https://weather.gtimg.cn/aqi/cityrank.json', {
  name: 'cityrank'
}, (err, data) => {
  if (data) {
    data.map((item, index) => {
      const itemHtml = `<section class="item">
                        <span class="rank">${index + 1}</span>
                        <span class="pm-25">${item.pm2_5}</span>
                        <span class="area">${item.area}</span>
                        <span class="quality">${item.quality}</span>
                      </section>`
      document.querySelector('.list').innerHTML += itemHtml
    })
  } else {
    document.querySelector('.list').innerHTML = '<div class="error">数据加载失败，请刷新重试！！！</div>'
  }
  document.querySelector('.loading').style.display = 'none'
})
