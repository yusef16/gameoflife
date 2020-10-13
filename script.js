let coloredCol = 0;
let coloredRow = 0;






function createTableInput(a,b){
		
	
	let table = document.createElement("TABLE");
	table.classList.add("table-class");
	

	document.body.appendChild(table);
		for (let i=0; i<a; i++){
			let tr = document.createElement("TR");
			table.appendChild(tr);
				tr.classList.add("tr-class")
				

				for(let j=0; j<b; j++){
				let td = document.createElement("TD");
				tr.appendChild(td);
					td.classList.add("td-class")
					
									
			
		}
		
				

	}



}





// sumbit form

function submitform(){
	var row = document.getElementById('x').value;
	var coll = document.getElementById('y').value;
		//var a = tr.style.backgroundColor = "red";

	createTableInput(row,coll);
	
	CreateControlButton();
	


}



function CreateControlButton() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "NEXT";
  document.body.appendChild(btn);
  	let i = 0
  btn.addEventListener("click", function() {
  	
  		
 		var coloredCol = document.getElementsByClassName("td-class")
 		
 		
 		coloredCol[i].style.backgroundColor="black"
 		i++
 		

 			
 				
  	

  } )

}





