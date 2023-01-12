// document
//   .getElementById("createForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let formData = {
//       id: document.getElementById("id").value,
//       name: document.getElementById("name").value,
//       age: document.getElementById("age").value,
//       salary: document.getElementById("salary").value,
//     };

//     let jsonData = JSON.stringify(formData);
//     fetch("http://dummy.restapiexample.com/api/v1/create", {
//       method: "POST",
//       body: jsonData,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.status === "success") {
//           console.log("Status: Success");
//         } else {
//           console.error("Status: Error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error: " + error);
//       });
//   });

// document
//   .getElementById("updateForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let formData = {
//       id: document.getElementById("id").value,
//       name: document.getElementById("name").value,
//       age: document.getElementById("age").value,
//       salary: document.getElementById("salary").value,
//     };

//     let jsonData = JSON.stringify(formData);
//     fetch("http://dummy.restapiexample.com/api/v1/update/" + formData.id, {
//       method: "PUT",
//       body: jsonData,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.status === "success") {
//           console.log("Status: Success");
//           console.log("Data updated successfully.");
//           document.getElementById("name").innerHTML = json.data.name;
//           console.log(json.data.name);
//         } else {
//           console.error("Status: Error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error: " + error);
//       });
//   });
// // ------ Delete
// document
//   .getElementById("deleteForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let id = document.getElementById("id").value;

//     fetch("http://dummy.restapiexample.com/api/v1/delete/" + id, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         if (json.status === "success") {
//           console.log("Status: Success");
//           console.log("Data deleted successfully.");
//         } else {
//           console.error("Status: Error");
//         }
//       })
//       .catch((error) => {
//         console.error("Error: " + error);
//       });
//   });
document
  .getElementById("createBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let formData = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      salary: document.getElementById("salary").value,
    };

    let jsonData = JSON.stringify(formData);
    fetch("http://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          console.log("Status: Success");
        } else {
          console.error("Status: Error");
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  });

document
  .getElementById("updateBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let formData = {
      id: document.getElementById("id").value,
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      salary: document.getElementById("salary").value,
    };

    let jsonData = JSON.stringify(formData);
    fetch("http://dummy.restapiexample.com/api/v1/update/" + formData.id, {
      method: "PUT",
      body: jsonData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          console.log("Status: Success");
          console.log("Data updated successfully.");
          document.getElementById("name").innerHTML = json.data.name;
          console.log(json.data.name);
        } else {
          console.error("Status: Error");
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  });

document
  .getElementById("deleteBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let id = document.getElementById("id").value;

    fetch("http://dummy.restapiexample.com/api/v1/delete/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") {
          console.log("Status: Success");
          console.log("Data deleted successfully.");
        } else {
          console.error("Status: Error");
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  });
