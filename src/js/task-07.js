const refs = {
  reloadInput: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

let size = refs.reloadInput.value;
let fontSize = refs.textEl.style.fontSize;
console.dir(size);

refs.reloadInput.addEventListener('input', resizeInputSizeIn);
refs.textEl.addEventListener('input', resizeInputSizeOut);
console.log(refs.textEl);

function resizeInputSizeIn(e) {
  size += 1;
  refs.textEl.style.cssText = `fontSize: ${size}`;
}

function resizeInputSizeOut(e) {
  fontSize -= 1;
  refs.textEl.style.cssText = `fontSize: ${fontSize}`;
}
