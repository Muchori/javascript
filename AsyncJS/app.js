document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create XHR Object
  const xhr = new XMLHttpRequest();

  //OPEN using the gest request
  xhr.open("GET", "data.txt", true);

  //load when ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    }
  };

  xhr.onerror = function () {
    console.log("Error");
  };

  //send data
  xhr.send();
}
