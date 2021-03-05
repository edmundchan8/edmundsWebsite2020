//javascript
$(document).ready(function () {
    var theKeyword = null;
    //TODO - Move this out of button funciton
        var answerArray = ["concerned", "feel", "reservations", "do", "want", "thinking", "wondering"];
    $("#theButton").click(function () {
        //reset keyword
        ResetKeyword();
        //take input, make lower case
        var answer = $("#textBox").val().toLowerCase();
        //for each word in answerArray, check if answer is in there inputArray
        //if it is, export the word out of the function
        for(var i = 0; i < answerArray.length; i++){
            if(answer.indexOf(answerArray[i]) > -1){
                SetWord(answerArray[i]);
                continue;
            }
            else {
                console.log("We did not find the word in our for loop");
            }
        }   
        //check the word
        Response(GetWord());
    });
});
        
function GetWord(){
    return theKeyword;
}

function SetWord(word){
    theKeyword = word;
}

function ResetKeyword(){
    theKeyword = null;
}

function Response(word){
    if (word == "concerned"){
        $("#output").html("You are safe to be concerned about that, but look at the bright side of things, how else do you feel?");
        $("#textBox").prop('value' , "I feel that ");
    }
	else if (word == "feel"){
        $("#output").html("Those feelings are absolutely normal to have.  Do you have any other reservations?");
        $("#textBox").prop('value' , "I have reservations about ");
    }
	else if (word == "reservations"){
        $("#output").html("That is all we can ask for sometimes.  What do you think could also be done?");
        $("#textBox").prop('value' , "I think we could do ");
	}
	else if (word == "do"){
        $("#output").html("We can we can try to do many things.  Is there a particular something that you want?");
        $("#textBox").prop('value' , "I want to ");
    }
    else if (word == "want"){
        $("#output").html("If that is what you want, then go out and get it!  Anything else on your mind?");
        $("#textBox").prop('value' , "I am thinking about ");
    }
    else if (word == "thinking"){
		$("#output").html("Just make sure not to spend too long thinking about things, make sure you get things done!");
        $("#textBox").prop('value' , "I was wondering ");
    }
    else if (word == "wondering"){
        $("#output").html("I'm afraid I have run out of time, but I hope I can answer more of your questions in the future!");
        $("#textBox").prop('value' , "I was wondering ");
        
    }
}