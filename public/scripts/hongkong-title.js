function createFocusRing () {
  let hongKongContainer = document.querySelector('.location-container--hong-kong');

  window.addEventListener('mousemove', (event) => {
    let mouseX = ((event.clientX / window.innerWidth) * 100).toFixed(0);
    focusRing(mouseX, hongKongContainer);
  });

  function focusRing(mouseX, container) {
    let backImage = container.querySelector('.hong-kong__intro-card-background-image');
    let title = container.querySelector('.hong-kong__intro-card-container');
    let titleBlur = (Math.abs(50 - mouseX)) / 10;
    let backImageBlur = (Math.abs(25 - mouseX)) / 10;
    // let backImageBlur = ((-.0256 * Math.pow(mouseX, 2)) + (2.56 * mouseX) - 48) / 5;

    title.style.filter = `blur(${titleBlur}px)`;
    backImage.style.filter =  `blur(${backImageBlur}px)`;
    document.querySelector('.location-container--hong-kong').style.transform = `scale(${1.025 - (mouseX / 4000)})`;

  }
}

scripts.push(createFocusRing);
