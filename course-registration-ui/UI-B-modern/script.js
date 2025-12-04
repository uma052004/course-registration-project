const apiBaseUrl = "http://localhost:8080/api/registrations";

const urlParams = new URLSearchParams(window.location.search);
const editId = urlParams.get("editId");

// If editing → load data to form
if (editId) {
    document.getElementById("submitBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline-block";

    fetch(`${apiBaseUrl}/${editId}`)
        .then(res => res.json())
        .then(r => {
            document.getElementById("fullName").value = r.fullName;
            document.getElementById("email").value = r.email;
            document.getElementById("phone").value = r.phone;
            document.getElementById("courseName").value = r.courseName;
            document.getElementById("experienceLevel").value = r.experienceLevel;
            document.getElementById("preferredBatchDate").value = r.preferredBatchDate;
            document.getElementById("comments").value = r.comments;
        });
}

// SUBMIT new registration
document.getElementById("submitBtn").addEventListener("click", () => {
    const registration = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        courseName: courseName.value,
        experienceLevel: experienceLevel.value,
        preferredBatchDate: preferredBatchDate.value,
        comments: comments.value
    };

    fetch(apiBaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registration)
    }).then(() => {
        alert("Registration added successfully!");
        window.location.href = "../UI-C/dashboard.html";
    });
});

// UPDATE existing registration
document.getElementById("updateBtn").addEventListener("click", () => {
    const updated = {
        fullName: fullName.value,
        email: email.value,
        phone: phone.value,
        courseName: courseName.value,
        experienceLevel: experienceLevel.value,
        preferredBatchDate: preferredBatchDate.value,
        comments: comments.value
    };

    fetch(`${apiBaseUrl}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
    }).then(() => {
        alert("Updated successfully!");
        window.location.href = "../UI-C/dashboard.html";
    });
});
