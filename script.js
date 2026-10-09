/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function () {

    // Add or remove dark-mode class
    document.body.classList.toggle("dark-mode");


    // Change the button icon
    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


/* =========================
   ADD RECOMMENDATION
========================= */

function addRecommendation() {

    // Get the values entered by the user

    const name =
        document.getElementById("nameInput").value;

    const recommendation =
        document.getElementById(
            "recommendationInput"
        ).value;


    // Check if fields are empty

    if (name === "" || recommendation === "") {

        alert("Please fill in both fields!");

        return;
    }


    // Find the recommendation section

    const recommendationList =
        document.getElementById(
            "recommendationList"
        );


    // Create a new HTML element

    const newRecommendation =
        document.createElement("div");


    // Give it the recommendation class

    newRecommendation.className =
        "recommendation";


    // Add the user's information

    newRecommendation.innerHTML = `
        <p>"${recommendation}"</p>

        <h4>— ${name}</h4>
    `;


    // Add it to the page

    recommendationList.appendChild(
        newRecommendation
    );


    // Clear the input fields

    document.getElementById(
        "nameInput"
    ).value = "";


    document.getElementById(
        "recommendationInput"
    ).value = "";


    // Show success message

    alert(
        "Recommendation added successfully! ⭐"
    );

}