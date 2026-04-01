document.getElementById("f1Form").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let driver = document.querySelector('input[name="driver"]:checked');
  let posisi = document.getElementById("posisi").value;

  let teams = [];
  document.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(cb => teams.push(cb.value));

  let data = {
    nama: nama,
    driver: driver ? driver.value : "-",
    team: teams.join(", "),
    posisi: posisi
  };

  // SIMPAN KE LOCAL STORAGE
  localStorage.setItem("f1data", JSON.stringify(data));

  tampilkanData();
});

function tampilkanData() {
  let data = JSON.parse(localStorage.getItem("f1data"));

  if (!data) return;

  document.getElementById("output").innerHTML = `
    <h4>Data Tersimpan:</h4>
    <p>Nama: ${data.nama}</p>
    <p>Pembalap: ${data.driver}</p>
    <p>Tim: ${data.team}</p>
    <p>Posisi: ${data.posisi}</p>
  `;
}

// LOAD SAAT REFRESH
tampilkanData();
