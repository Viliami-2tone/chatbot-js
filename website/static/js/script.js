// array to track the chat messages
const chatLogs = [];

/**
 *
 * FINISH THIS FUNCTION!
 */

//Values to store, personal info + time + chosen menu options.

let name;
let age;
let time;
let breakfastYet;
let nuts;
let fruit;
let nofruit;
let other;
let cheese;
let toast;
let nonuts;
let noCheese;
let noToast;
let hasNutsAndFruit;
let noNutsAndNoCheese;
let noNutsAndNoCheeseAndNoFruit;
let fuckfuckfuckfuck;


// Arrays of things that could be yes or no

const thingsThatAreYes = [
	"yup",
	"yes",
	"okay",
	"ok",
	"cluck",
	"affirmative",
	"yep",
];
const thingsThatAreNo = ["nah", "no", "yuck", "gross", "na", "negative"];

// Empty array to push replies into to summarise at the end

const summarise = [];

// Stored menu strings to return in the function to user

let deezNuts = `
<ul>
<li>Almonds</li>
<li>Cashews</li>
<li>Walnuts</li>
<li>Peanuts</li>
<li>Pistachios</li>
</ul>

Remember they're high in protein in fibre but also fat, so make sure you keep it to a handful!`;

let deezFruit = `Fruit is easy to eat while walking! Try a 

	<ul>
		<li>Banana</li>
		<li>Apple</li>
		<li>Kiwi </li>
		<li>Grapes</li>
	</ul>`;

let deezToast = `Try some whole wheat toast with some 
	<ul> 
	<li> Butter </li>
	<li> Jam </li>
	<li> Peanut butter </li>
	</ul>`

let  deezOther= `Heres some other ideas 

<ul>
<li><Cucumber slices</li>
<li>Carrot/celery sticks</li>
<li>Sliced Capsicium</li>
<li>Cherry tomatoes</li>
<li>Leftover dinner<li>
</ul>`

let deezCheese = `Cheese is high in protein(and also fat), 
Try a couple slices of cheese(ideally low fat like edam), string cheese works too!`

