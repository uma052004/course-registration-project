const apiBaseUrl = "http://localhost:8080/api/registrations";

const tableBody = document.getElementById("dataBody");
const loadingText = document.getElementById("loadingText");
const searchInput = document.getElementById("searchInput");

let registrations = []; // global store

// Load data from DB
async function fetchData() {
    loadingText.style.display = "block";

    try {
        const res = await fetch(apiBaseUrl);
        registrations = await res.json();  // store globally
        loadingText.style.display = "none";
        displayData(registrations);

        searchInput.addEventListener("keyup", () => {
            const q = searchInput.value.toLowerCase();
            const filtered = registrations.filter(r =>
                r.fullName.toLowerCase().includes(q) ||
                r.email.toLowerCase().includes(q) ||
                r.courseName.toLowerCase().includes(q)
            );
            displayData(filtered);
        });

    } catch (error) {
        loadingText.innerText = "❌ Failed to fetch data";
    }
}

// Render table
function displayData(data) {
    tableBody.innerHTML = "";
    data.forEach(r => {
        tableBody.innerHTML += `
        <tr>
            <td>${r.id}</td>
            <td>${r.fullName}</td>
            <td>${r.email}</td>
            <td>${r.phone}</td>
            <td>${r.courseName}</td>
            <td>${r.experienceLevel}</td>
            <td>${r.preferredBatchDate}</td>
            <td>
                <button class="edit-btn" onclick="openEdit(${r.id})">✏ Edit</button>

                <button class="delete-btn" onclick="deleteRecord(${r.id})">🗑 Delete</button>
            </td>
        </tr>`;
    });
}

// Delete Registration
async function deleteRecord(id) {
    if (!confirm("Are you sure you want to delete?")) return;
    await fetch(`${apiBaseUrl}/${id}`, { method: "DELETE" });
    fetchData(); // refresh table
}

// ➤ NEW: Go to Edit Page
function openEdit(id) {
    window.location.href = "../UI-B-modern/index.html?editId=" + id;
}

// Auto load
fetchData();



