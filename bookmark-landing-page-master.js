'use strict'; 

$(window).resize(function(){
	location.reload();
});


const data ={
	check:'',
	timer:'',
	timeOutVal:3000,
	regex : /^\w+@\w+\.{1}(com|net){1}$/,
	email: document.getElementById('email'),
	subscribe: document.getElementById('contact'),
	//feedback: document.querySelector('.invalid-feedback'),
	//erricon:document.getElementById('error-icon'),
	errors: document.getElementById('errors'),
}


function addListener(){
	[...document.querySelectorAll('.page-tab')].forEach(function(tab) {
		tab.addEventListener('click', function() {
			tab.setAttribute('aria-current','page');
			tab.toggleAttribute('aria-selected');
		});
	});
	[...document.querySelectorAll('.accordion-trigger')].forEach(function(btn) {
		btn.addEventListener('click', function() {
			//const exp= btn.getAttribute('aria-expanded');
			//first click aria-expanded is false and btn has focus
			/*if( exp) {
				console.log('1');
			    btn.blur();
			} else if(btn.matches(':focus') && !exp) {
				console.log('2');
				btn.setAttribute('aria-expanded',true);
			    btn.blur();
			}*/
			const exp= btn.getAttribute('aria-expanded');
			if(exp==='true'){
				btn.setAttribute('aria-expanded','false');
			}else{
				btn.setAttribute('aria-expanded','true');
			}
		});
	});
}

$(window).on('load',function(){
    addListener();
	const navbar= document.getElementById('navbarCollapse');

	$("#menubutton").on("click", function(){
        //menu is collapsed/closed, toggle open/close icon.
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('show');
		$('#nav').toggleClass('custom-nav');
		document.querySelector('#navbarCollapse').classList.toggle("hidden");
		navbar.toggleAttribute('aria-expanded');
    });
	
	$(data.subscribe).on('click',function(){
		dataFailed();
	});
    //User has pressed the keyboard ,and entered some data in the input field
    data.email.addEventListener('keyup',keyUp);
    data.email.addEventListener('keypress',keyPress);

    data.subscribe.addEventListener('click',(e)=>{
        e.preventDefault();
		keyPress(e);
	})
	
});
