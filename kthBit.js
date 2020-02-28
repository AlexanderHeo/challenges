function killKthBit(n, k) {
  // var bin = n.toString(2)
  // //   console.log('bin:', bin)
  // //   console.log('parseInt bin, 2:', parseInt(bin, 2))
  // if (bin.charAt(bin.length - k) === '0') {
  //   return parseInt(bin, 2)
  // } else {
  //   //   console.log('sliced:', bin.slice(0, bin.length-k) + '0' + bin.slice(-k+1))
  //   return parseInt(bin.slice(0, bin.length - k) + '0' + bin.slice(-k + 1), 2)
  // }
  return (num.toString(2).charAt(num.toString(2).length - 3) === '1' ? num : parseInt(num.toString(2).slice(0, num.toString(2).length - 3) + '0' + num.toString(2).slice(-3 + 1), 2));
  return n & ~(1 << k - 1);
  return ('0b' + n.toString(2).split('').map((elm, i, arr) => i === arr.length - k ? 0 : elm).join('')) * 1
}
