function cars(wheels, bodies, figures) {
  debugger;
  var car = Math.floor(wheels / 4)
  console.log(car)
  console.log(bodies, figures)
  if (car <= bodies && car <= figures / 2) {
    return car
  } return 0
}
