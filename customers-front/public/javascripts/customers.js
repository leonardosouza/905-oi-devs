// Promise API

/*
     Promise - fetch()
        | 
     pending
     /     \
rejected   fulfilled
catch()    then()
*/

function getAllCostumers() {
  console.log("=== GET ALL CUSTOMERS ===");

  const endpoint = `http://localhost:8080/customers`;

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then((res) => res.json())
    .then((customers) => {
      document.querySelector("tbody").innerHTML = customers
        .map(function (customer, index) {
          return `<tr>
                    <th scope="row">${customer.id}</th>
                    <td>${customer.name}</td>
                    <td>${customer.email}</td>
                    <td>${customer.cpf}</td>
                </tr>`;
        })
        .join("");
    })
    .catch(() => console.error("Falha na comunicação"))
    .catch(() => console.error("Falha na comunicação"));
}

getAllCostumers();
