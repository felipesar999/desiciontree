async function data() {
  var age = document.getElementById("Age").value;
  var job = document.getElementById("Job").value;
  var house = document.getElementById("House").value;
  var credit = document.getElementById("Credit").value;

  //const csvFile = document.getElementById("csvFile");

  // let files = document.getElementById("csvFile").files;
  const file = document.getElementById("csvFile").files[0];

  //var fileData = await leerArchivo(file);

  const lector = new FileReader();
  let rows;
  lector.onload = await function (file) {
    rows = file.target.result.split(/\r\n|\n/);
    console.log(rows)
  };
  lector.readAsText(file);

  var data = [];
  console.log("before")
  rows.forEach((marker) => {
    let datos = marker.split(";");
    let datosJson = {
      Age: datos[0],
      Job: datos[1],
      House: datos[2],
      Credit: datos[3],
      LoanApproved: datos[4],
    };
    console.log(datosJson)
    data.push(datosJson);
  });
  //console.log(data);

  console.log(fileData);
}
/*document.getElementById("btn1").onclick = () => {
    data();

  };
  /*document.querySelector("#csvFile")
  .addEventListener("change", leerArchivo, false);*/
/*
async function leerArchivo(e) {
  const archivo = e;
  if (!archivo) return;
  const lector = new FileReader();
  let rows;
  lector.onload = function (e) {
    rows = e.target.result.split(/\r\n|\n/);
    console.log(rows)
    return (rows)
  };
  lector.readAsText(archivo);
 
  //console.log(lector)
}*/
