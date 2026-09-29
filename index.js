function checkEligibility() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let membership = document.getElementById("membership").value;
    let result = document.getElementById("result");

    if (name === "" || membership === "" || age === 0) {
        result.innerHTML = "Please fill all fields.";
        result.style.color = "red";
        return;
    }

    if (age >= 18) {
        result.innerHTML = "✅ Congratulations " + name +
        "! You are eligible for the " + membership + " membership.";
        result.style.color = "green";
    } else {
        result.innerHTML = "❌ Sorry! Only applicants aged 18 years or above can apply.";
        result.style.color = "red";
    }
}