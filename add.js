const results = document.querySelector('.results');

// fetch the data from the data.json file
fetch('./data.json')
  .then(response => response.json())
  .then(jsonData => {
    function addFormListener(form) {
      // event listener for submit
      form.addEventListener('submit', (event) => {
        // prevent default
        event.preventDefault();

        // values of input fields
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        // new object
        const newPerson = {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
          email: email,
        };

        // add to json array
        jsonData.push(newPerson);
        console.log(jsonData)
        /*
        fetch('/write-to-file', {
          method: 'POST',
          body: JSON.stringify(jsonData),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error)); */ //write to file
      });
    }

    // reference to form
    const form = document.querySelector('form');

    // if form exists, add listener to it
    if (form) {
      addFormListener(form);
    }
  });
