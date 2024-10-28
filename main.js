const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelector(".nav-link");
const hamburger = document.querySelector("#hamburger");



let pdfFile;

        // File input par change event listener
        document.getElementById('fileInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file && file.type === 'application/pdf') {
                pdfFile = file; // File ko store karna
                document.getElementById('downloadBtn').disabled = false; // Download button ko enable karna
            } else {
                alert('Please upload a valid PDF file.');
                document.getElementById('downloadBtn').disabled = true; // Invalid file par button ko disable karna
            }
        });

        // Download button par click event listener
        document.getElementById('downloadBtn').addEventListener('click', function() {
            if (pdfFile) {
                const url = URL.createObjectURL(pdfFile); // File ka URL create karna
                const a = document.createElement('a');
                a.href = url;
                a.download = pdfFile.name; // File ka naam set karna

                // Anchor element ko document me add karna
                document.body.appendChild(a);
                a.click(); // Click event trigger karna

                // Anchor element ko document se remove karna
                document.body.removeChild(a);
                URL.revokeObjectURL(url); // Object URL ko revoke karna
            }
        });


// +++++++++++++++++++++++++++++++++
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
  hamburger.classList.toggle("ri-close-large-line");
});
Array.from(navLinks).forEach((value) => {
  value.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
  });
});

// const scrollUp = () => {
//     const scrollUpBtn = document.getElementById("scroll-up");
  
//     if (this.scrollY >= 250) {
//       scrollUpBtn.classList.remove("-bottom-1/2");
//       scrollUpBtn.classList.add("bottom-4");
//     } else {
//       scrollUpBtn.classList.add("-bottom-1/2");
//       scrollUpBtn.classList.remove("bottom-4");
//     }
//   };
  
//   window.addEventListener("scroll", scrollUp);
//   /*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
//   const scrollHeader = () => {
//     const header = document.getElementById("navbar");
  
//     if (this.scrollY >= 50) {
//       header.classList.add("border-b", "border-yellow-500");
//     } else {
//       header.classList.remove("border-b", "border-yellow-500");
//     }
//   };
  
//   window.addEventListener("scroll", scrollHeader);
//   /*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
//   const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     speed: 400,
//     spaceBetween: 30,
//     autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//     },
//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     grabCursor: true,
//     breakpoints: {
//       640: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });
  /*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
  const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav-link");
  
    let current = "home";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
  
      if (this.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
    navlinks.forEach((item) => {
      item.classList.remove("active");
  
      if (item.href.includes(current)) {
        item.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", activeLink);
  /*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
//   const sr = ScrollReveal({
//     origin: "top",
//     distance: "60px",
//     duration: 2500,
//     delay: 300,
//     reset: true
//   })
  
//   sr.reveal(`.home_data, .about_top, .popular_top, .review_top, .review_swiper, .footer_icon, .footer_content, .copy_right`)
//   sr.reveal(`.home_image`,{delay: 500, scale: 0.5})