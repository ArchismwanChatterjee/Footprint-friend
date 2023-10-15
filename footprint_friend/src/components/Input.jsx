/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Form from "react-bootstrap/Form";

function RangeExample() {
  const EMISSION_FACTORS = [
    [0.14, 0.82, 1.25, 0.1], //"India"
    [0.12, 0.21, 1.0, 0.4], //"UK",
    [0.19, 0.41, 1.5, 0.6], //"USA",
    // Add more countries here as arrays with their emission factors
    [0.09, 0.05, 0.8, 0.3], //"France",
    [0.18, 0.82, 1.2, 0.5], //"Australia",
    [0.15, 0.71, 1.6, 0.7], //"China",
    [0.17, 0.85, 1.4, 0.6], //"South Africa",
    [0.13, 0.36, 1.1, 0.4], //"Germany",
    [0.15, 0.41, 1.3, 0.8], //"Russia",
  ];
  const [transport, setTransport] = useState(0);
  const [meals, setMeals] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [waste, setWaste] = useState(0);
  const [week, setWeek] = useState(1);
  //const [country, setcountry]=useState(" ");
  const containerStyle = {
    backgroundColor: "#212529", // Change this to the color of your choice
    borderRadius: "10px",
    width: 420,
    opacity: 0.8,
    height: 545,
  };

  const [responseText, setResponseText] = useState("");
  const [emission, setEmission] = useState(0);
  const [showEmission, setShowEmission] = useState(true);

  const submit = (a, b, c, d, e) => {
    //e  is week
    const selectedCountry = document.getElementById("country").value;
    let sum =
      Number(a) * EMISSION_FACTORS[selectedCountry - 1][0] +
      Number(b) * EMISSION_FACTORS[selectedCountry - 1][1] +
      Number(c) * EMISSION_FACTORS[selectedCountry - 1][2] +
      Number(d) * EMISSION_FACTORS[selectedCountry - 1][3];
    console.log(sum);
    setEmission(sum);
    sum = Math.round(sum / 10) / 100;

    //return sum;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Create request body
    var requestBody = JSON.stringify({
      transport: Number(a),
      meal: Number(b),
      electricity: Number(c),
      waste: Number(d),
    });

    // Create request options
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
      redirect: "follow",
    };

    // Make API call
    fetch(
      "https://jzem48bv4g.execute-api.ap-south-1.amazonaws.com/dev//prompt",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const responseBody = JSON.parse(result).body;
        console.log(responseBody);

        const formattedResponse = responseBody
          .split("\n")
          .map((paragraph, index) => (
            <p key={index} style={{ textAlign: "left" }}>
              {paragraph}
            </p>
          ));

        setResponseText(formattedResponse);
      })
      .catch((error) => console.log("error", error));
    console.log(
      "Selected Country: ",
      selectedCountry,
      EMISSION_FACTORS[selectedCountry - 1][0]
    );
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Create request body
    var requestBody = JSON.stringify({
      username: localStorage.getItem("name"),
      co2: sum,
      week: Number(e),
    });

    // Create request options
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: requestBody,
      redirect: "follow",
    };

    // Make API call
    fetch(
      "https://jzem48bv4g.execute-api.ap-south-1.amazonaws.com/dev/data_entry",
      requestOptions
    )
      .then((response) => response.text())
      /*.then((result) => alert(JSON.parse(result).body))*/
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="container d-flex">
      <div className="container" style={containerStyle}>
        <div className="d-flex flex-column align-items-center">
          <Form>
            <div className="my-3">
              <label className="form-label">Country</label>
              <select
                class="form-select"
                aria-label="Default select example"
                id="country"
              >
                <option selected value="1">
                  India
                </option>
                {/* <option value="1">India</option> */}
                <option value="2">USA</option>
                <option value="3">UK</option>
                <option value="4">France</option>
                <option value="5">Australia</option>
                <option value="6">China</option>
                <option value="7">South Africa</option>
                <option value="8">Germany</option>
                <option value="9">Russia</option>
              </select>
            </div>
            <div className="my-3">
              {/* <div className="text-center text-dark"> */}
              <label
                htmlFor="customRange2"
                className="form-label"
                style={{ marginRight: "10px" }}
              >
                Week number
              </label>
              <input
                type="number"
                value={week}
                min={1}
                max={8}
                onChange={(e) => setWeek(e.target.value)}
              />
            </div>
            {/* </div> */}
            <div className="my-3">
              <label htmlFor="customRange1" className="form-label">
                Transport (Km)
              </label>
              <input
                type="range"
                className="form-range"
                id="customRange1"
                onChange={(e) => {
                  setTransport(e.target.value);
                }}
                max={1000.0}
                step={0.01}
              />
              <input
                type="number"
                value={transport}
                min={0}
                onChange={(e) => setTransport(e.target.value)}
              />
            </div>

            <div className="my-3">
              <div className="text-center">
                <label htmlFor="customRange2" className="form-label">
                  Meals
                </label>
              </div>
              <input
                type="number"
                value={meals}
                min={0}
                onChange={(e) => setMeals(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label htmlFor="customRange3" className="form-label">
                Electricity Usage(KWh)
              </label>
              <input
                type="range"
                className="form-range"
                id="customRange3"
                onChange={(e) => {
                  setElectricity(e.target.value);
                }}
                max={10000}
                step={0.01}
              />
              <input
                type="number"
                value={electricity}
                min={0}
                onChange={(e) => setElectricity(e.target.value)}
              />
            </div>

            <div className="my-3">
              <label htmlFor="customRange4" className="form-label">
                Waste Produced(Kg)
              </label>
              <input
                type="range"
                className="form-range"
                id="customRange4"
                onChange={(e) => {
                  setWaste(e.target.value);
                }}
                max={1000}
                step={0.01}
              />
              <input
                type="number"
                value={waste}
                min={0}
                onChange={(e) => setWaste(e.target.value)}
              />
            </div>
            <button
              type="button"
              class="btn-success"
              onClick={() => {
                submit(transport, meals, electricity, waste, week);
              }}
            >
              Calculate
            </button>
          </Form>
        </div>
        {
          <div className="container my-3 bg-dark">
            {showEmission ? (
              <h4 className="text-success">
                Emission value={Math.round(emission / 10) / 100}
              </h4>
            ) : (
              ""
            )}
            <p>{responseText}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default RangeExample;
