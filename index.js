// Add your code here
function submitData(name, email) {
    let data = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {return response.json();})
    .then(function(data) {
        document.body.textContent = data.id;
    })
    .catch(function(error) {
        document.body.textContent = error.message;
      });
};