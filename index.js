function loadImage() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = function () {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const img = document.getElementById("my-image");
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  input.click();
}
