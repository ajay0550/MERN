async function wow() {
    const x = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await x.json();
    let nooo = document.getElementById("wow");
    nooo.textContent = data[1].name;
}

wow();