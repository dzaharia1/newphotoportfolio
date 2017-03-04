function createFocusRing () {
  let hongKongContainer = document.querySelector('.location-container--hong-kong');
  let backImage = document.querySelector('.hong-kong__intro-card-background-image');
  let title = document.querySelector('.hong-kong__intro-card-container');

  let focusRing = (mouseX, mouseY, container) => {
    let containerYCenter = (container.getBoundingClientRect().bottom + container.getBoundingClientRect().top) / 2;
    let containerXCenter = (container.getBoundingClientRect().right + container.getBoundingClientRect().left) / 2;
    let circleRadius = (container.getBoundingClientRect().right - container.getBoundingClientRect().left) / 2;
    let mousePercentage = (Math.sqrt(
      Math.pow(mouseX - containerXCenter, 2) + Math.pow(mouseY - containerYCenter, 2)
    ) / circleRadius * 100).toFixed(0);

    let backImageBlur = (Math.abs(50 - mousePercentage)) / 10;
    let titleBlur = (mousePercentage - 20) / 10;
    title.style.filter = `blur(${titleBlur}px)`;
    backImage.style.filter = `blur(${backImageBlur}px)`;
    document.querySelector('.location-container--hong-kong').style.transform = `scale(${1.025 - (mousePercentage / 4000)})`;
  }

  hongKongContainer.addEventListener('mousemove', (event) => {
    if (window.innerWidth > 700) {
      focusRing(event.clientX, event.clientY + document.body.scrollTop, hongKongContainer);
    }
  });

  window.addEventListener('resize', (event) => {
    if (window.innerWidth < 700) {
      backImage.style.filter = '';
      title.style.filter = '';
    }
  });

  if (window.innerWidth > 700) {
    focusRing(window.innerWidth / 2, window.innerHeight / 2, hongKongContainer);
  }
}

scripts.push(createFocusRing);
