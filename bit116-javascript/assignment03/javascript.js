function isPassPhysics() {
	var passed = false;
	if (($("#majPhys1").is(":checked") && $("#majPhys2").is(":checked")) || ( $("#majPhys2").is(":checked") && $("#majPhys3").is(":checked"))
	|| ($("#majPhys1").is(":checked") && $("#majPhys3").is(":checked"))){
		passed = true;
	}
	return passed;
}


$(document).ready(function() {
	$("#requirementButton").click(function(){
		//fulfilled foundation requirements
		if ($("#coll101").is(":checked")){
			$("#Feedback_ColSucc_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_ColSucc_Complete").removeClass().addClass("show text-success");
		}
		//haven't complete foundation requirements
		else {
			$("#Feedback_ColSucc_Complete").removeClass().addClass("d-none");
			$("#Feedback_ColSucc_Incomplete").removeClass().addClass("show text-danger");
		}
		//fulfilled communication requirements
		if ($("#eng101").is(":checked") && ($("#eng102").is(":checked") || $("#eng235").is(":checked"))){
			$("#Feedback_Comm_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_Comm_Complete").removeClass().addClass("show text-success");
			$("#Feedback_Missing_Eng101").removeClass().addClass("d-none");
			$("#Feedback_Missing_Eng102_Eng235").removeClass().addClass("d-none");
			$("#Feedback_Missing_AllEng").removeClass().addClass("d-none");
		}
		//Only fulfilled ENG101
		else if ($("#eng101").is(":checked") && ($("#eng102").is(":checked") == false || $("#eng235").is(":checked") == false)){
			$("#Feedback_Comm_Complete").removeClass().addClass("d-none");
			$("#Feedback_Comm_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Eng101").removeClass().addClass("d-none");
			$("#Feedback_Missing_Eng102_Eng235").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_AllEng").removeClass().addClass("d-none");
		}
		//haven't fulfilled ENG101
		else if ($("#eng101").is(":checked")==false && ($("#eng102").is(":checked") || ($("#eng235").is(":checked")))) {
			$("#Feedback_Comm_Complete").removeClass().addClass("d-none");
			$("#Feedback_Comm_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Eng101").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Eng102_Eng235").removeClass().addClass("d-none");
			$("#Feedback_Missing_AllEng").removeClass().addClass("d-none");
		}
		//haven't completed any English classes
		else{
			$("#Feedback_Comm_Complete").removeClass().addClass("d-none");
			$("#Feedback_Comm_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Eng101").removeClass().addClass("d-none");
			$("#Feedback_Missing_Eng102_Eng235").removeClass().addClass("d-none");
			$("#Feedback_Missing_AllEng").removeClass().addClass("show text-danger");
		}			
		//fulfilled all math requirements
		if ($("#math151").is(":checked") && $("#math152").is(":checked")){
			$("#Feedback_QSR_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_QSR_Complete").removeClass().addClass("show text-success");
			$("#Feedback_Missing_Calc_1").removeClass().addClass("d-none");
			$("#Feedback_Missing_Calc_2").removeClass().addClass("d-none");
			$("#Feedback_Missing_All_Calc").removeClass().addClass("d-none");
		}
		//haven't fulfilled math151
		else if (($("#math151").is(":checked")==false) && $("#math152").is(":checked")){
			$("#Feedback_QSR_Complete").removeClass().addClass("d-none");
			$("#Feedback_QSR_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Calc_1").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Calc_2").removeClass().addClass("d-none");
			$("#Feedback_Missing_All_Calc").removeClass().addClass("d-none");
		}
		//haven't fulfilled math152			
		else if ($("#math152").is(":checked")==false && $("#math151").is(":checked")){
			$("#Feedback_QSR_Complete").removeClass().addClass("d-none");
			$("#Feedback_QSR_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Calc_1").removeClass().addClass("d-none");
			$("#Feedback_Missing_Calc_2").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_All_Calc").removeClass().addClass("d-none");
		}
		//have not fulfilled either Math classes
		else {
			$("#Feedback_QSR_Complete").removeClass("show text-success").addClass("d-none");
			$("#Feedback_QSR_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Calc_1").removeClass().addClass("d-none");
			$("#Feedback_Missing_Calc_2").removeClass().addClass("d-none");
			$("#Feedback_Missing_All_Calc").removeClass().addClass("show text-danger");
		}
		//fulfilled humanties requirements
		if ($("#hClass").is(":checked") && $("#ssClass").is(":checked") && $("#humanitiesClass").is(":checked")) {
			$("#Feedback_HS_Complete").removeClass().addClass("show text-success");
			$("#Feedback_HS_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_Missing_H").removeClass().addClass("d-none");
			$("#Feedback_Missing_SS").removeClass().addClass("d-none");
			$("#Feedback_Missing_CMST").removeClass().addClass("d-none");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//Only H class is completed
		else if ($("#hClass").is(":checked") && $("#ssClass").is(":checked")==false && $("#humanitiesClass").is(":checked")==false){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("d-none");
			$("#Feedback_Missing_SS").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_CMST").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//Only SS class is completed
		else if ($("#hClass").is(":checked")==false && ($("#ssClass").is(":checked") && $("#humanitiesClass").is(":checked")==false)){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_SS").removeClass().addClass("d-none");
			$("#Feedback_Missing_CMST").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//Only CMST class is completed
		else if ($("#hClass").is(":checked")==false && ($("#ssClass").is(":checked")==false && $("#humanitiesClass").is(":checked"))){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_SS").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_CMST").removeClass().addClass("d-none");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//if H and SS are completed only
		else if ($("#hClass").is(":checked") && ($("#ssClass").is(":checked") && $("#humanitiesClass").is(":checked")==false)){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("d-none");
			$("#Feedback_Missing_SS").removeClass().addClass("d-none");
			$("#Feedback_Missing_CMST").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//if H and CMST are completed only
		else if ($("#hClass").is(":checked") && ($("#ssClass").is(":checked")==false && $("#humanitiesClass").is(":checked"))){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("d-none");
			$("#Feedback_Missing_SS").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_CMST").removeClass().addClass("d-none");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//if SS and CMST are completed only
		else if ($("#hClass").is(":checked")==false && ($("#ssClass").is(":checked") && $("#humanitiesClass").is(":checked"))){
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_SS").removeClass().addClass("d-none");
			$("#Feedback_Missing_CMST").removeClass().addClass("d-none");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("d-none");
		}
		//no humanities classes completed
		else {
			$("#Feedback_HS_Complete").removeClass().addClass("d-none");
			$("#Feedback_HS_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_H").removeClass().addClass("d-none");
			$("#Feedback_Missing_SS").removeClass().addClass("d-none");
			$("#Feedback_Missing_CMST").removeClass().addClass("d-none");
			$("#Feedback_Missing_Humanities_All").removeClass().addClass("show text-danger");
		}
		
		//If all pre major requirements completed
		if ($("#majChemClass").is(":checked") && $("#majMathClass").is(":checked") && $("#majPhys1").is(":checked") && 
		$("#majPhys2").is(":checked") && $("#majPhys3").is(":checked")){
			$("#Feedback_Maj_Complete").removeClass().addClass("show text-success");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("d-none");
			$("#Feedback_Missing_Maj_All").removeClass().addClass("d-none");
			console.log("pass");
		}
		//Only completed the LAB
		else if ($("#majChemClass").is(":checked") && $("#majMathClass").is(":checked")==false && !isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("only lab");
		}
		//Only completed the MATH
		else if ($("#majMathClass").is(":checked") && $("#majChemClass").is(":checked")==false && !isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("only math");
		}
		//Only completed the PHYSICS
		else if (isPassPhysics() && $("#majChemClass").is(":checked")==false && $("#majMathClass").is(":checked")==false){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Math146").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Physical").removeClass().addClass("d-none");
			console.log("2 or 3 physics done");
		}
		//only LAB and MATH completed
		else if ($("#majChemClass").is(":checked") && $("#majMathClass").is(":checked") && !isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("lab and math");
		}
		//only lAB and 1 Physics completed
		else if ($("#majChemClass").is(":checked") && ($("#majMathClass").is(":checked")==false) && !isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("lab and phys 1");
		}
		//only MATH and 1 Physics completed
		else if ($("#majMathClass").is(":checked") && ($("#majChemClass").is(":checked")==false) && !isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("math and phys 1");
		}
		//only LAB and Physics completed
		else if ($("#majChemClass").is(":checked") && $("#majMathClass").is(":checked")==false && isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Physical").removeClass().addClass("d-none");
			console.log("lab and 2 phys");
		}
		//only MATH and Physics completed
		else if ($("#majMathClass").is(":checked") && $("#majChemClass").is(":checked")==false && isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("d-none");
			console.log("math and 2 phys");
		}
		//Lab, Math, and only 2 physics
		else if ($("#majMathClass").is(":checked") && $("#majChemClass").is(":checked") && isPassPhysics()){
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("d-none");
			$("#Feedback_Missing_Math146").removeClass().addClass("d-none");
			$("#Feedback_Missing_Physical").removeClass().addClass("d-none");
			console.log("lab, math and 2 phys");
		}
		else {
			$("#Feedback_Maj_Complete").removeClass().addClass("d-none");
			$("#Feedback_Maj_Incomplete").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Lab").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Math146").removeClass().addClass("show text-danger");
			$("#Feedback_Missing_Physical").removeClass().addClass("show text-danger");
			console.log("complete fail");
		}
		if ( $("#ElecClass").is(":checked")){
			$("#Feedback_Elec_Complete").removeClass().addClass("show text-success");
			$("#Feedback_Elec_Incomplete").removeClass().addClass("d-none");
		}
		else{
			$("#Feedback_Elec_Complete").removeClass().addClass("d-none");
			$("#Feedback_Elec_Incomplete").removeClass().addClass("show text-danger");
		}
		if ($("#Feedback_ColSucc_Complete").hasClass("show text-success") && $("#Feedback_Comm_Complete").hasClass("show text-success") &&
		$("#Feedback_QSR_Complete").hasClass("show text-success") && $("#Feedback_HS_Complete").hasClass("show text-success") 
		&& $("#Feedback_Maj_Complete").hasClass("show text-success") && $("#Feedback_Elec_Complete").hasClass("show text-success")){
			alert("You have completed all required classes!");
		}
	});
});