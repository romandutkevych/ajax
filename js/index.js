document.getElementById('page-loaded').innerHTML =
  (new Date()).toLocaleTimeString();
  
document.getElementsByTagName('button')[0].addEventListener('click', getData);

function getData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var clientData = JSON.parse(xhr.responseText);
            document.getElementById('client-name').innerHTML = clientData.name;
            document.getElementById('client-address').innerHTML = clientData.address;
        }
    }
    xhr.open('GET', 'client-data.json', true);
    xhr.send();
}