function getBotReply(msg) {
	//joke
	if (msg == "joke"){
		return `What did the wind say to the palm tree? Hold onto your nuts this is no ordinary blow job.`
	}
	// start again
	if (msg == "start again"){
		location.reload();
	}

	// If nothing is entered reload page otherwise my bugs will be exposed
	if (msg ==""){
		window.alert("Please input a message")
		location.reload();
	}

	//Getting and storing name
	if (name == undefined) {
		name = msg;
		return `Hello ${name}.At anytime you want to restart say <span class='stop'>start again</span> and if you want a joke say <span class='stop'>joke.</span> How old are you by the way?`;
	}


	// // Getting and storing age
	if (age == undefined) {
		age = msg;
		return `Sorry to hear that youre ${age}, ${name}, have you had breakfast yet?`;
	}


	// //First yes or no question yes to continue into the tree, else terminate.
	if (msg == "yes" && breakfastYet == undefined) {
		return terminate();
	} else if (msg == "no" && breakfastYet == undefined) {
		breakfastYet = false;
		return `Have a big glass of water first! say <span class="done">done</span> once you're done with that`;
	}

	// //Moving into the first tree

	if (msg == "done") {
		return `Say <span class ="stop"> 5 </span> when you're ready for quick breakfast!`;
	}

	// // 5 minutes or less. time <= 5 



	// First tree less than or equal to 5 minutes input. 
	if (msg === "5") {
		time = msg;
		console.log(time);
		return `ZOOM ZOOM , ${name} . Do you like nuts? say <span class="nuts">NUTS</span> for nuts otherwise say <span class="no">NO</span>`;
	}

	
	// First yes or no of 5 min tree comes from 
	// Do you like nuts? Yes => [x] time <=5 and they say yes, nuts not defined yet. 

	if (time <= 5 && msg.toLowerCase() == "nuts" && nuts == undefined){
		//Update nuts to reflect selection
		nuts = true;
		// Push to summary array
		summarise.push('<span class="nuts">handful of nuts</span>');
		console.log(nuts);
		console.log(cheese);
		console.log(fruit);

		return `${deezNuts} now... do you like fruit? say <span class="fruit">fruit</span> otherwise say <span class="no">no fruit</span>`
	}

	// No to nuts leading into cheese comes from 
	// msg <=5 && nuts == undefined && msg == no

	if (time <=5 && nuts == undefined && msg.toLowerCase()== "no" && nonuts == undefined){
		// created no nuts variable to make it easier
		nonuts = true;
		return `how about some cheese? say <span class="cheese">cheese</span> for cheese, otherwise say <span class="no">cheesus</span>`;
	}

	// yes or no from cheese, using nonuts variable to lead into fruit

	if (nonuts == true && msg.toLowerCase() == "cheese"){
		// changing cheese to true
		cheese = true;
		//pushing to array 
		summarise.push("<span class='cheese'>two slices of cheese</span>");
		return `${deezCheese}, would you like some fruit with that? say <span class="fruit">fruit</span> or <span class="no">no fruit</span> `;
	}
// if cheese == true && nonuts == true && msg.toLowerCase == "no fruit";


	// no to cheese, leading into fruit 
	if (nonuts == true && msg.toLowerCase() == "cheesus" && cheese == undefined){
		noCheese = true;
		noNutsAndNoCheese = true;
		return `OK, would you like some fruit then? say <span class="fruit">FRUIT</span> or <span class="no">NO FRUIT</span> `
	}

	//  Yes to Fruit either comes from 
	// [x] Yes to nuts and yes to fruit ( nuts == true, cheese == undefined)
	// [x] No to nuts and yes to cheese (cheese == true, nuts == undefined)
	// [x] no to nuts and no to cheese ( nuts == undefined, cheese == undefined)

	if ((nuts == true && cheese == undefined && fruit == undefined && msg == "fruit") || (nuts == undefined && cheese == true && fruit == undefined && nonuts == true && msg == "fruit") || (nuts == undefined && cheese == undefined && fruit == undefined && nonuts == true && noCheese == true) && msg.toLowerCase() == "fruit"){
		//Update fruit variable once chosen
		fruit = true;
		if (nuts == true){
			hasNutsAndFruit == true;
		}

		// push selection to summary array
		summarise.push('<span class="fruit">a serving of fruit</span>');
		// return menu & lead to "still hungry tree" 
		// two options cause at this point you can have either two items or just the one
		if((nuts == true || cheese == true) && fruit == true){
		return `${deezFruit}, so far you have ${summarise[0]} and ${summarise[1]}, are you still feeling hungry?`
		} else {
			return `${deezFruit},would you like something else with that?`
		}

	}

	if (nuts == undefined && cheese == true && fruit ==true && nonuts == true && msg == "no"){
		return `For breakfast today you have ${summarise[0]} and  a ${summarise[1]} be careful and don't eat and drive or you'll be eating shit when you crash and burn`
	}

	// replying "no" to fruit leads to TOAST; 
	// [x] Yes to nuts and no to fruit ( nuts == true && fruit == undefined)
	// [] no to nuts and yes to cheese (nonuts == true && cheese == true)
	// [] no to nuts and no to cheese ( nonuts == true && cheese == undefined)

	if ((nuts == true && fruit == undefined && nofruit == undefined) || (nuts == undefined && cheese == true && nonuts == true && fruit == undefined && nofruit == undefined) || (nonuts == true && cheese == undefined && fruit == undefined && noNutsAndNoCheese == true && msg == "no fruit") || (nonuts == true && cheese == true && summarise[0] == "two slices of cheese")&& msg.toLowerCase() == "no fruit"){
		nofruit = true;
		
		if (noNutsAndNoCheese == true){
			noNutsAndNoCheeseAndNoFruit == true;
			return `how about some toast? say <span class="toast">yeah toast</span> or <span class="no">yuck toast</span>`
		}


		return `how about some toast? say <span class="toast">yeah toast</span> or <span class="no">yuck toast</span>`;
	}

	//Finishing the tree = no to nuts -> yes to cheese -> yes to toast -> no to more food

	if (nuts == undefined && cheese == true && nonuts == true && fruit == undefined && nofruit == true && msg == "no"){
		return  `For breakfast today you have ${summarise[0]} and  a ${summarise[1]} be careful and don't eat and drive or you'll be eating shit when you crash and burn`
	}

	// No to everything path

	if(noNutsAndNoCheese == true && msg == "yuck toast" && fuckfuckfuckfuck == undefined && other == undefined){
		other = true;
		noNutsAndNoCheeseAndNoFruit = true;
		fuckfuckfuckfuck = true;
		
		return `${deezOther} Try one of these options ${name}! Have a great day and don't eat and drive or you'll also eat shit and probably die like this guy who wrote this chatbot function type <span class ="stop> start again </span> to try again`;

	}

	



	// Yeah toast
	// [x] yes to nuts no to fruit and yes to toast (nuts == true && fruit == undefined && toast == true)
	// [x] no to nuts , no to cheese , no to fruit , yes to toast (nonuts == true, cheese == undefined, fruit == undefined)
	//

	if ((nuts == true && fruit == undefined && nofruit == true && toast == undefined) || (nuts == undefined && nonuts == true && nofruit == true && fruit == undefined) && msg.toLowerCase() == "yeah toast"){
		toast = true;
		summarise.push("<span class='toast'>2 slices of toast</span>")
		if (summarise.length == 2){return `${deezToast} , so far you have ${summarise[0]} and ${summarise[1]}, would you like some more food?`}
		else { 
			return `${deezToast}, so far you have ${summarise[0]}, say yes for more!`
		}
	}

	//No toast 
	//[ ] yes to nuts no to fruit and no to to toast (yuck toast)

	if ((nuts == true && fruit == undefined && nofruit == true && toast == undefined && noToast == undefined) || (nonuts == true && cheese == undefined && fruit == undefined) || (nonuts == true && cheese == true)  && msg == "yuck toast"){ 
		noToast = true;
		other = true;
		
		return `${deezOther} Tell me which one you like`
	}



	

	// replying "yes" to wanting more after fruit option completed comes from
	// [x] Yes to nuts, yes to fruit ( nuts == true, cheese == undefined , fruit == true)
	// [x] No to nuts, yes to cheese ( nuts == undefined, cheese == true, fruit == true)
	// [x] no to nuts, no to cheese , yes to fruit (nuts == undefined , cheese == undefined , fruit == true)
	//[x] yes to nuts, no to fruit , yes to toast

	if ((nuts == true && cheese == undefined && fruit == true && msg == "yes") || (other == undefined && nuts == undefined && cheese == true && fruit == true && msg == "yes" ) || (nuts == undefined , cheese == undefined , fruit == true && msg == "yes") ||(toast == true && nuts == true && nofruit == true  && msg == "yes") || (nonuts == true, cheese == undefined && fruit == undefined && msg == "yes") 
	|| (nuts == undefined && nonuts == true && nofruit == true && fruit == undefined && toast == true && msg == "yes") || (nonuts == true && cheese == true && fruit == true && msg == "yes") ){ 
		//|| (nuts == true && fruit == undefined && nofruit == true && toast == undefined) && msg.toLowerCase == "yuck toast")
		// Update other variable to use to signal end of the tree
		other = true;
		// return a menu with options for the user
		return `${deezOther}, tell me which one you like`

	}

	// Finishing the tree 
	// At this point, all options can be summarised with if(other == true) since they all lead there
	// The only thing to keep in mind is how many options that the bot needs to give to them otherwise it returns undefined in the string. 
	// [x] yes to nuts , yes to fruit + user option (3)
	// [x] no to nuts, yes to cheese, yes to fruit + user option  (3)
	// [x] no to nuts , no to cheese , yes to fruit + user option (2)\
	// [] yes to nuts no to fruit yes to toast
	// []

	if ((other == true) || (toast == true && msg == "no")){
		// User inputs their selection from presented options, push to array
		summarise.push(`<span class=stop>${msg}</span>`);

		if(summarise.length ==3){
			return `For breakfast today you have ${summarise[0]} , ${summarise[1]} and ${summarise[2]}. Dont eat and drive or you'll be eating more than nuts(ie eating pavement)`;
		}
		else if(summarise.length == 2){
			return `For breakfast today you have ${summarise[0]} and  a ${summarise[1]} be careful and don't eat and drive or you'll be eating shit when you crash and burn`
		}

		else if(summarise.length == 1){
			return `for breakfast today, you have ${summarise[0]}, have a great day ${name}`;
		}

	}

	
}





