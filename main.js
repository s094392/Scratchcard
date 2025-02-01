const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: 'images/scratchcard.jpg',
  imageBackgroundSrc: 'images/background.jpg',
  htmlBackground: '',
  clearZoneRadius: 20,
  nPoints: 0,
  pointSize: 0,
  callback: function () {
    alert('Now the window will reload !')
  }
})

sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
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
