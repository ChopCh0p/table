var enter = document.getElementsByClassName('enter');

	function save() {
		for (var x=data.lenght; x < 3; x++) {
			data[x] = enter[x].value; //enter[0].value + enter[1].value + enter[2].value;
		}
			console.log(data);
	}

	save();

var tbody = document.getElementsByClassName('tboddy')[0];

for (var i=0; i < data.length; i++){
    tbody.innerHTML += '<tr><td>' + data[i].name + '</td><td>' + data[i].lastName + '</td><td>' + data[i].age + '</td></tr>';
}
