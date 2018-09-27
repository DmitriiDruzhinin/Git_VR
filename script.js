window.addEventListener('DOMContentLoaded', function() {
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
var name, age, logic;

function start() {
	logic = false;

name = prompt("Введите ваше имя:");
	while ( !isNaN(name) || name == '' || name == null){
	 		name = prompt("Повторите ввод вашего имени:");
	}
	checkAge();
}
function checkAge() {	
	age = prompt(name + " введите ваш возраст:", '');
		while (isNaN(age) || age == '' || age == null){
		age = prompt(name + " повторите ввод вашего возраста:", '');
	}
	var subscription = confirm("Подписаны ли вы на нашу рассылку?");
	if ( !subscription ) {
		alert("Вы не подписаны на нашурассылку, доступ на страницу закрыт");
		start();
	}
	if ( age < 18 ) {
		alert("Вам менее 18 лет, доступ на страницу закрыт");
		start();
	}
}

function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}

function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);


start();

});