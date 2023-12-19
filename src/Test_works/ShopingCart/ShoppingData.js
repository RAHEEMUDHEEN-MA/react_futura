import axios from "axios";

// Fetch data asynchronously
const fetchData = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null in case of an error
  }
};

// Function to get and log the fetched data
const getProductData = async () => {
  const productdata = await fetchData(); // Call the fetchData function

  // Log the retrieved data
  console.log(productdata);

  return productdata; // Return the data if needed
};

export default getProductData; // Export the function for external use
