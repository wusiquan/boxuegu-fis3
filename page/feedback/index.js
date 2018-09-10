let $ = require('jquery')
let add = require('/common/js/add')

setTimeout(function() {
  require.async('/widgets/hello/hello', function(abc) {
    $('body').append(abc)
  })
}, 1000)