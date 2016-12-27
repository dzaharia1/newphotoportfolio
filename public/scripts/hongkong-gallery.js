function hkGallerySetup () {
  let gallerySections = document.querySelectorAll('.hong-kong__gallery-section');

  for (section of gallerySections) {
    let text = section.querySelector('.hong-kong__gallery-section-text');
    var textContent = text.innerText;
    text.innerHTML = `<span class="hong-kong__gallery-section-text--first-letter">${textContent.substr(0,1)}</span>${textContent.substr(1)}`;
  }

  window.addEventListener('scroll', scrollFocus);

  function scrollFocus () {

  }
}

scripts.push(hkGallerySetup);
