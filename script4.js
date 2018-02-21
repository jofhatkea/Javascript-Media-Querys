
function myFunction() {
    let state=null;//keep track on which state we were in the last time
    var counter = -1;
    var exchangeContainer = document.querySelector("#exchangeContainer");
    var transferContainer = document.querySelector('#transferContainer');
    var exchangeText = document.querySelector('#exchangeText');
    var transferText = document.querySelector('#transferText');
    window.addEventListener("resize", resize);
    function resize(){
        if (window.matchMedia("(max-width: 700px)").matches) {
            mobile();
        } else {
            desktop();
        }
    }
    resize();//call it once manually for the initial setup

    function mobile(){
        if(state!="mobile"){//We only do stuff if the state has changed (so we don't keep adding eventlisteners)
            console.log("mobile");
            document.body.style.backgroundColor="yellow";
            exchangeContainer.addEventListener("click", chooseExchange);
            transferContainer.addEventListener("click", chooseTransfer);
            exchangeText.classList.add("closeText");
            transferText.classList.add("closeText");
            state="mobile";//changing the "state"
        }
    }
    function desktop(){
        if(state!="desktop"){
            console.log("desktop");
            document.body.style.backgroundColor="none";
            exchangeContainer.removeEventListener("click", chooseExchange);
            transferContainer.removeEventListener("click", chooseTransfer);
            exchangeText.classList.remove("closeText");
            transferText.classList.remove("closeText");
            state="desktop";
        }
    }
    
        
        

        


        



        function chooseExchange() {
            counter = 1;
            spanText();
        }

        function chooseTransfer() {
            counter = 2;
            spanText();
        }

        function spanText() {
            console.log("span text");
            switch (counter) {
                case 1:
                    //exchangeText.classList.toggle("openText");
                    exchangeText.classList.toggle("closeText");
                    break;
                case 2:
                    //transferText.classList.toggle("openText");
                    transferText.classList.toggle("closeText");
                    break;
                case 3:
                    console.log("what about now?")
                    //internText.classList.toggle("openText");
                    internText.classList.toggle("closeText");
                    break;
                case 4:
                    //cheatingText.classList.toggle("openText");
                    cheatingText.classList.toggle("closeText");
                    break;
                case 5:
                    //attendanceText.classList.toggle("openText");
                    attendanceText.classList.toggle("closeText");
                    break;
                case 6:
                    //teachingText.classList.toggle("openText");
                    teachingText.classList.toggle("closeText");
                    break;
            }
        }

    

}

myFunction();









/*GENERAL INFORMATIONS*/
