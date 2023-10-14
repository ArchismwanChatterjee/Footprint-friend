import { useState } from "react";
import Form from "react-bootstrap/Form";

function RangeExample() {
  const [transport, setTransport] = useState(0);
  const [meals, setMeals] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [waste, setWaste] = useState(0);
  const [week, setWeek] = useState(0);

  const containerStyle = {
    backgroundColor: "#212529", // Change this to the color of your choice
    borderRadius: "10px",
    width: 400,
  };

  
  return (
    < div className="container">
      <div className="my-3">
              <div className="text-center text-dark">
                <label htmlFor="customRange2" className="form-label">
                  Week number
                </label>
              </div>
              <input
                type="number"
                value={week}
                min={0}
                max={53}
                onChange={(e) => setWeek(e.target.value)}
              />
            </div>
      <div className="container" style={containerStyle}>
        <div className="d-flex flex-column align-items-center">
          <Form>
            <div className="my-3">
              <label className="form-label">Country</label>
              <input
                type="select"
                className="form-range"
                id="countryVal"
                value={"India"}
              />
            </div>
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
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RangeExample;
