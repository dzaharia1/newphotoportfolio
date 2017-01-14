function hkGallerySetup () {
  let images = document.querySelectorAll('.hong-kong__gallery-section-image>img');
  blurImages();

  window.addEventListener('scroll', blurImages);

  function blurImages() {
    for (let image of images) {
      let imageRect = image.getBoundingClientRect();

      if (imageRect.top < (window.innerHeight) && imageRect.bottom > 0) {
        let imageCenter = imageRect.top + (image.offsetHeight / 2);
        let filterFactor = Math.abs((imageCenter - (window.innerHeight / 2)) / 100).toFixed(4);

        image.style.filter = `blur(${filterFactor}px)`;
        image.style.transform = `scale(${1 - filterFactor / 400})`;
      }
    }
  }
}

scripts.push(hkGallerySetup);
