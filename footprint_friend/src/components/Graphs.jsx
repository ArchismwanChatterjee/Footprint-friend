/* eslint-disable react-hooks/exhaustive-deps */
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

const LineAndBarCharts = () => {
  useEffect(() => {
    // Data for the line graph
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Create request body
    var requestBody = JSON.stringify({
      username: localStorage.getItem("name"),
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
      "https://jzem48bv4g.execute-api.ap-south-1.amazonaws.com/dev/get_data",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        const responseBody = JSON.parse(result).body;
        console.log(responseBody);

        console.log(responseBody["week0"]);
        const lineData = [];
        const barData = [];
        for (const key in responseBody) {
          if (key.startsWith("week")) {
            const x = parseInt(key.replace("week", ""), 10);
            const y = parseFloat(responseBody[key]);
            lineData.push({ x, y });
          }
        }
        for (const key in responseBody) {
          if (key.startsWith("week")) {
            const label = key;
            const value = parseFloat(responseBody[key]);
            barData.push({ label, value });
          }
        }
        console.log(lineData);
        console.log(barData);
        /*const lineData = [
          { x: 0, y: 10 },
          { x: 1, y: 20 },
          { x: 2, y: 30 },
          { x: 3, y: 25 },
          { x: 4, y: 40 },
          { x: 5, y: 35 },
        ];*/

        // Data for the bar graph
        /*const barData = [
          { label: "a", value: 15 },
          { label: "b", value: 25 },
          { label: "c", value: 20 },
          { label: "d", value: 30 },
        ];*/

        // Set the dimensions of the charts
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };
        const width = 400 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        // Create scales for the line chart
        const xLine = d3
          .scaleLinear()
          .domain([0, d3.max(lineData, (d) => d.x)])
          .range([0, width]);

        const yLine = d3
          .scaleLinear()
          .domain([0, d3.max(lineData, (d) => d.y)])
          .range([height, 0]);

        // Create scales for the bar chart
        const xBar = d3
          .scaleBand()
          .domain(barData.map((d) => d.label))
          .range([0, width])
          .padding(0.2);

        const yBar = d3
          .scaleLinear()
          .domain([0, d3.max(barData, (d) => d.value)])
          .range([height, 0]);

        // Create an SVG element for the line chart
        const svgLine = d3
          .select("#line-chart")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Create an SVG element for the bar chart
        const svgBar = d3
          .select("#bar-chart")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // Add scales and axis for the line chart
        const xLineAxis = d3.axisBottom(xLine);
        const yLineAxis = d3.axisLeft(yLine);
        svgLine
          .append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0, ${height})`)
          .call(xLineAxis);
        svgLine.append("g").attr("class", "y-axis").call(yLineAxis);

        // Add scales and axis for the bar chart
        const xBarAxis = d3.axisBottom(xBar);
        const yBarAxis = d3.axisLeft(yBar);
        svgBar
          .append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0, ${height})`)
          .call(xBarAxis);
        svgBar.append("g").attr("class", "y-axis").call(yBarAxis);

        // Create the line generator with a curve interpolation
        const line = d3
          .line()
          .x((d) => xLine(d.x))
          .y((d) => yLine(d.y))
          .curve(d3.curveCardinal); // Use curveCardinal for a smooth line

        // Draw the smooth line for the line chart
        svgLine
          .append("path")
          .datum(lineData)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 2)
          .attr("d", line)
          .on("mouseover", function (d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke", "lightcoral");
          })
          .on("mouseout", function (d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("stroke", "steelblue");
          });

        // Draw the bars for the bar chart with hover animation and blue color
        svgBar
          .selectAll("rect")
          .data(barData)
          .enter()
          .append("rect")
          .attr("x", (d) => xBar(d.label))
          .attr("y", (d) => yBar(d.value))
          .attr("width", xBar.bandwidth())
          .attr("height", (d) => height - yBar(d.value))
          .attr("fill", "steelblue") // Change the bar color to blue
          .on("mouseover", function (d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("fill", "lightcoral");
          })
          .on("mouseout", function (d) {
            d3.select(this)
              .transition()
              .duration(200)
              .attr("fill", "steelblue");
          });
      })
      .catch((error) => console.log("error", error));
  }, []); // The empty dependency array ensures the code runs only once after the component is mounted

  const handleInviteClick = () => {
    alert("Invite a Friend Clicked!"); // This is just a simple alert for demonstration.
  };
  const [show] = useState(false);
  const target = useRef(null);

  return (
    <div style={{ position: "relative" }}>
      <div
        className="flex-container mx-5 align-items-center"
        style={{
          opacity: 0.8,
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: "5px",
          //   width: 1000,
          //   marginLeft: 250,
          justifyContent: "center",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "white", // Change the text color to red
          }}
        >
          {/* Your Insights */}
        </h1>
        <div className="graph-container" id="line-chart"></div>
        <div className="graph-container" id="bar-chart"></div>
        <Button
          ref={target}
          onClick={handleInviteClick}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 999, // Ensure it's above other content
          }}
        >
          INVITE
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Invite a Friend!
            </Tooltip>
          )}
        </Overlay>
      </div>
    </div>
  );
};

export default LineAndBarCharts;
