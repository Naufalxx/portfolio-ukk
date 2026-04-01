// PASTIIN ELEMENT ADA DULU
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("f1Form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;

    const driverEl = document.querySelector('input[name="driver"]:checked');
    const driver = driverEl ? driverEl.value : "-";

    const posisi = document.getElementById("posisi").value;

    let teams = [];
    document.querySelectorAll('input[type="checkbox"]:checked')
      .forEach(cb => teams.push(cb.value));

    const data = {
      nama,
      driver,
      team: teams.join(", "),
      posisi
    };

    localStorage.setItem("f1data", JSON.stringify(data));

    tampilkanData();
  });

  function tampilkanData() {
    const data = JSON.parse(localStorage.getItem("f1data"));
    if (!data) return;

    document.getElementById("output").innerHTML = `
      <h4>Data:</h4>
      <p>Nama: ${data.nama}</p>
      <p>Pembalap: ${data.driver}</p>
      <p>Tim: ${data.team}</p>
      <p>Posisi: ${data.posisi}</p>
    `;
  }

  tampilkanData();

});
