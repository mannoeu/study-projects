function toggle() {
  var blur = document.querySelector('#blur');
  blur.classList.toggle('active')

  var popup = document.querySelector('#popup');
  popup.classList.toggle('active');
}

document.querySelector('#btn').addEventListener('click', toggle);
document.querySelector('#btn-close').addEventListener('click', toggle);