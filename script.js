const btnEl = document.querySelector(".btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

// The second function
function calculateAge() {
    const birthdayValue = birthdayEl.value;
    const ageVal = document.getElementById("age");

    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = newAge(birthdayValue);
        // resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
        ageVal.innerText = ` ${age} ${age > 1 ? " " : " "}`;
    }
}

// This is the first function
function newAge(birthdayValue) {
    const currentDate =   new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age++;
    }
return age;

}

btnEl.addEventListener("click", calculateAge);

