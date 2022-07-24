function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

    /* const userInput = document.getElementById("phone").value; */

  
    const userInput = document.getElementById("phone");
    const firstFour = String(userInput).slice(0, 4);
    const carrierName = document.getElementById("carrier-name").innerHTML;
    const carrierImage = document.getElementById("carrier-img").src;
    const checkCarrierButton = document.getElementById("button")
  

    const carrierPatterns = {
        "MTN": [803, 73, 93, 86, 76, 813, 81, 814, 816],
       "GLO" :[85, 75, 95, 87, 815, 811, 95],
        "AIRTEL" : [82, 92, 71, 88, 78, 812],
        "9MOBILE" :[89, 99, 817, 818],
      }


		
		checkCarrierButton.addEventListener("click", function (e) {
   e.preventDefault();

    

			for(let prefix of carrierPatterns.MTN){
				
				if (userInput.value === carrierPatterns.MTN){
					console.log("MTN") 
				}
			}

    

  })


 


    /* function getCarrierImage(name) {
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
      
    } */

 /*  checkCarrierButton.addEventListener("click", function (e) {
   e.preventDefault();

    console.log("working") 
  }) */

  

  /*   function checkNumber() {
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


  }; */
}
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //