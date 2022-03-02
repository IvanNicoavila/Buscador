const resultado = document.getElementById("resultado");
const filtro =document.getElementById("filtro");

const listItem = [];
getData();

filter.addEventListener("input", (e) => 
filterData(e.target.value));

async function getData() {
    const result = await fetch ("https://randomuser.me/api/?results=50");

    const {resultado} = await result.json();

    getData();

   
    resultado.innerHtml = "";

    resultado.forEach((user) => {
        const li = document.createElement("lista");


        listItem.push(li);

        li.innerHTML = `
        <img src="${user.picture.large}"
        alt ="${user.name.first}">
    


        <div class="informacion-usuario">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}
                    </p>
        </div>
        `;

        result.apeendChild(li);
            }
}



function filterData (searchTerm){
    listItems.forEach((item) => {
        if
        (item.innerText.toLowerCase().includes(searchTerm.toLowerCase()))
        {
            item.classlist.remove("hide");
        } else {
            item.classlist.add ("hide");
        }
    });
}

