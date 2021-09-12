function convertObsidianLink(element) {
  // Node.ELEMENT_NODE: 1
  // Node.ATTRIBUTE_NODE: 2
  // Node.TEXT_NODE: 3
  if (element.childNodes.length) {
    // Node.ELEMENT_NODE 인 경우만 들어 오겠지...
    //console.log(element.nodeType);
    element.childNodes.forEach(node => convertObsidianLink(node));
  } else {
      const text = element.textContent;
      if (text) {
        let regexp = new RegExp('(.*)\\[\\[(.*)\\]\\](.*)', 'g');
        if (regexp.test(text)) {
          element.parentNode.innerHTML = `<a href="${RegExp.$2}">${(RegExp.$1.length === 0) ? RegExp.$2 : RegExp.$1}</a>`;
          //console.log(`<a href="${RegExp.$2}">${(RegExp.$1.length === 0) ? RegExp.$2 : RegExp.$1}</a>`);
        }
      }
  }
};

(function() {
  convertObsidianLink(document.querySelector("article.article"));
})()