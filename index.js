// Add your code here
function submitData(name, email) {
    return (fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(resp => resp.json())
    .then(obj => document.querySelector("body").append(obj.id))
    .catch(error => {
        let message = "Unauthorized Access";
        document.querySelector("body").innerHTML = message;
    })
    )
}
