let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];  // Set max date to today

function calculateAge() {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  // JS months: 0-11
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        let daysInLastMonth = getDaysInMonth(y2, m2 - 1);
        d3 = daysInLastMonth + d2 - d1;
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
    }

    alert(`You are ${y3} years, ${m3} months, and ${d3} days old.`);
}

// Helper function to get number of days in a given month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();  // Month: 1-based here
}
