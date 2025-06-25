
document.addEventListener("DOMContentLoaded", function () {
    // Search box validation if the the search box is empty and user press on the button error would show up
    const searchBtn = document.getElementById("searchBtn");
    const searchBox = document.getElementById("searchBox");
  
    if (searchBtn && searchBox) {
      searchBtn.addEventListener("click", function () {
        const searchValue = searchBox.value.trim();
        if (searchValue === "") {
          alert(" Please enter a valid input before clicking on the button.");
        }
      });
    }


    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
      const triggerBottom = window.innerHeight * 0.9;
    
      reveals.forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
    
        if (boxTop < triggerBottom) {
          el.classList.add('active');
        }
      });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll); 
  
    // Date validation when user chose start date higer than end date it shows a error 
    const findBtn = document.getElementById("findBtn");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
  
    if (findBtn && startDate && endDate) {
      findBtn.addEventListener("click", function () {
        const start = new Date(startDate.value);
        const end = new Date(endDate.value);
  
        if (!startDate.value || !endDate.value) return;
  
        if (start > end) {
          alert(" Start Date cannot be after End Date!");
        }
      });
    }

    
document.querySelectorAll("#ratingButtons button").forEach(btn => {
    btn.addEventListener("click", function () {
      document.querySelectorAll("#ratingButtons button").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });
  });
  
  // price validation the min price cannot be higher than max price
  document.getElementById("applyFilters").addEventListener("click", function () {
    const min = parseFloat(document.getElementById("minPrice").value);
    const max = parseFloat(document.getElementById("maxPrice").value);
  
    if (!isNaN(min) && !isNaN(max) && min > max) {
      alert("Min price cannot be higher than Max price.");
      return;
    }
    else{
        alert("Filteration applied")
    }
  });

    
  });

  // when u press on the heart button is would stay active
  document.addEventListener("DOMContentLoaded", () => {
    const heartButtons = document.querySelectorAll(".heart-btn");

    heartButtons.forEach(button => {
      button.addEventListener("click", () => {
        button.classList.toggle("liked");
      });
    });
  });