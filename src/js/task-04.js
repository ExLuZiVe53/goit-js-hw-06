// const containerValue = document.querySelector('#counter');

// const btnDown = document.querySelector('button[data-action="decrement"]');
// const btnUp = document.querySelector('button[data-action="increment"]');

// btnDown.addEventListener('click', () => {
//   console.log('Button Down was clicked');
// });

// btnUp.addEventListener('click', () => {
//   console.log('Button Up was clicked');
// });

// console.dir(btnDown);

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;
  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
  refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
  refs.value = refs.container.querySelector('#value');

  console.log(refs);
  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents => this', this);
    this.decrement();
    this.updateValueUI();
  });

  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents => this', this);
    this.increment();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.value.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value -= this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value += this._step;
};

new CounterPlugin({ rootSelector: '#counter', step: 1 });
