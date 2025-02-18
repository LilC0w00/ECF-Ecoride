function searchRides() {
  const ridesContainer = document.getElementById("rides-container");
  ridesContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    let rideCard = document.createElement("div");
    rideCard.classList.add("ride-card");
    rideCard.innerHTML = `
          <div>
              <p><strong>6h00</strong> Paris ➝ <strong>8h00</strong> Bordeaux</p>
              <p>20$</p>
          </div>
          <a href="../pages/covoiturage-details.html"><button class="details-btn">Détails</button></a>
      `;
    ridesContainer.appendChild(rideCard);
  }
}
