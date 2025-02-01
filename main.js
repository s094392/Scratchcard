const scContainer = document.getElementById('js--sc--container')
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: scContainer.offsetHeight,
  imageForwardSrc: 'images/scratchcard.jpg',
  imageBackgroundSrc: 'images/background.jpg',
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

const shardButton = document.getElementById('shard_button')
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
