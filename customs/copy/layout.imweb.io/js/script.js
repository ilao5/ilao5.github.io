var iconList = document.querySelector('.icon--list');
iconList.addEventListener('click', function() {
  console.log(this.parentNode);
  this.parentNode.classList.toggle('nav--show');
})

hljs.initHighlightingOnLoad();