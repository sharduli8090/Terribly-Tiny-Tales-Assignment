import React from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";

// Registering the chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

// Main Functional Component
const Submit = () => {

  // useState variables
  
  // for hiding the submit button on click
  const [clicked, setClicked] = useState(false);

  // for storing the object entries of top 20 words
  const [obj, setObj] = useState({});

  // function called after the submit button is clicked
  const submitClicked = async () => {

    // setting the clicked var value to true
    setClicked(true);

    // fetching data from the provided link
    const response = await fetch("https://www.terriblytinytales.com/test.txt");

    // converting the response from the fetch call to text
    const txt = await response.text();

    // spliting the text response and storing it in words array
    const words = txt.split(/\s+/);

    // object to store words and their frequencies
    const wordFrequencies = {};

    // looping through the words array and storing the word and their frequencies in above created array
    for (const i of words) {
      if (wordFrequencies[i]) {
        wordFrequencies[i]++;
      } else {
        wordFrequencies[i] = 1;
      }
    }

    // Sorting the object entries according to their frequency
    const arr = Object.entries(wordFrequencies).sort(
      (a, b) => b[1] - a[1]
    );

    // slicing the first 20 key values and storing it in another object
    const top20words = arr.slice(0, 20);

    // creating object from entries
    const top20wordsFrequency = Object.fromEntries(top20words);

    // setting the useState obj  
    setObj(top20wordsFrequency);
  };

  // creating objects for graphs
  const dataNew = {
    datasets: [
      {
        data: Object.values(obj),
        backgroundColor: "#e76f51",
      },
    ],
    labels: Object.keys(obj),
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "20 Most Occuring Words",
        font: { size: 18, weight: "bold" },
      },
    },
    scales: {
      y: {
        ticks: {
          font: { size: 14 },
        },
      },
    },
  };

  // function to be called on clickincg on export button
  const onExporting = () => {

    // try catch block
    try {

      // mapping through object and joining key value pairs by '\n'
      const content = Object.entries(obj)
        .map(([key, value]) => `${key}; ${value}`)
        .join("\n");

      // above mapping is used to create the blob of text/csv
      const blob = new Blob([content], { type: "text/csv;charset=utf-8" });

      // saving this to the local system by specified name 
      saveAs(blob, "TwentyMostOccuringWords.csv");

    } catch (error) {

      // error catching if any error occurs while exporting
      console.error("Error exporting CSV:", error);

    }
  };

  return (
    <>
    
      {clicked && (
        <div className="w-full inline-flex items-center  flex-col mt-10">
          {/* Graph */}
          <div className=" h-3/6 w-3/6 p-8 border-4">
            <Bar data={dataNew} options={options} />
          </div>
          {/* Export Button */}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-12"
            onClick={onExporting}
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Export to CSV</span>
          </button>
        </div>
      )}

      {!clicked && (
        <div className="w-full inline-flex items-center flex-col mt-28">
          {/* Submit Button */}
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-28 w-44 text-xl"
            onClick={() => submitClicked()}
          >
            Submit
          </button>
        </div>
      )}
    </>
  );
};

export default Submit;
