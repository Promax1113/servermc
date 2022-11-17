const textuName = document.getElementById('input');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);
}