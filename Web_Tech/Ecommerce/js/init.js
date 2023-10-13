$(function() {
  loadScript('js/categories.js',categoriesSetup);
  loadScript('js/product.js',productSetup);
})

var categoriesSetup=function(){
    getAllcatergories();
}
var productSetup=function(){
    console.log("productHere")
}
function loadScript(url, callback) {
  var head = document.head
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  script.onreadystatechange =callback
  script.onload=callback
  head.appendChild(script)
}