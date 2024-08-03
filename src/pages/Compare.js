document.addEventListener('DOMContentLoaded', function () {
    const compareLink = document.getElementById('compareLink');
    const contentDiv = document.getElementById('content');
  
    const data = [
      { specification: "Battery", lite: "1.8Kwh", se03: "2.7Kwh", max: "2.7Kwh" },
      { specification: "Battery features", lite: "LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)", se03: "LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)", max: "LFP with 1500 cycles\nActive Balancing\nWaterproof (IP67)" },
      { specification: "Battery warranty", lite: "3 years", se03: "3 years", max: "3 years" },
      { specification: "Charging time", lite: "3 hours (12A)", se03: "4 hours (12A)", max: "4 hours (12A)" },
      { specification: "Motor", lite: "1500W", se03: "1500W", max: "2000W" },
      { specification: "Max speed", lite: "55 km/h", se03: "55 km/h", max: "65 km/h" },
      { specification: "Warranty on electronics", lite: "1 year", se03: "1 year", max: "1 year" },
      { specification: "Max range (@30km/h)", lite: "100 km", se03: "150 km", max: "120 km" },
      { specification: "Max range (@45km/h)", lite: "90 km", se03: "110 km", max: "100 km" },
      { specification: "Max range (@full speed)", lite: "60 km", se03: "90 km", max: "80 km" },
      { specification: "Other key benefits", lite: "Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe", se03: "Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe", max: "Fire-safe Battery\nRange prediction\nComfortable ride\nStable and safe" }
    ];
    
  
    const createComparisonTable = () => {
      const tableBody = document.querySelector("#comparisonTable tbody");

      data.forEach(rowData => {
          const row = document.createElement("tr");
          rowData.forEach(cellData => {
              const cell = document.createElement("td");
              cell.innerHTML = cellData;
              row.appendChild(cell);
          });
          tableBody.appendChild(row);
      });
  
    compareLink.addEventListener('click', function () {
      contentDiv.innerHTML = createComparisonTable();
    });
  };
})