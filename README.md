# Terribly Tiny Tales
### A React.js Project created using Tailwind CSS and react charts library deployed over Vercel
## Created By Sharduli Pandey

### To Run The Project On Your Local System
## npm start

### Or 
## [Click Here](https://terribly-tiny-tales-assignment-sharduli-pandey.vercel.app/) To View The Deployed Project

## About the project:
- **Tailwind CSS** is used here to style the component of the project.
- **index.css** file contains the tailwind directives.
- **index.js** file renders the **App.js** file.
- **Submit.js** component is called in *App.js* file.
- In *Submit.js* we are fetching the text from the link **"https://www.terriblytinytales.com/test.txt"**. We are then spliting the words of text fetch from the link. We are then traversing through all the words and storing each of them's frequency in an object. We are then sorting the values. Then we are slicing the first 20 frequencies and storing it into another object.
- We are then creating **dataNew** and **options** object for plotting our chart using react chart library.
- Then we have a **onExporting** function to export the graph data into csv file. Here we are first mapping our object entries into key value pairs and joining them by *\n* and storing into **content**. Then we our creating a **blob** to make our content to text/csv file. Then we are downloading this using **saveAs** from **file-saver** to our system by the specified name.
- Then we have our jsx code for all the elements including the tailwind css defined.



## About Tailwind CSS
*Tailwind CSS is a highly customizable utility-first CSS framework. It provides a set of pre-defined utility classes that can be easily applied to HTML elements to style and layout the content. Tailwind CSS focuses on composing designs using small, reusable classes rather than writing custom CSS styles. It offers a comprehensive set of utilities for managing spacing, typography, colors, and more, allowing developers to rapidly build responsive and modern user interfaces.*

## About react chart library
*A React chart library is a collection of pre-built components and utilities designed specifically for creating and displaying charts and graphs in React applications. These libraries provide a set of reusable charting components that can be easily integrated into React projects, allowing developers to visualize data in a visually appealing and interactive manner. React chart libraries often offer a wide range of chart types, customization options, and interactivity features, making it easier to create data-driven visualizations without the need for complex coding or extensive knowledge of data visualization techniques.*