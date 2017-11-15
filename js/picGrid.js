function setId () {
  let parentCol1 = document.getElementById('col1')
  let parentCol2 = document.getElementById('col2')
  let nodelist = parentCol1.getElementsByTagName('img')
  let nodelist2 = parentCol2.getElementsByTagName('img')
  for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].setAttribute('id', 'fade-in-top')
    document.getElementsByClassName('column')[0].setAttribute('style', 'opacity:1')
  }
  for (let k = 0; k < nodelist2.length; k++) {
    nodelist2[k].setAttribute('id', 'fade-in-right')
    document.getElementsByClassName('column')[1].setAttribute('style', 'opacity:1')
  }
}
window.onscroll = function () { myFunction() }

function myFunction () {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    setId()
  }
}
