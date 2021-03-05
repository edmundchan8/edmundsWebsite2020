//counter for setting list ID
var listIDcounter = 0;

function AddCardName(name){
	listIDcounter++;
	var newBtnId = listIDcounter;
	var newListId = "list" + listIDcounter;
	$("#list").append("<li id=newListId>" + name + '<input type="button" value="Remove" class="removeBtn float-right" id=newBtnId>' + "</li>");
	$("#newBtnId").attr("id",newBtnId);
	$("#newListId").attr("id", newListId);
}

//Gets stored data, and creates a list according to it
function LoadExistingList(){
	var array = GetData();
	for(i = 0; i < array.length; i++){
		AddCardName(array[i]);
	}
}

//Takes the id of element and removes it from the list
function RemoveCard(id){
	var removeId = "#list" + id;
	$(removeId).remove();
}

function SaveData(data){
	localStorage["Data"] = data;
	
}

function GetData(){
	var retrievedString = localStorage["Data"];
	var array = retrievedString.split(',');
	console.log(array);
	return array;
}

function DeleteData(){
	localStorage.removeItem("Data");
}

$(document).ready(function() {
	var retrieveData = localStorage["Data"];
	if (retrieveData != null){
		LoadExistingList();
	}
	$("#addBtn").click(function(){
		var cardName = $("#inputCardName").val();
		AddCardName(cardName);
	});
	
	//We need this because elements not created when the DOM was made need to be found dynamically.
	//https://jqueryhouse.com/jquery-on-method-the-issue-of-dynamically-added-elements/
	$(document).on("click", ".removeBtn", function(){
		RemoveCard(this.id);
	});
	
	$("#saveBtn").click(function(){
		var ans = confirm("Are you sure you want to save?");
		if (ans == true){
			var arr = [];
			$("li").each(function(index){
				arr[index] = $(this).text();
			});
		SaveData(arr);
		}
		else {
			alert("Data not saved");
		}
	});

	$("#deleteBtn").click(function(){
		var ans = confirm("Delete all stored data?");
		if (ans == true){
			DeleteData();
		}
		else {
			alert("Data not deleted");
		}
		
	});
});