//function to terminate chat(for the first function - "u had breakfast?" Y/N)
function terminate() {
	return `Hope your breakfast was good, ${name}, have a great day`;
}

function renderChatbox() {
	// get a reference to the chatbox element
	const chatboxEl = document.getElementById("chatbox");

	// copy the latest set of messages, then reverses the new
	// array and takes the first 20 elements
	const recentMessages = [...chatLogs].reverse().slice(0, 20);
	/**
	 * this one liner statment would be equivalent to:
	 * var recentMessages = chatLog.slice();
	 * recentMessages.reverse();
	 * var last20RecentMessages = recentMessages.slice(0,20);
	 */

	// markup to display
	let chatboxHTML = "";

	// create a chat item div element
	for (let message of recentMessages) {
		let markup = `
      <div class="chat-item chat-item-user">${message.user.inputMsg}</div>
      <div class="chat-item chat-item-bot">${message.bot.replyMsg}</div>
    `;
		chatboxHTML += markup;
	}

	// set the inner HTML
	chatboxEl.innerHTML = chatboxHTML;
}

// form submit handler
function handleChatSubmit(event) {
	// Stop the page from reloading when the form is submitted
	event.preventDefault();

	// get reference to the chat input
	const chatInput = document.getElementById("chat-input");

	// get the chat form input value
	const chatValue = chatInput.value;
	// clear the input ready for the next message
	chatInput.value = "";

	const botReply = getBotReply(chatValue);
	if(botReply == undefined){
		window.alert(`Sorry, I didn't understand that! Please follow the colored prompts, and reply with lowercase YES or NO otherwise. I will now restart beep boop`)
		location.reload();
	}


	// Create a data model to save the chat log against
	const chatLog = {
		user: {
			inputMsg: chatValue,
		},
		bot: {
			replyMsg: botReply,
		},
		timestamp: new Date(),
	};

	// push the user message to the chat log
	chatLogs.push(chatLog);

	// render the chatbox
	renderChatbox();
}

// attach the submit event handler to the form here ...
const formEl = document.getElementById("chat-form");
formEl.addEventListener("submit", handleChatSubmit);
