var url = "http://194.31.79.154:6068";

var getRequestOptions = {
  method: "GET",
  redirect: "follow",
  mode: "cors",
};

export async function GetPlants() {
  const result = await fetch(url + "/api/Plants/GetPlants", getRequestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetPlantTypes() {
  const result = await fetch(
    url + "/api/PlantTypes/GetPlantTypes",
    getRequestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetAmbients() {
  const result = await fetch(
    url + "/api/Ambients/GetAmbients",
    getRequestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetSoils() {
  const result = await fetch(url + "/api/Soils/GetSoils", getRequestOptions)
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetLastMeasurement() {
  const result = await fetch(
    url + "/api/Measurements/GetLastMeasurement",
    getRequestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetAllMeasurementByPlantID(plantID) {
  const result = await fetch(
    url + "/api/Measurements/GetAllMeasurementByPlantID?plantID=" + plantID,
    getRequestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}

export async function GetAllMeasurementDateByPlantID(plantID, measurementDate) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    plantID: plantID,
    measurementDate: measurementDate,
  });

  var postRequestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    url + "/api/Measurements/GetAllMeasurementDateByIDQuery",
    postRequestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
  return result;
}
