const form = document.getElementById('uploadForm');
const imageUpload = document.getElementById('imageUpload');
const preview = document.getElementById('preview');
const predictionText = document.getElementById('prediction');

imageUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const file = imageUpload.files[0];
  if (!file) {
    alert("Please upload an image.");
    return;
  }

  // Simulated result (Replace with actual model inference result)
  predictionText.textContent = "Predicted: Eosinophil";
});
