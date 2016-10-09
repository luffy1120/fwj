// JavaScript Document
var oH = document.getElementById("hour");
var oM = document.getElementById("minutes");
var oS = document.getElementById("seconds");
var clock = setInterval(function (){
	var newDate = new Date();
	var hour = newDate.getHours();
	var minute = newDate.getMinutes();
	var second = newDate.getSeconds();
	
	var clockhour = hour % 12 * 30 + minute/2;
	
	oH.style.transform = "rotate(" + clockhour + "deg)";
	oM.style.transform = "rotate(" + minute * 6 + "deg)";
	oS.style.transform = "rotate(" + second * 6  + "deg)";
	});