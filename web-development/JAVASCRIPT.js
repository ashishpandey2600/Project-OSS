
// var typed = new Typed(c, {
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 30
//   });
  

function prev(){
		document.getElementById('slider-container').scrollLeft -=270;
}

function next()
{
		document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
	$(this).toggleClass('zoomed');
	$(".overlay").toggleClass('active');
})

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}