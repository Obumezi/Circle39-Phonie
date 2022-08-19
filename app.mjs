"use strict"
function startApp() {
  /* const userInput = document.getElementById("phone").value; */

  // GETTING ELEMENTS FROM THE DOM

  const userInput = document.getElementById("phone");
  let carrierImage = document.getElementById("carrier-img");
  const checkCarrierButton = document.getElementById("button");
  let inputMessage = document.getElementById("input-message");
  let resultCard = document.getElementById("result-card");
  let userPhone = document.getElementById("phone-no");
  let carrierName = document.getElementById("carrier-name");
  const arrowBack = document.getElementById("arrow-back");



  const patternCheck = /((\+234)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;


  const carrierPatterns = [
    {
      carrierName: "MTN",
      patterns: ["0803", "0806", "0814", "0810", "0813", "0814", "0816", "0703", "0704", "0706", "0903", "0906"],
    },
    {
      carrierName: "GLO",
      patterns: ["0805", "0705", "0905", "0807", "0815", "0811", "0905"],
    },
    {
      carrierName: "AIRTEL",
      patterns: ["0802", "0902", "0701", "0808", "0708", "0812", "0901", "0907", "0904"],
    },
    {
      carrierName: "9MOBILE",
      patterns: ["0809", "0908", "0909", "0817", "0818"],
    }
  ];


  // A FUNCTION THAT TAKES A "name" PARAMETER AND RETURNS A PATH BASED ON THAT NAME.
  // This path will be passed to the img.src attribute.

  function getCarrierImage(name) {

    let imagePath = ""

    if (name === "MTN") {
      imagePath = "images/carrier-icons/MTN.png"
    } else if (name === "GLO") {
      imagePath = "images/carrier-icons/Globacom.png"
    } else if (name === "AIRTEL") {
      imagePath = "images/carrier-icons/Airtel.png"
    } else if (name === "9MOBILE") {
      imagePath = "images/carrier-icons/9mobile.png"
    }

    return imagePath;

  }


  // THIS FUNCTION HIDES THE RESULT CARD.
  
  arrowBack.onclick = () => {
    resultCard.style.display = "none";
  }

  
  function checkNumber() {

    let str = String(userInput.value);
    console.log(str)                      // First log || User input
    
    for (let value of carrierPatterns) {
      value.patterns.forEach((pattern) => {
        
        let regEx = null;
        
        if (str.length === 14 ) {
            regEx = new RegExp(`\\b234${pattern.slice(1)}`);
        } else if (str.length === 15) {
            regEx = new RegExp(`\\b234${pattern}`);
        } else {
            regEx = new RegExp(`\\b${pattern}`);
        }

        if (regEx.test(str)) {
          console.log(value.carrierName)    // Second Log  || Carrier name
          
          userPhone.innerText = str;
          carrierName.innerText = value.carrierName;
           
          setTimeout(() => (resultCard.style.display = "flex"), 1000);
          
          carrierImage.src = getCarrierImage(value.carrierName);
          console.log(carrierImage.src)    // Third log  || Image path url
        }
      })
    }
  };
  

  checkCarrierButton.addEventListener("click", (event) => {
    event.preventDefault()

    let phoneString = userInput.value
    let validNumber = false
    
    //validityCheck
    if ((phoneString.includes(+234) && phoneString.length === 14) || 
        (phoneString.includes("+2340") && phoneString.length === 15) || 
        (phoneString.length === 11)) {
          validNumber = true
    }


    //Detect incorrect input
    if (phoneString = "" || !phoneString.match(patternCheck) || !validNumber){
      inputMessage.innerText = "Invalid Phone Number"
      inputMessage.style.color= "red"
    } else {
      inputMessage.innerText = "Valid Number"
      inputMessage.style.color ="green"
      checkNumber();
    }
  })

}
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
