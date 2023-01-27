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
        // $1: first, $2: link, $4: name, $5: last
        let regexp = new RegExp('(.*)\\[\\[([^|]*)(\\|(.*))?\\]\\](.*)', 'g');
        if (regexp.test(text)) {
          element.parentNode.innerHTML = `${RegExp.$1}<a href="${RegExp.$2}">${(RegExp.$4.length === 0) ? RegExp.$2 : RegExp.$4}</a>${RegExp.$5}`;
        }
      }
  }
};

(function() {
  convertObsidianLink(document.querySelector("article.article"));
})()
