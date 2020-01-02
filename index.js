var myPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/guiireal');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(JSON.parse(xhr.responseText));
      }
    }

  })
};

myPromise().then(response => console.log(response));