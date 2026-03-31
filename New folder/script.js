function scrollToSection() {
  document.getElementById("tourism").scrollIntoView({ behavior: "smooth" });
}

function addReview() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const photo = document.getElementById("photo").files[0];

  if (!name || !message || !photo) {
    alert("Please fill all fields!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e) {
    const reviewHTML = `
      <div class="review">
        <img src="${e.target.result}">
        <h4>${name}</h4>
        <p>${message}</p>
      </div>
    `;

    document.querySelector(".reviews").innerHTML += reviewHTML;
  };

  reader.readAsDataURL(photo);
}