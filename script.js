






function createTableInput(){
	var row = document.getElementById('x').value;
	var coll = document.getElementById('y').value;
	let table = document.createElement("TABLE");
	document.body.appendChild(table);
		for (let i=0; i<row; i++){
			let tr = document.createElement("TR");
			table.appendChild(tr);
			for(let j=0; j<coll; j++){
				let td = document.createElement("TD");
				tr.appendChild(td)
			
		}
	
	
	}


}



