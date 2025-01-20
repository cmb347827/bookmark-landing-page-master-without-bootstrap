
const validateEmail=(email)=> (data.regex).test(email.value);

const dataPassed=()=>{
	//$(data.feedback).css({'display':'none'});
	if($(data.errors).hasClass('hidden')===false){
		$(data.errors).toggleClass('hidden');
	 }
	data.subscribe.setAttribute('aria-disabled','false');
	data.subscribe.disabled = false;
}
const dataFailed=()=>{
    //$(data.feedback).css('display','block');
	if($(data.errors).hasClass('hidden')){
		$(data.errors).toggleClass('hidden');
	 }
	//data.subscribe.setAttribute('aria-disabled','true');     //the design showed a abled button, also on error so disable these two lines.
	//data.subscribe.setAttribute('disabled','');
}

const keyUp = (event)=>{
	//The user may be done typing the email address , check to see if it's valid before enabling submit button
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
	data.timer = window.setTimeout(() => {
		data.check = validateEmail(data.email);
		//on check is true(valid email), enablebutton.
		(data.check) ? dataPassed() : dataFailed();
	}, data.timeOutVal);
}
const keyPress =(event)=>{
	//The user may accidently delete part of the email after typing it, prevent submit even after button enabled
	window.clearTimeout(data.timer); // prevent errant multiple timeouts from being generated
	data.check = validateEmail(data.email);
	if(data.check){
		dataPassed();
	}
}