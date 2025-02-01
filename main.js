const scContainer = document.getElementById('js--sc--container')
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: scContainer.offsetHeight,
  imageForwardSrc: 'images/scratchcard.jpg',
  imageBackgroundSrc: 'images/pusheen.jpg',
  htmlBackground: '',
  clearZoneRadius: scContainer.offsetWidth / 15,
  nPoints: 0,
  pointSize: 0,
  callback: function () {
  }
})

sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
  })
}).catch((error) => {
  alert(error.message);
});

const shardButton = document.getElementById('share_button')
shardButton.addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: '新莊靈糧堂春節經文刮刮卡',
      text: '新莊靈糧堂春節經文刮刮卡',
      url: document.URL,
    })
      .then(() => console.log('成功！'))
      .catch((error) => console.log('發生錯誤', error));
  }
})

const facebookButton = document.getElementById('facebook_button')
facebookButton.addEventListener('click', () => {
  window.open('https://www.facebook.com/%E6%96%B0%E8%8E%8A%E9%9D%88%E7%B3%A7%E5%A0%82LLC-Hsinchuang-237835819608260/', '_blank')
})

const timeButton = document.getElementById('time_button')
timeButton.addEventListener('click', () => {
  window.open('http://www.jesusloves.tw/2603233674387283197522530.html', '_blank')
})
