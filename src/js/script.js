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
          <button class="details-btn"><a href="/src/pages/covoiturage-details.html">Détails</a></button>
      `;
    ridesContainer.appendChild(rideCard);
  }
}
