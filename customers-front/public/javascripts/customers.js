function getAllCostumers() {
  console.log("=== GET ALL CUSTOMERS ===");

  const endpoint = `http://localhost:8080/customers`;

  const config = {
    method: "GET",
  };

  fetch(endpoint, config);
}

getAllCostumers();
