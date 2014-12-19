document.addEventListener('DOMContentLoaded', function() {

  var xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var list = JSON.parse(xhr.responseText)
      for (var i = list.length - 1; i > -1; i--) {
        var elem = document.createElement('img')
        elem.setAttribute('src', 'pictures/' + list[i])
        document.body.appendChild(elem)
      }
    }
  }
  xhr.open('GET', 'list.json')
  xhr.send()

})
