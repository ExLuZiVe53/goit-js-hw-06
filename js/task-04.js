const CounterPlugin = function ({
  rootSelector,
  counterValue = 0,
  step = 1,
} = {}) {
  this._value = counterValue;
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

// const newIncr = document.querySelector('button[data-action = "decrement"]');
// const newDecr = document.querySelector('button[data-action = "increment"]');
// const value = document.querySelector('#value');
// console.log(value);
// let counterValue = 0;

// newDecr.addEventListener = ('click', decrement);
// newIncr.addEventListener = ('click', increment);

// function decrement(e) {
//   counterValue -= 1;
//   value.textContent = counterValue;
// }

// function increment(e) {
//   counterValue += 1;
//   value.textContent = counterValue;
// }
