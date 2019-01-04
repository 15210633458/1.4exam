require(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/api', true)
    xhr.send()
    xhr.onload = function(res) {
        if (res.target.status == 200) {
            console.log(res.target.response)
        }
    }
})