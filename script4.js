function myFunction() {
    if (window.matchMedia("(min-width: 700px)").matches) {
        document.body.style.backgroundColor="yellow";

        var counter = -1;
        var exchangeContainer = document.querySelector("#exchangeContainer");
        var transferContainer = document.querySelector('#transferContainer');
        var exchangeText = document.querySelector('#exchangeText');
        var transferText = document.querySelector('#transferText');


        exchangeContainer.addEventListener("click", chooseExchange);
        transferContainer.addEventListener("click", chooseTransfer);



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
    else {

    }

}

myFunction();









/*GENERAL INFORMATIONS*/
