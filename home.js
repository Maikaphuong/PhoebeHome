const checkboxToggle = document.querySelector('#light-dark');

checkboxToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

function changeImage() {
    var image = document.getElementById("light-dark");
    if (image.src.match("sun.png")) {
      image.src = "half-moon.png";
    } else {
      image.src = "sun.png";
    }
    
  } 