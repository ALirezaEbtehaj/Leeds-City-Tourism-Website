 // when u press on the heart button is would stay active
document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('liked');
    });
  });

  // the grid button would be active when you press on it
  document.getElementById("gridViewBtn").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("mapViewBtn").classList.remove("active");
  });

  // the map button would be active when you press on it
  document.getElementById("mapViewBtn").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("gridViewBtn").classList.remove("active");
  });