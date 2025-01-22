async function getUsers(){

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const data = users.map(function(user){
        return(
            `<div class="user" >
            <h2>${user.name}</h2>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Address</span>: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><span>Phone:</span> ${user.phone}</p>
            <p><span>Website:</span> <a href="${user.website}">${user.website}</a></p>
            <p><span>Company:</span> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            </div>`
        );
    }).join('');
    console.log(data);
    document.querySelector(".users").innerHTML = data;
}

getUsers();