/*
given a number, return a google search with as many o's as number
*/

function googlify(n) {
  return (n < 2 ? 'invalid' : `G${'o'.repeat(n)}gle`)
}
