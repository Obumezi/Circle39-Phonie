"use strict"
function startApp() {
  /* const userInput = document.getElementById("phone").value; */

  // GETTING ELEMENTS FROM THE DOM

  const userInput = document.getElementById("phone");
  let carrierName = document.getElementById("carrier-name").innerHTML;
  const carrierImage = document.getElementById("carrier-img").src;
  const checkCarrierButton = document.getElementById("button");
  let inputMessage = document.getElementById("input-message")


  const patternCheck = /((\+234)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;



  const carrierPatterns = [
    {
      carrierName: "MTN",
      patterns: ["0803", "0806", "0814", "0810", "0813", "0814", "0816", "0703", "0706", "0903", "0906"],
    },
    {
      carrierName: "GLO",
      patterns: ["0805", "0705", "0905", "0807", "0815", "0811", "0905"],
    },
    {
      carrierName: "AIRTEL",
      patterns: ["0802", "0902", "0701", "0808", "0708", "0812", "0901", "0907"],
    },
    {
      carrierName: "9MOBILE",
      patterns: ["0809", "0908", "0909", "0817", " 0818"],
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
  function checkNumber() {

    let str = String(userInput.value);

    // const localFirstFour = "0809";

    for (let value of carrierPatterns) {
      value.patterns.forEach((pattern) => {
        if (str === pattern) {
          //console.log(pattern)
          console.log(value.carrierName)
        }
      })
    }
  };

  checkCarrierButton.addEventListener("click", (event) => {
    event.preventDefault()

    let phoneString = userInput.value

    //validityCheck
    let validNumber
    if (phoneString.includes(+234) && phoneString.length === 14) {

      console.log(validNumber = true)

    }
    checkNumber()
  })

}
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //
