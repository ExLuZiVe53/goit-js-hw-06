const CounterInput = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);
};
CounterInput.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(#counter);
};
