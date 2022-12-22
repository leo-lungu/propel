var jsonData = 
[
    {
        "first_name": "David",
        "last_name": "Platt",
        "phone": "01913478234",
        "email": "david.platt@corrie.co.uk"
    },
    {
        "first_name": "Jason",
        "last_name": "Grimshaw",
        "phone": "01913478123",
        "email": "jason.grimshaw@corrie.co.uk"
    },
    {
        "first_name": "Ken",
        "last_name": "Barlow",
        "phone": "019134784929",
        "email": "ken.barlow@corrie.co.uk"
    },
    {
        "first_name": "Rita",
        "last_name": "Sullivan",
        "phone": "01913478555",
        "email": "rita.sullivan@corrie.co.uk"
    },
    {
        "first_name": "Steve",
        "last_name": "McDonald",
        "phone": "01913478555",
        "email": "steve.mcdonald@corrie.co.uk"
    }
];
var eachPerson;

function printData(Arr) {
  for(var i=0; i<Arr.length; i++) {
    eachPerson.innerText += `\nName: ${Arr[i].first_name} ${Arr[i].last_name} \n Phone: ${Arr[i].phone} \n Email: ${Arr[i].email} \n` ;
  }
}

function search(ev) {
  var key = ev.target.value;
  eachPerson.innerText = null;
  
  printData(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.first_name.match(regex) || data.last_name.match(regex) || data.phone.match(regex) || data.email.match(regex);
  }));
}

window.onload = function() {
  eachPerson = document.getElementById("people");
  printData(jsonData);
}