const form = document.getElementById("registerForm");
const successSection = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const institution = document.getElementById("institution").value.trim();
  const interestArea = document.getElementById("interestArea").value;
  const attendanceType = document.querySelector("input[name='attendanceType']:checked");

  if (!fullName || !email || !institution || !interestArea || !attendanceType) {
    alert("Please fill all required fields before submitting.");
    return;
  }


  const submitBtn = document.getElementById("submitBtn");
  submitBtn.textContent = "Submitting...";
  submitBtn.disabled = true;

  setTimeout(() => {
    form.classList.add("hidden");
    successSection.classList.remove("hidden");
  }, 1500);
});
