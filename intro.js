gg.addEventListener('click',function (){
	alert('My name is Gurkamal Singh Dhillon');

});
ss.addEventListener('click',function(){
	console.log("Light turned on");
	document.getElementById("hh").src="lightbulb_on.webp";
    document.getElementById("ss").style.display="none";
    document.getElementById("kk").style.display="initial";
    document.body.classList.toggle('rr');
});
kk.addEventListener('click',function(){
	document.getElementById("hh").src="lightbulb_off.webp";
	document.getElementById("ss").style.display="initial";
	document.getElementById("kk").style.display="none";
	document.body.classList.toggle('rr');


});