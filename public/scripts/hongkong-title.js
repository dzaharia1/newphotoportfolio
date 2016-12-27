function createFocusRing () {
  console.log('creating focus ring');

  let backImage = document.querySelector('.hong-kong__intro-card-background-image');
  let title = document.querySelector('.hong-kong__intro-card-container');

  window.addEventListener('mousemove', (event) => {
    let mouseX = ((event.clientX / window.innerWidth) * 100).toFixed(0);
    focusRing(mouseX, backImage, title);
  });

  function focusRing(mouseX, backImage, title) {
    let titleBlur = (Math.abs(50 - mouseX)) / 10;
    let backImageBlur = ((-.0256 * Math.pow(mouseX, 2)) + (2.56 * mouseX) - 48) / 5;

    title.style.filter = `blur(${titleBlur}px)`;
    backImage.style.filter =  `blur(${backImageBlur}px)`;
  }
}

scripts.push(createFocusRing);
