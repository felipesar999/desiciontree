import logo from "./img/Logo_felipesar999.png";
import "./App.css";

export default function Home() {
  async function data() {
    let flag = false;

    var age = document.getElementById("Age").value;
    var job = document.getElementById("Job").value;
    var house = document.getElementById("House").value;
    var credit = document.getElementById("Credit").value;

    //var age1 = document.getElementById("Age1").value;

    //console.log(age1);

    //const csvFile = document.getElementById("csvFile");

    // let files = document.getElementById("csvFile").files;
    const file = document.getElementById("csvFile").files[0];

    var fileData = await leerArchivo(file);

    var dataOrder = [];
    for (const key of fileData) {
      const keyData = key.split(";");
      const datos = {
        age: keyData[0],
        job: keyData[1],
        house: keyData[2],
        credit: keyData[3],
        loanApproved: keyData[4],
      };
      dataOrder.push(datos);
    }

    for (const key of dataOrder) {
      if (
        age === key.age &&
        job === key.job &&
        house === key.house &&
        credit === key.credit
      ) {
        console.log(
          "El historico dice que debes " + key.loanApproved + " aprobar"
        );
        flag = true;
      }
      if (flag) break;
    }

    if (!flag) var orderDatas = await orderData(dataOrder);

    // console.log(orderDatas)
  }
  /*document.getElementById("btn1").onclick = () => {
      data();
  
    };
    /*document.querySelector("#csvFile")
    .addEventListener("change", leerArchivo, false);*/

  async function leerArchivo(e) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (res) => {
        resolve(res.target.result.split(/\r\n|\n/));
      };
      reader.onerror = (err) => reject(err);

      reader.readAsText(e);
    });
  }

  async function orderData(data) {
    var dataAge = [0, 0, 0];
    var dataErrorAge = [0, 0, 0];
    var dataSucessAge = [0, 0, 0];
    var dataJob = [0, 0];
    var dataErrorJob = [0, 0];
    var dataSucessJob = [0, 0];
    var dataHouse = [0, 0];
    var dataErrorHouse = [0, 0];
    var dataSucessHouse = [0, 0];
    var dataCredit = [0, 0, 0];
    var dataErrorCredit = [0, 0, 0];
    var dataSucessCredit = [0, 0, 0];
    /**
     * ciclo para llenar cantidades de datos
     */
    for (let i = 0; i < data.length; i++) {
      if (i !== 0) {
        switch (data[i].age) {
          case "Young":
            dataAge[0]++;
            if (data[i].loanApproved === "No") dataErrorAge[0]++;
            else dataSucessAge[0]++;
            break;
          case "Middle":
            dataAge[1]++;
            if (data[i].loanApproved === "No") dataErrorAge[1]++;
            else dataSucessAge[1]++;
            break;
          case "Old":
            dataAge[2]++;
            if (data[i].loanApproved === "No") dataErrorAge[2]++;
            else dataSucessAge[2]++;
            break;
          default:
            dataAge[3]++;
            if (data[i].loanApproved === "No") dataErrorAge[3]++;
            else dataSucessAge[3]++;
            break;
        }

        switch (data[i].job) {
          case "False":
            dataJob[0]++;
            if (data[i].loanApproved === "No") dataErrorJob[0]++;
            else dataSucessJob[0]++;
            break;
          case "True":
            dataJob[1]++;
            if (data[i].loanApproved === "No") dataErrorJob[1]++;
            else dataSucessJob[1]++;
            break;
          default:
            dataJob[2]++;
            if (data[i].loanApproved === "No") dataErrorJob[2]++;
            else dataSucessJob[2]++;
            break;
        }

        switch (data[i].house) {
          case "No":
            dataHouse[0]++;
            if (data[i].loanApproved === "No") dataErrorHouse[0]++;
            else dataSucessHouse[0]++;
            break;
          case "Yes":
            dataHouse[1]++;
            if (data[i].loanApproved === "No") dataErrorHouse[1]++;
            else dataSucessHouse[1]++;
            break;
          default:
            dataHouse[2]++;
            if (data[i].loanApproved === "No") dataErrorHouse[2]++;
            else dataSucessHouse[2]++;
            break;
        }

        switch (data[i].credit) {
          case "Fair":
            dataCredit[0]++;
            if (data[i].loanApproved === "No") dataErrorCredit[0]++;
            else dataSucessCredit[0]++;
            break;
          case "Good":
            dataCredit[1]++;
            if (data[i].loanApproved === "No") dataErrorCredit[1]++;
            else dataSucessCredit[1]++;
            break;
          case "Excellent":
            dataCredit[2]++;
            if (data[i].loanApproved === "No") dataErrorCredit[2]++;
            else dataSucessCredit[2]++;
            break;
          default:
            dataCredit[3]++;
            if (data[i].loanApproved === "No") dataErrorCredit[3]++;
            else dataSucessCredit[3]++;
            break;
        }
      }
    }

    /**
     * unificacion de datos
     */

    var dataAgeErrores = [];
    var dataJobErrores = [];
    var dataHouseErrores = [];
    var dataCreditErrores = [];
    /**
     * ciclo para llenar Errores de cada parte de datos
     */

    for (let i = 0; i < dataErrorAge.length; i++) {
      if (dataErrorAge[i] !== undefined) {
        if (dataErrorAge[i] >= dataSucessAge[i])
          dataAgeErrores[i] = dataSucessAge[i];
        else dataAgeErrores[i] = dataErrorAge[i];
      }

      if (dataErrorJob[i] !== undefined) {
        if (dataErrorJob[i] >= dataSucessJob[i])
          dataJobErrores[i] = dataSucessJob[i];
        else dataJobErrores[i] = dataErrorJob[i];
      }

      if (dataErrorHouse[i] !== undefined) {
        if (dataErrorHouse[i] >= dataSucessHouse[i])
          dataHouseErrores[i] = dataSucessHouse[i];
        else dataHouseErrores[i] = dataErrorHouse[i];
      }

      if (dataErrorCredit[i] !== undefined) {
        if (dataErrorCredit[i] >= dataSucessCredit[i])
          dataCreditErrores[i] = dataSucessCredit[i];
        else dataCreditErrores[i] = dataErrorCredit[i];
      }
    }

    /**
     * Organizacion de todos los datos en un Json, ya no entendia como estaban organizados, 
     * ciclos separados para entender el proceso
     */

    let dataOrden = [];

    for (let i = 0; i < dataErrorAge.length; i++) {
      var age = "";
      if (i === 0) age = "Young";
      else if (i === 1) age = "Middle";
      else age = "Old";

      let data = {
        padre: "Age",
        atributo: age,
        cantidad: dataAge[i],
        errores: dataAgeErrores[i],
      };
      dataOrden.push(data);
    }

    for (let i = 0; i < dataErrorJob.length; i++) {
      var job = "";
      if (i === 0) job = "False";
      else job = "True";

      let data = {
        padre: "Job",
        atributo: job,
        cantidad: dataJob[i],
        errores: dataJobErrores[i],
      };
      dataOrden.push(data);
    }
    for (let i = 0; i < dataErrorHouse.length; i++) {
      let house = "";
      if (i === 0) house = "No";
      else house = "Yes";

      let data = {
        padre: "House",
        atributo: house,
        cantidad: dataHouse[i],
        errores: dataHouseErrores[i],
      };
      dataOrden.push(data);
    }

    for (let i = 0; i < dataErrorCredit.length; i++) {
      let credit = "";
      if (i === 0) credit = "Fair";
      else if (i === 1) credit = "Good";
      else credit = "Excellent";

      let data = {
        padre: "Credit",
        atributo: credit,
        cantidad: dataCredit[i],
        errores: dataCreditErrores[i],
      };
      dataOrden.push(data);
    }

    console.log(dataOrden);


    /**
     * Errores por Atributo
     */

    var globalError = [0,0,0,0]
    for (const key of dataOrden) {
      
      if (key.padre === "Age") globalError[0] += key.errores/key.cantidad
      else if (key.padre === "Job") globalError[1] += key.errores/key.cantidad
      else if (key.padre === "House") globalError[2] += key.errores/key.cantidad
      else globalError[3] += key.errores/key.cantidad
      console.log(key,globalError);
    }

    console.log(globalError);



  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Logo" />
        <h3>Arbol de desiciones</h3>
        <ul>
          <li>Digite los datos aqui</li>
        </ul>
        <br></br>
        <dd>
          <label htmlFor="Age">Age:</label>
          <input type="text" id="Age" name="Age" />
          <br></br>
          <br></br>
          <label htmlFor="Job">Job:</label>
          <input type="text" id="Job" name="Job" />
          <br></br>
          <br></br>
          <label htmlFor="House">House:</label>
          <input type="text" id="House" name="House" />
          <br></br>
          <br></br>
          <label htmlFor="Credit">Credit:</label>
          <input type="text" id="Credit" name="Credit" />
        </dd>
        <br></br>
        <input type="file" id="csvFile" accept=".csv, .xlsm" />
        <br></br>
        <br></br>
        <br></br>
        <button id="btn1" onClick={() => data()}>
          Enviar
        </button>
      </header>
    </div>
  );
}
