
let arrow = document.getElementById('arrow-down')
function bounce () {
  arrow.className = 'bounce'
}
function scrollDown () {
  document.getElementById('start').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' })
}
