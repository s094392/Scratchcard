const images = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020"]
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const timeButton = document.getElementById('time_button')
const foregroundImage = document.getElementById('foreground_image')
const timeClickEventListener = () => {
  window.open('http://www.jesusloves.tw/2603233674387283197522530.html', '_blank')
}
var result;
function hasResult(result) {
  const imageFront = `images/cards/${result}.jpg`
  const imageBackground = `images/cards/${result}-1.jpg`
  const card = document.getElementById('card')
  const content = document.getElementsByClassName('content')[0]
    card.style.top = foregroundImage.offsetHeight / 2.55 + "px"
    card.style.display = 'block'
    var isActive = false
    card.addEventListener('click', () => {
      if (isActive) {
        content.style.transform = 'rotateY( 0deg )'
        content.style.transition = 'transform 0.5s'
      } else {
        content.style.transform = 'rotateY( 180deg )'
        content.style.transition = 'transform 0.5s'
      }
      isActive = !isActive
    })
    const frontImg = document.getElementById('front_img')
    frontImg.src = imageFront
    const backImg = document.getElementById('back_img')
    backImg.src = imageBackground
    const cover = document.getElementById('cover')
    cover.style.display = 'block'
    cover.style.height = document.documentElement.scrollHeight
    timeButton.removeEventListener('click', timeClickEventListener)
    timeButton.src = "images/share.png"
    timeButton.addEventListener('click', () => {
      window.location = "https://social-plugins.line.me/lineit/share?url=" + window.location.href.split("?")[0] + "?card=" + result

    })
}
if (urlParams.has('card')) {
  result = urlParams.get('card');
  foregroundImage.onload = () => {
    hasResult(result)
  }
} else {
  result = images[Math.floor(Math.random() * images.length)];
  const imageFront = `images/cards/${result}.jpg`
  
  const scContainer = document.getElementById('js--sc--container')
  const scWrapper = document.getElementsByClassName('sc__wrapper')[0]
  foregroundImage.onload = () => {
  
    const sc = new ScratchCard('#js--sc--container', {
      scratchType: SCRATCH_TYPE.LINE,
      containerWidth: scContainer.offsetWidth,
      containerHeight: scWrapper.style.marginTop = foregroundImage.offsetHeight / 2.4,
      imageForwardSrc: 'images/scratchcard.png',
      imageBackgroundSrc: imageFront,
      htmlBackground: '',
      clearZoneRadius: scContainer.offsetWidth / 15,
      nPoints: 0,
      pointSize: 0,
      callback: function () {
        hasResult(result)
      }
    })
  
    sc.init().then(() => {
      sc.canvas.addEventListener('scratch.move', () => {
      })
    }).catch((error) => {
      alert(error.message);
    });
  
    scWrapper.style.marginTop = foregroundImage.offsetHeight / 2.6
    scWrapper.style.marginLeft = (foregroundImage.offsetWidth - scWrapper.offsetWidth) / 2
  
    timeButton.addEventListener('click', timeClickEventListener)
  }
}
const againButton = document.getElementById('again_button')
  againButton.addEventListener('click', () => {
    window.location = window.location.href.split("?")[0];
  })

const shardButton = document.getElementById('share_button')
shardButton.addEventListener('click', () => {
  window.location = "https://social-plugins.line.me/lineit/share?url=" + window.location.href.split("?")[0] 
})
