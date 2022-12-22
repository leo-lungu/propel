import jsonData from './data.json' assert {type: 'json'}; // import data.json

var eachPerson;

console.log(jsonData)

function printData(Arr) {
  for(var i=0; i<Arr.length; i++) {
    eachPerson.innerText += `\nName: ${Arr[i].first_name} ${Arr[i].last_name} \n Phone: ${Arr[i].phone} \n Email: ${Arr[i].email} \n` ; 
  } // display all results
}

export function search(ev) {
  var key = ev.target.value;
  eachPerson.innerText = null;
  
  printData(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.first_name.match(regex) || data.last_name.match(regex) || data.phone.match(regex) || data.email.match(regex); // searches the results
  }));
}

window.onload = function() {
  eachPerson = document.getElementById("people");
  printData(jsonData);
}