const buttonChoice = document.getElementById("buttonChoice");
const tableInputGeneral = document.getElementById("tableInput");
const buttonReset = document.getElementById("buttonReset");

// fonction pour : 
                    // le focus
                    // les backgroundColor
                    // les regex
                    // le localStorage

focusMethod = function getFocus() {
    const inputs = document.querySelectorAll('input');
    const notes = [];
    const noteCouleur = [];
    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (tableInputGeneral.getAttribute("style")) {
                if (/^[1-4]$/.test(input.value)) {
                    if (input.value == 1) {
                        input.style.backgroundColor = "red"
                        noteCouleur.push(input.value)
                    }
                    else if (input.value == 2) {
                        input.style.backgroundColor = "orange"
                        noteCouleur.push(input.value)
                    }
                    else if (input.value == 3) {
                        input.style.backgroundColor = "yellow"
                        noteCouleur.push(input.value)
                    }
                    else if (input.value == 4){
                        noteCouleur.push(input.value)
                    }
                    if (index < inputs.length-1) {
                        const nextInput = inputs[index + 1];
                        if (nextInput) {
                            nextInput.focus();
                            input.value = '';
                        }
                    }
                    if (index == inputs.length-1) {
                        input.blur();
                        input.value = '';
                    }
                    localStorage.setItem("noteCouleur", noteCouleur);
                }
                else {
                    input.value = "";
                }
            }

            else if (!tableInputGeneral.getAttribute("style")) {
                if (/^[1-5]$/.test(input.value)) {
                    if (index < inputs.length-1) {
                        const nextInput = inputs[index + 1];
                        if (nextInput) {
                            nextInput.focus();
                            notes.push(input.value)
                        }
                    }
                    else if (index == inputs.length-1) {
                        input.blur();
                        notes.push(input.value)
                    }
                    localStorage.setItem("note", notes);
                }
                else {
                    input.value = "";
                }
            }
        });
        inputs[0].focus();
    })
}




// choix du mode :

buttonChoice.addEventListener("click", () => {
    const tableInput = document.querySelectorAll("#tableInput");
    if (tableInputGeneral.hasAttribute("hidden")) {
        tableInput.forEach(input => {
            input.removeAttribute("hidden")
        });
        focusMethod()
        buttonChoice.textContent = "choisir le mode couleur"
    }
    else if (!tableInputGeneral.getAttribute("style") &&
        !tableInputGeneral.getAttribute("hidden")) {
        console.log("else if")
        tableInput.forEach(input => {
            input.setAttribute("style", "background-color:green")
            input.value = '';
        });
        focusMethod()
        buttonChoice.textContent = "choisir le mode note"
    }
    else {
        tableInput.forEach(input => {
            input.removeAttribute("style")
            input.value = '';
        });
        focusMethod()
        buttonChoice.textContent = "choisir le mode couleur"
    }
})


// bouton qui vide les inputs et le localStorage
// buttonReset.addEventListener("click", () => {
//     const inputs = document.querySelectorAll('input');
//     inputs.forEach(input => {
//         input.value='';
//         input.removeAttribute("style")
//         localStorage.clear();
//     });
// })

