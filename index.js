function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div')
}

function deepestChild() {
   return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  let rank_lists = document.querySelectorAll("ul.ranked-list")
  for (let i = 0; i < rank_lists.length; i++) {
    let kids = rank_lists[i].children
    for (let j = 0; j < kids.length; j++) {
      let num = Number(kids[j].innerHTML)
      kids[j].innerHTML = num + n
    }
  }

}
