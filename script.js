var tbody = document.getElementsByClassName('tboddy')[0];

for (var i=0; i < data.length; i++){
    tbody.innerHTML += '<tr><td>' + data[i].name + '</td><td>' + data[i].lastName + '</td><td>' + data[i].age + '</td></tr>';
}