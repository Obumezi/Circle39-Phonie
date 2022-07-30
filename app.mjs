function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

    /* const userInput = document.getElementById("phone").value; */

  
  
    // GETTING ELEMENTS FROM THE DOM

		const userInput = document.getElementById("phone");
    let carrierName = document.getElementById("carrier-name").innerHTML;
    const carrierImage = document.getElementById("carrier-img").src;
    const checkCarrierButton = document.getElementById("button");
	let inputMessage = document.getElementById("input-message")

    
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
        patterns: ["0809", "0908", "0909", "0817"," 0818"],
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




    // TO GET ALL THE VALUES FROM EACH PATTERN ARRAY.
    // A loop in a loop.
    // First loop goes over each object in the carrierPatterns array
    // Second loop goes over each element in the patterns array of each object and logs out that pattern.

    // function checkNumber() {
    //   for (let value of carrierPatterns) {
    //     value.patterns.forEach((pattern) => {
    //       console.log(pattern)
    //     })
    //   }
    // };

    // checkCarrierButton.addEventListener("click", checkNumber());




    // TO TEST THE LOOP WITH A LOCAL VARIABLE
    // This test is to check that the right carrier name is returned if a match is found.

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

			//validityCheck
			let validNumber
	if (userInput.value.includes(+234) && userInput.value.length === 14){
		inputMessage.innerText = "This is valid Number"
		console.log(validNumber = true)
		
	}
      checkNumber()
			
    })




    // TESTING THE SLICE METHOD.
    // the number has to be converted to a string before slicing it.

    // function checkNumber() {

    //   let number = 07084044448;
    //   const localFirstFour = String(number).slice(0, 4);
    
    //   console.log(localFirstFour);
    // };

    // checkCarrierButton.addEventListener("click", checkNumber());



    
    // FIXED

    // function checkNumber() {

    //   let number = "07084044448";
    //   const localFirstFour = number.slice(0, 4);
      
    //   console.log(localFirstFour);
    // };

    // checkCarrierButton.addEventListener("click", checkNumber());




    // FINAL DESTINATION
    // Compare user input with patterns, if there's a match change the carrierName and the carrierImage in the DOM using the results from the match.

    // function checkNumber() {
    //   for (let value of carrierPatterns) {
    //     value.patterns.forEach((pattern) => {
    //       if (firstFour === pattern) {
    //         carrierName = value.carrierName;
    //         carrierImage = getCarrierImage(value.carrierName);
    //       };
    //     })
    //   }
    // };
}
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //