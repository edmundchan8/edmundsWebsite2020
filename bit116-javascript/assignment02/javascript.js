function DisplayIncorrectInputMsg(){
    $("#gpaResult").css("show");
    $("#gpaResult").html("Please enter in a grade percentage.");
}

function ClearNameDanger(){
    $("#alertNameDanger").css("hidden");
    $("#alertNameDanger").html("&nbsp");
}
function RevealNameDanger(){
    $("#alertNameDanger").css("show");
    $("#alertNameDanger").html("Invalid Name Input");
    $("#nameText").html("You did not enter a name.");
}
function ClearNameSuccess(){
    $("#alertNameSuccess").css("hidden");
    $("#alertNameSuccess").html("&nbsp");
}
function RevealNameSuccess(name){
    $("#alertNameSuccess").css("show");
    $("#alertNameSuccess").html("&#8730; Name Input Valid");
    alert("Welcome " + name + " to the GPA calculator Webpage!");
    $("#nameText").html("Welcome " + name);
}
function ClearGradeErrorDanger(){
    $("#alertGradeDanger").html("&nbsp");
}

$(document).ready(function() {
    var nameInput = prompt("Please enter your name:");
    if(nameInput != "" && !(nameInput === null)){
        ClearNameDanger(); 
        RevealNameSuccess(nameInput);
    }
    else {
        ClearNameSuccess();
        RevealNameDanger();
    }
});


$(document).ready(function(){
    $("#changeButton").click(function(){
        var newNameinput = $("#nameInput").val();
        if (newNameinput !="" && !(newNameinput === null)){
            ClearNameDanger();
            RevealNameSuccess(newNameinput);
        }
        else{
            ClearNameSuccess();
            RevealNameDanger();
        }
    });
});

//Clears the grade percentage text box on click into it
$(document).ready(function(){
    $("#percentageText").on("click",function(){
        $(this).val("");
    }); 
});

$(document).ready(function(){
    $("#gpaButton").click(function(){
        var gpaPer = $("#percentageText").val();
        //percentage to gpa calculation goes here
        var finalGPA = 0.0;
        if (gpaPer === ""){
            $("#alertGradeDanger").html("The text box cannot be left blank.");
            DisplayIncorrectInputMsg();
            return;
        }
        else if(isNaN(gpaPer)){
            $("#alertGradeDanger").html("You have not entered in a grade percentage");
            DisplayIncorrectInputMsg();
            return;
        }

        gpaPer = parseFloat(gpaPer);
        if (gpaPer > 1 && gpaPer <= 64){
            finalGPA = 0.0;
        }
        else if (gpaPer >= 98){
            finalGPA = 4.0;
        }
        else if(gpaPer <= 1){
            $("#alertGradeDanger").html("We expected a percentage (e.g. 34 or 75. not 0.34 or 0.75)");
            DisplayIncorrectInputMsg();
            return;
        }
        else {
            var amount = (gpaPer - 65) * 0.1;
            finalGPA = 1 + amount;
        }
        ClearGradeErrorDanger();
        $("#gpaResult").css("show");
        finalGPA = finalGPA.toFixed(1);
        $("#gpaResult").html("Your GPA is: " + finalGPA);
    });
});