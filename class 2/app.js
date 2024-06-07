

// Q1

        // 1

        // let exp = "faraz" || (true + false) + 5 && " " || "true";
        // console.log(exp) //faraz//

        // 2

        // let exp1 = (true + 3) * 5 && undefined || "faraz" + 5;
        // console.log(exp1) //faraz5//

        // 3
        
        // let exp2 = 32 + "abc" || (true + false) + false || + 5 || "true";
        // console.log(exp2) //32abc//

        //4

        // let exp3 = false || (true + true) + 15 && "" || 50;
        // console.log(exp3) //50//

        // 5

        // let exp4 = (true + false) + 5 || false + 8 + "abc" || "true";
        // console.log(exp4) //6//

        //6

        // let exp5 = "faraz" || false + 10 || "true";
        // console.log(exp5) //faraz//

        //7

        // let exp6 = 12 + (false + false) + true && null || "faraz";
        // console.log(exp6) //faraz//

        //8

        // let exp7 = (false + true + false + 2) || "faraz" && false || 1 + 10;
        // console.log(exp7) //3//

        //9

        // let exp8 = (true + false) + 5 || false + 8 + "abc" || "true";
        // console.log(exp8) //6//

        //10

        // let exp9 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
        // console.log(exp9) //-13//

        // 11

        // let exp10 = (1 + 2) + ++b || 5 && 0 ; for b = 3;
        // console.log(exp10) //Uncaught //

        // 12

        // let exp11= 32 && true - ++a && " " || "true"; for a = 5;
        // console.log(exp11) //Uncaught //


//Q2

// script.js

// Sample data
const mobileData = {
  "Samsung": {
      "Galaxy S21": { ram: "8GB", camera: "64MP", battery: "4000mAh", price: "$799" },
      "Galaxy Note 20": { ram: "8GB", camera: "108MP", battery: "4500mAh", price: "$999" }
  },
  "Apple": {
      "iPhone 13": { ram: "4GB", camera: "12MP", battery: "3227mAh", price: "$799" },
      "iPhone 12": { ram: "4GB", camera: "12MP", battery: "2815mAh", price: "$699" }
  },
  "OnePlus": {
      "OnePlus 9": { ram: "8GB", camera: "48MP", battery: "4500mAh", price: "$729" },
      "OnePlus 8T": { ram: "12GB", camera: "48MP", battery: "4500mAh", price: "$599" }
  }
};

// Initialize the brand dropdown
function populateBrands() {
  const brandSelect = document.getElementById("brand");
  const brands = Object.keys(mobileData);
  brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandSelect.appendChild(option);
  });
}

// Update the models dropdown based on the selected brand
function updateModels() {
  const brand = document.getElementById("brand").value;
  const modelSelect = document.getElementById("model");

  // Clear previous options
  modelSelect.innerHTML = '<option value="">Select Model</option>';

  if (brand) {
      const models = Object.keys(mobileData[brand]);
      models.forEach(model => {
          const option = document.createElement("option");
          option.value = model;
          option.textContent = model;
          modelSelect.appendChild(option);
      });
  }
}

// Display the selected mobile details
function searchMobile() {
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const detailsDiv = document.getElementById("mobileDetails");

  if (brand && model) {
      const { ram, camera, battery, price } = mobileData[brand][model];
      detailsDiv.innerHTML = `
          <h2>${brand} ${model}</h2>
          <p><strong>RAM:</strong> ${ram}</p>
          <p><strong>Camera:</strong> ${camera}</p>
          <p><strong>Battery:</strong> ${battery}</p>
          <p><strong>Price:</strong> ${price}</p>
      `;
  } else {
      detailsDiv.innerHTML = "<p>Please select both brand and model.</p>";
  }
}

// Initialize the app
window.onload = () => {
  populateBrands();
};
