// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

let currentIndex = 0;
const totalImages = 20; // adjust if you add more

// Open modal
function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = `images/event${index}.jpg`;
}

// Close modal
function closeModal() {
  modal.style.display = "none";
}

// Change image
function changeSlide(n) {
  currentIndex += n;
  if (currentIndex > totalImages) currentIndex = 1;
  if (currentIndex < 1) currentIndex = totalImages;
  modalImg.src = `images/event${currentIndex}.jpg`;
}

// Close modal when clicking outside
window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};
