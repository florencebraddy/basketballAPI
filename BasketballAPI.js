function getRequest() {
  var url = "https://www.balldontlie.io/api/v1/players?search=";
  var playerName = document.getElementById("myText").value;
  var request = new XMLHttpRequest();

  //Open a new connection, using the GET request on the URL endpoint

  request.open("GET", url + playerName, true);
  request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      var firstName = data.data[0].first_name;
      var lastName = data.data[0].last_name;
      var position = data.data[0].position;
      var teamName = data.data[0].team.full_name;
      var division = data.data[0].team.division;

      var myArr = JSON.parse(this.responseText);

      document.getElementById("player-name").innerHTML =
        firstName + " " + lastName;
      document.getElementById("team-name").innerHTML = teamName;
      document.getElementById("division").innerHTML = division;
      document.getElementById("position").innerHTML = position;
    } else {
      console.log("error");
    }
    console.log(position);
  };
  // Send request
  request.send();
}
