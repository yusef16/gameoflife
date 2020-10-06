let coloredCol = 0;
let coloredRow = 0;






function createTableInput(a,b){
	

	
	let table = document.createElement("TABLE");
	table.classList.add("table-class");
	document.body.appendChild(table);
		for (let i=0; i<a; i++){
			let tr = document.createElement("TR");
			table.appendChild(tr);
			for(let j=0; j<b; j++){
				let td = document.createElement("TD");
				tr.appendChild(td)
			
		}
	
	
	}


}



function submitform(){
	var row = document.getElementById('x').value;
	var coll = document.getElementById('y').value;

	createTableInput(row,coll);
	CreateControlButton();


}

function CreateControlButton() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "NEXT";
  document.body.appendChild(btn);
  btn.addEventListener("click", function() {
  	console.log("xd")
  } )
}
