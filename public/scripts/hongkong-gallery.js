function hkGallerySetup () {
  let images = document.querySelectorAll('.hong-kong__gallery-section-image>img');

  // create stick-up caps in each section's paragraph
  for (section of document.querySelectorAll('.hong-kong__gallery-section')) {
    let text = section.querySelector('.hong-kong__gallery-section-text');
    var textContent = text.innerText;
    text.innerHTML = `<span class="hong-kong__gallery-section-text--stick-up-cap">${textContent.substr(0,1)}</span>${textContent.substr(1)}`;
  }

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
