import logo from './img/Logo_felipesar999.png';
import './App.css';

export default function Home() {

  async function data() {

    let flag = false;

    var age = document.getElementById("Age").value;
    var job = document.getElementById("Job").value;
    var house = document.getElementById("House").value;
    var credit = document.getElementById("Credit").value;

    console.log(age);

    //const csvFile = document.getElementById("csvFile");

    // let files = document.getElementById("csvFile").files;
    const file = document.getElementById("csvFile").files[0];

    var fileData = await leerArchivo(file);

    var dataOrder = []
    for (const key of fileData) {
      const keyData = key.split(";")
      const datos = {
        age: keyData[0],
        job: keyData[1],
        house: keyData[2],
        credit: keyData[3],
        loanApproved: keyData[4],
      }
      dataOrder.push(datos);
    }

    var orderDatas = await orderData(dataOrder)

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

      reader.onload = res => {
        resolve(res.target.result.split(/\r\n|\n/));
      };
      reader.onerror = err => reject(err);

      reader.readAsText(e);
    });

  }

  async function orderData(data) {

    for (let i = 0; i< data.length; i++){
      if (i !== 0){


        console.log(data[i])


      }
    }
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
        <button id="btn1" onClick={() => data()}>Enviar</button>
      </header>
    </div>
  );
}
