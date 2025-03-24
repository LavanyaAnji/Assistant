<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Medications by Patient</title>
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f9;
      color: #333;
      margin: 0;
      padding: 0;
    }

    header {
      background: #007BFF;
      color: #fff;
      padding: 20px;
      text-align: center;
      font-size: 28px;
    }

    .container {
      max-width: 1200px;
      margin: 30px auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h2 {
      text-align: center;
    }

    select, button {
      padding: 10px;
      margin: 10px;
      width: 100%;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 15px;
      border: 1px solid #ccc;
      text-align: center;
    }

    th {
      background: #007BFF;
      color: white;
    }

    tr:hover {
      background: #f1f1f1;
    }
  </style>
</head>
<body>

<header>Medications by Patient</header>

<div class="container">
  <h2>Select Patient</h2>

  <select id="patient-select" onchange="loadMedications()">
    <option value="">Select a Patient</option>
    <!-- Patient options will be dynamically loaded -->
  </select>

  <h2>Medications</h2>
  <table id="medications-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Dosage</th>
        <th>Frequency</th>
        <th>Prescribed By</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script>
  // ✅ Dataset URL (replace with your hosted Kaggle dataset URL)
  const DATASET_URL = "https://www.kaggle.com/datasets/prasad22/healthcare-dataset";

  // ✅ Load patients and populate dropdown
  async function loadPatients() {
    try {
      const res = await fetch(DATASET_URL);
      const patients = await res.json();

      const select = document.getElementById('patient-select');

      // Populate patient dropdown
      patients.forEach((patient, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = ${patient.patient_id} - ${patient.gender}, ${patient.age} yrs;
        select.appendChild(option);
      });

    } catch (error) {
      console.error("Error loading patients:", error);
    }
  }

  // ✅ Load medications for the selected patient
  async function loadMedications() {
    const selectedIndex = document.getElementById('patient-select').value;

    if (selectedIndex === "") return;

    try {
      const res = await fetch(DATASET_URL);
      const patients = await res.json();
      const patient = patients[selectedIndex];

      const table = document.querySelector('#medications-table tbody');
      table.innerHTML = '';

      if (patient.medications && patient.medications.length > 0) {
        patient.medications.forEach(med => {
          const row = `
            <tr>
              <td>${med.name}</td>
              <td>${med.dosage}</td>
              <td>${med.frequency}</td>
              <td>${med.prescribedBy}</td>
            </tr>
          `;
          table.innerHTML += row;
        });
      } else {
        table.innerHTML = '<tr><td colspan="4">No medications found</td></tr>';
      }

    } catch (error) {
      console.error("Error loading medications:", error);
    }
  }

  // ✅ Load patients on page load
  window.onload = loadPatients;
</script>

</body>
</html>
