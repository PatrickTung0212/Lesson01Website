// Variable declarion
var startBtnElement = document.getElementById("StartGameBtn");
var nameTextElement = document.getElementById("NameText");
var weatherTextElement = document.getElementById("WeatherText");
var weatherImageElement = document.getElementById("WeatherImage");
var image = document.getElementById('myImage');

var inputName;
var inputWeather;

var checkNameInputSuccess;
var checkWeatherInputSuccess;


//Event
startBtnElement.addEventListener("click", mainGame);

//Key function
function mainGame() {

  Initial();
  GetPlayerInput();

  if (!checkNameInputSuccess) {
    return;
  }
  if(!checkWeatherInputSuccess){
    return;
  }
  DisplayInfo();

}


function Initial() {
  checkNameInputSuccess = false;
  checkWeatherInputSuccess = false;
}

function GetPlayerInput() {
  inputName = prompt("What is your name?");
  if (inputName === null || inputName === "") {
    alert("請輸入有效的值，不能為空。");
    return;
  }
  else if (/[^a-zA-Z]/.test(inputName)) {
    alert("請只輸入字母，不要包含特殊符號。");
    return;
  }
  else {
    checkNameInputSuccess = true;
  }


  inputWeather = prompt("What is your favourite weather?");
  if (inputWeather === null || inputWeather === "") {
    alert("請輸入有效的值，不能為空。");
    return;
  }
  else if (/[^a-zA-Z]/.test(inputWeather)) {
    alert("請只輸入字母，不要包含特殊符號。");
    return;
  }
  else{
    checkWeatherInputSuccess = true;
  }

}

function DisplayInfo() {
  nameTextElement.innerText = "" + inputName;
  weatherTextElement.innerText = "" + inputWeather;

  if (inputWeather.toLowerCase() == "sunny") {
    weatherImageElement.src = "./Assets/SunnyIcon.jpg";
  }
  else if (inputWeather.toLowerCase() == "rainy") {
    weatherImageElement.src = "./Assets/RainyIcon.jpg";
  }
  else if (inputWeather.toLowerCase() == "cloudy") {
    weatherImageElement.src = "./Assets/CloudyIcon.jpg";
  }
  else if (inputWeather.toLowerCase() == "windy") {
    weatherImageElement.src = "./Assets/WindyIcon.jpg";
  }
  else if (inputWeather == null) {

  }


}