
let x = document.getElementsByClassName('post-content')[0].innerText
x = x.split(' ')
let meta
let test = []
let result = ''
let metaData
meta = x.slice()

meta.forEach(current => {
  for (let i = 0; i < current.length; i++) {
    if (current[i] === '.' && test.length === 0) {
      let stopIndex = meta.indexOf(current)
      test = meta.slice(0, stopIndex + 1)
    }
  }
})
test.forEach(current => {
  result += current + ' '
  metaData = result
})
exports.metaData = function value () {
  console.log(metaData)
  return metaData
}
