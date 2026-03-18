
// ---Mobile Menu Close---
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu1 = document.getElementById("mobileMenu");

openMenu.addEventListener("click", () => {
  mobileMenu1.classList.remove("-translate-x-full");
  document.body.classList.add("overflow-hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu1.classList.add("-translate-x-full");
  document.body.classList.remove("overflow-hidden");
});

// ----------------------------------------------------------------------------------------------------


// ---for search bar---
const searchInput = document.querySelector('#searchBar input');
const products = [
  { name: '4Pc Velvet Jaquard Bedsheet', category: 'Home' },
  { name: 'Cotton Curtains', category: 'Home' },
  { name: 'Summer Lawn Suit', category: 'Clothing' }
];

searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  
  // Filter your products based on what is typed
  const filtered = products.filter(product => 
    product.name.toLowerCase().includes(term)
  );

  console.log(filtered); // In a real app, you would update the UI here
});

// ------------------------------------------------------------------------------------------------------

// ----CART and open Search-------
const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtns = document.querySelectorAll(".closeCart");
const continueShopping = document.getElementById("continueShopping");

cartBtn.addEventListener("click", () => {
  cartDrawer.classList.remove("translate-x-full");
  cartOverlay.classList.remove("invisible", "opacity-0");
});

function closeCart() {
  cartDrawer.classList.add("translate-x-full");
  cartOverlay.classList.add("opacity-0");

  setTimeout(() => {
    cartOverlay.classList.add("invisible");
  }, 300);
}

closeCartBtns.forEach(btn => {
  btn.addEventListener("click", closeCart);
});

continueShopping.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// SEARCH
const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");

searchBtn.addEventListener("click", () => {
  searchBar.classList.remove("hidden");
});

closeSearch.addEventListener("click", () => {
  searchBar.classList.add("hidden");
});

// `------------------------------------------------------------------------------------------------------

// ---image carasaoul
const track = document.getElementById('carouselTrack');
const slides = track.children;
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('bg-black'));
  dots[i].classList.add('bg-black');
}

// Dot click event
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

// Auto-slide every 5 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 2500);


// ----------------------------------------------------------------------------------------------------

    // ----back to top button----

    document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Show button after scrolling down 300px
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'invisible');
            backToTop.classList.add('opacity-100', 'visible');
        } else {
            backToTop.classList.add('opacity-0', 'invisible');
            backToTop.classList.remove('opacity-100', 'visible');
        }
    });

    // Smooth scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



// --------------------------------------------------------------------------------------------------------
 // ----back to top button----

    document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        // Show button after scrolling down 300px
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'invisible');
            backToTop.classList.add('opacity-100', 'visible');
        } else {
            backToTop.classList.add('opacity-0', 'invisible');
            backToTop.classList.remove('opacity-100', 'visible');
        }
    });

    // Smooth scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ----------------------------------------------------------------------------------------------------


// ---nurah lawn is here---
document.addEventListener("DOMContentLoaded", () => {
    const nurehModal = document.getElementById('nureh-modal');
    const nurehClose = document.getElementById('nureh-close');
    const nurehCards = document.querySelectorAll('.nureh-card');

    // Modal elements
    const modalImg = document.getElementById('nureh-modal-img');
    const modalTitle = document.getElementById('nureh-modal-title');
    const modalPrice = document.getElementById('nureh-modal-price');
    const waBtn = document.getElementById('nureh-whatsapp-btn');

    const whatsappNumber = "923061608574";

    nurehCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pick data from the specific card clicked
            const title = card.querySelector('.nureh-name').innerText;
            const price = card.querySelector('.nureh-price').innerText;
            const imgSrc = card.querySelector('.nureh-img').src;

            // Inject into Modal
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Dynamic WhatsApp link with Nureh details
            const waMessage = encodeURIComponent(`Assalam-o-Alaikum, I am interested in Nureh Lawn: ${title} (${price}). Is this design available?`);
            waBtn.href = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            // Show Modal
            nurehModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });
    });

    const closeNurehModal = () => {
        nurehModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    };

    nurehClose.addEventListener('click', closeNurehModal);
    
    // Close modal if clicking on the dark background
    nurehModal.addEventListener('click', (e) => {
        if (e.target === nurehModal) closeNurehModal();
    });
});

// --------------------------------------------------------------------------------------------------------


        // Dynamic contact meassage

        document.addEventListener("DOMContentLoaded", () => {
    const waLink = document.getElementById('dynamicLineLink');

    // Example: Dynamically update the phone number or message
    const phoneNumber = "923061608574";
    const customMessage = encodeURIComponent("Hello! I'm interested in a design project.");
    
    // Set the href dynamically
    waLink.href = `https://wa.me/${phoneNumber}?text=${customMessage}`;

    // Optional: Log when a user clicks the contact line
    waLink.addEventListener('click', () => {
        console.log("User redirected to WhatsApp.");
    });
});



// --------------------------------------------------------------------------------------------------------

// Customer supprt

document.addEventListener('DOMContentLoaded', () => {
        const juniorContainer = document.getElementById('junior-services-container');
        const animatedIcons = juniorContainer.querySelectorAll('.junior-animated-icon');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Start animation when 20% of the element is visible
        };

        const iconObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start the drawing animation
                    entry.target.style.animation = 'juniorDrawLine 1.5s ease-out forwards';
                    iconObserver.unobserve(entry.target); // Run animation only once
                }
            });
        }, observerOptions);

        animatedIcons.forEach(icon => {
            iconObserver.observe(icon);
        });
    });


    // --------------------------------------------------------------------------------------------------------

    // ---footer year dynamic---

    document.querySelector('#footer-year').textContent = new Date().getFullYear();