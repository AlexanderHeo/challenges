function addTo(n) {
  if (n === 0) return 0;
  return n + addTo(n - 1);
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function power(n, expo) {
  if (expo === 0) return 1;
  if (expo === 1) return n;
  return n * power(n, expo - 1);
}

function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function sumArray(arr) {
  return _sumArray(arr, arr.length - 1);
}
function _sumArray(arr, index) {
  if (index === 0) return arr[0];
  return arr[index] + _sumArray(arr, index - 1);
}
