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


      var pics = document.querySelectorAll('img')
      for (var i = 0; i < pics.length; i++) {
        pics[i].onclick = function(e) {
          location = e.target.src
        }
      }

    }
  }
  xhr.open('GET', 'list.json')
  xhr.send()
})
