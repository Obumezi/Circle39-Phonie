function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

    const userInput = document.getElementById("phone").value;
    const firstFour = String(userInput).slice(0, 4);
    const carrierName = document.getElementById("carrier-           name").innerHTML;
    const carrierImage = document.getElementById("carrier-img").src;
    const checkCarrierButton = document.getElementById("button")
  

    const carrierPatterns = [
      {
        carrierName: "MTN",
        patterns: [0803, 0703, 0903, 0806, 0706, 0813, 0810, 0814, 0816],
      },
      {
        carrierName: "GLO",
        patterns: [0805, 0705, 0905, 0807, 0815, 0811, 0905],
      },
      {
        carrierName: "AIRTEL",
        patterns: [0802, 0902, 0701, 0808, 0708, 0812],
      },
      {
        carrierName: "9MOBILE",
        patterns: [0809, 0909, 0817, 0818],
      }
    ];


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
      for (let value of carrierPatterns) {
        value.patterns.forEach((pattern) => {
          if (firstFour === pattern.toString()) {
            carrierName = value.carrierName;
            carrierImage = getCarrierImage(value.carrierName);

            console.log(carrierName)
          };
        })
      }
  
      // document.getElementsByClassName("result-card").style.display = "flex";
      
    };

    // checkCarrierButton.onClick("checkNumber()")
    checkNumber();


  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //