const table = document.querySelector("table")
const tbody = document.getElementById("tbody");



fetch("https://northwind.vercel.app/api/categories")
.then(response => response.json())
.then(data => 
    data.forEach(element => {
        const tr = document.createElement("tr");
        const btn = document.createElement("button");
        btn.innerText = "X";
        btn.style.cssText = `
        border: none;
        background-color: red;
        color: white;
        `
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        tr.append(td1, td2, td3, btn);
        tbody.appendChild(tr);
        td1.innerText = element.id;
        td2.innerText = element.description;
        td3.innerText = element.name;  
        console.log(element);
        btn.addEventListener("click", () => {
            tr.remove();
        })
        // fetch("https://northwind.vercel.app/api/categories" + id, {
        //     method: 'DELETE',
        // })
    })
    )