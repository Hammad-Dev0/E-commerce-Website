

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

// -------------------------------------------------------------------------------------------------------



// ------------------------------------------------------------------------------------------------------
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


// ----------------------------------------------------------------------------------------------------


// 4pc 
document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.productCard');
            const modal = document.getElementById('productModal');
            const closeBtn = document.getElementById('closeModal');
            
            const modalImg = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalPrice = document.getElementById('modalPrice');
            const whatsappBtn = document.getElementById('whatsappBtn');

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // Extract data from clicked card
                    const title = card.querySelector('h3').innerText;
                    const price = card.querySelector('.text-red-600').innerText;
                    const imgSrc = card.querySelector('img').getAttribute('src');

                    // Update Modal
                    modalTitle.innerText = title;
                    modalPrice.innerText = price;
                    modalImg.src = imgSrc;
                    
                    // Update WhatsApp link with the specific product name
                    const message = encodeURIComponent(`Hi! I'm interested in the ${title} priced at ${price}. Is it available?`);
                    whatsappBtn.href = `https://wa.me/923061608574?text=${message}`;

                    // Show Modal
                    modal.classList.remove('hidden-modal');
                    document.body.style.overflow = 'hidden';
                });
            });

            // Close Logic
            const closeModal = () => {
                modal.classList.add('hidden-modal');
                document.body.style.overflow = 'auto';
            };

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
        });


        //---------------------------------------------------------------------------------------------

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


// ----------------------------------------------------------------------------------------------------


// ---lawn is Here----


document.addEventListener("DOMContentLoaded", () => {
    const lawnModal = document.getElementById('lawn-modal');
    const lawnClose = document.getElementById('lawn-close');
    const lawnCards = document.querySelectorAll('.lawn-card');

    // Modal elements
    const modalImg = document.getElementById('lawn-modal-img');
    const modalTitle = document.getElementById('lawn-modal-title');
    const modalPrice = document.getElementById('lawn-modal-price');
    const waBtn = document.getElementById('lawn-whatsapp-btn');

    const whatsappNumber = "923061608574";

    lawnCards.forEach(card => {
        card.addEventListener('click', () => {
            // Pick data from the specific card clicked
            const title = card.querySelector('.lawn-name').innerText;
            const price = card.querySelector('.lawn-price').innerText;
            const imgSrc = card.querySelector('.lawn-img').src;

            // Inject into Modal
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Dynamic WhatsApp link
            const waMessage = encodeURIComponent(`Hi, I am interested in ${title} priced at ${price}. Is it available?`);
            waBtn.href = `https://wa.me/${whatsappNumber}?text=${waMessage}`;

            // Reveal Modal
            lawnModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeLawnModal = () => {
        lawnModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    lawnClose.addEventListener('click', closeLawnModal);
    
    // Close when clicking outside the box
    lawnModal.addEventListener('click', (e) => {
        if (e.target === lawnModal) closeLawnModal();
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


// ------------------------------------------------------------------------------------------------------
// ----nishat Lawn----

document.addEventListener("DOMContentLoaded", () => {
    const nishatModal = document.getElementById('nishat-modal');
    const nishatClose = document.getElementById('nishat-close');
    const nishatCards = document.querySelectorAll('.nishat-card');

    // Modal target elements
    const modalImg = document.getElementById('nishat-modal-img');
    const modalTitle = document.getElementById('nishat-modal-title');
    const modalPrice = document.getElementById('nishat-modal-price');
    const waBtn = document.getElementById('nishat-whatsapp-btn');

    const whatsappNumber = "923061608574";

    nishatCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract data from the clicked card
            const title = card.querySelector('.nishat-name').innerText;
            const price = card.querySelector('.nishat-price').innerText;
            const imgSrc = card.querySelector('.nishat-img').src;

            // Fill the modal with card data
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Update WhatsApp link with product details
            const message = encodeURIComponent(`Assalam-o-Alaikum, I'm interested in buying Nishat Lawn: ${title} (${price}). Please let me know if it's in stock.`);
            waBtn.href = `https://wa.me/${whatsappNumber}?text=${message}`;

            // Reveal Modal
            nishatModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop page scroll
        });
    });

    const closeNishatModal = () => {
        nishatModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore page scroll
    };

    // Close on button click
    nishatClose.addEventListener('click', closeNishatModal);
    
    // Close on clicking outside the white box
    nishatModal.addEventListener('click', (e) => {
        if (e.target === nishatModal) closeNishatModal();
    });
});


// ----------------------------------------------------------------------------------------------------

// ---gul Lawn---
document.addEventListener("DOMContentLoaded", () => {
    const gullModal = document.getElementById('gull-modal');
    const gullClose = document.getElementById('gull-close');
    const gullCards = document.querySelectorAll('.gull-card');

    // Modal target elements
    const modalImg = document.getElementById('gull-modal-img');
    const modalTitle = document.getElementById('gull-modal-title');
    const modalPrice = document.getElementById('gull-modal-price');
    const waBtn = document.getElementById('gull-whatsapp-btn');

    const whatsappNumber = "923061608574";

    gullCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract data from the clicked Gullawan card
            const title = card.querySelector('.gull-name').innerText;
            const price = card.querySelector('.gull-price').innerText;
            const imgSrc = card.querySelector('.gull-img').src;

            // Fill the modal with card data
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Update WhatsApp link with product details
            const message = encodeURIComponent(`Assalam-o-Alaikum, I'm interested in buying Gullawan Lawn: ${title} (${price}). Please let me know if it's in stock.`);
            waBtn.href = `https://wa.me/${whatsappNumber}?text=${message}`;

            // Reveal Modal
            gullModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop page scroll
        });
    });

    const closeGullModal = () => {
        gullModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore page scroll
    };

    // Close on button click
    gullClose.addEventListener('click', closeGullModal);
    
    // Close on clicking outside the white box
    gullModal.addEventListener('click', (e) => {
        if (e.target === gullModal) closeGullModal();
    });
});


// ----------------------------------------------------------------------------------------------------


// ---curatin js----

document.addEventListener("DOMContentLoaded", () => {
    const curtainModal = document.getElementById('curtain-modal');
    const curtainClose = document.getElementById('curtain-close');
    const curtainCards = document.querySelectorAll('.curtain-card');

    // Modal elements
    const modalImg = document.getElementById('curtain-modal-img');
    const modalTitle = document.getElementById('curtain-modal-title');
    const modalPrice = document.getElementById('curtain-modal-price');
    const waBtn = document.getElementById('curtain-whatsapp-btn');

    const whatsappNumber = "923061608574"; // Your WhatsApp Number

    curtainCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract data from the clicked curtain card
            const title = card.querySelector('.curtain-name').innerText;
            const price = card.querySelector('.curtain-price').innerText;
            const imgSrc = card.querySelector('.curtain-img').src;

            // Fill the modal with card data
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Dynamic WhatsApp link with curtain details
            const message = encodeURIComponent(`Hi, I'm interested in buying this curtain: ${title} (${price}). Please confirm availability.`);
            waBtn.href = `https://wa.me/${whatsappNumber}?text=${message}`;

            // Show Modal
            curtainModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });
    });

    const closeCurtainModal = () => {
        curtainModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    };

    curtainClose.addEventListener('click', closeCurtainModal);
    
    // Close modal if clicking on the dark background
    curtainModal.addEventListener('click', (e) => {
        if (e.target === curtainModal) closeCurtainModal();
    });
});


// ----------------------------------------------------------------------------------------------------

// ---Curtain js 2---

document.addEventListener('DOMContentLoaded', () => {
    // Selectors
    const modal = document.getElementById('product-detail-modal');
    const closeBtn = document.getElementById('modal-close-trigger');
    const productCards = document.querySelectorAll('.product-item');

    // Modal Display Elements
    const modalImg = document.getElementById('modal-main-image');
    const modalTitle = document.getElementById('modal-product-name');
    const modalPrice = document.getElementById('modal-product-price');
    const whatsappBtn = document.getElementById('whatsapp-order-link');

    const BUSINESS_PHONE = "923061608574"; // Set your number here

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get data from the clicked card
            const title = card.querySelector('.product-title-label').innerText;
            const price = card.querySelector('.product-price-tag').innerText;
            const imgSrc = card.querySelector('.product-thumbnail').getAttribute('src');

            // Populate Modal
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalPrice.innerText = price;

            // Update WhatsApp Link
            const encodedMsg = encodeURIComponent(`Hello, I would like to order the ${title} (${price}). Please confirm availability.`);
            whatsappBtn.href = `https://wa.me/${BUSINESS_PHONE}?text=${encodedMsg}`;

            // Reveal Modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        });
    });

    // Close functionality
    const hideModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; 
    };

    closeBtn.addEventListener('click', hideModal);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) hideModal();
    });
});


// ----------------------------------------------------------------------------------------------------

// ---Alkaram Fabric MENS---

document.addEventListener('DOMContentLoaded', () => {
    const alkaramModal = document.getElementById('alkaram-modal');
    const alkaramClose = document.getElementById('alkaram-close-btn');
    const alkaramCards = document.querySelectorAll('.alkaram-card');

    // Modal Dynamic Elements
    const modalImg = document.getElementById('alkaram-modal-display-img');
    const modalTitle = document.getElementById('alkaram-modal-display-title');
    const modalPrice = document.getElementById('alkaram-modal-display-price');
    const modalWhatsapp = document.getElementById('alkaram-whatsapp-order-btn');

    const PHONE_NUMBER = "923061608574"; // Change to your number

    alkaramCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.alkaram-name').innerText;
            const price = card.querySelector('.alkaram-price').innerText;
            const imgSrc = card.querySelector('.alkaram-img').getAttribute('src');

            // Sync Modal Content
            modalImg.src = imgSrc;
            modalTitle.innerText = name;
            modalPrice.innerText = price;

            // Update WhatsApp link
            const text = encodeURIComponent(`Assalamu Alaikum, I am interested in purchasing: ${name} for ${price}. Is it available?`);
            modalWhatsapp.href = `https://wa.me/${PHONE_NUMBER}?text=${text}`;

            // Show Modal
            alkaramModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        });
    });

    const closeAlkaramModal = () => {
        alkaramModal.classList.add('hidden');
        document.body.style.overflow = ''; 
    };

    alkaramClose.addEventListener('click', closeAlkaramModal);

    // Close on clicking outside the white box
    alkaramModal.addEventListener('click', (e) => {
        if (e.target === alkaramModal) closeAlkaramModal();
    });
});


// ----------------------------------------------------------------------------------------------------

// ---Kids Collection---

document.addEventListener('DOMContentLoaded', () => {
    // Selectors for Kids Section
    const juniorModal = document.getElementById('junior-detail-modal');
    const juniorClose = document.getElementById('junior-modal-close');
    const kidsCards = document.querySelectorAll('.kids-product-card');

    // Kids Modal Elements
    const kidsImgDisplay = document.getElementById('junior-modal-img');
    const kidsTitleDisplay = document.getElementById('junior-modal-title');
    const kidsPriceDisplay = document.getElementById('junior-modal-price');
    const kidsWhatsappBtn = document.getElementById('junior-whatsapp-btn');

    const BUSINESS_PHONE = "923061608574"; // Your WhatsApp Number

    kidsCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extract kids-specific data
            const name = card.querySelector('.kids-item-name').innerText;
            const price = card.querySelector('.kids-item-price').innerText;
            const imgSrc = card.querySelector('.kids-item-img').getAttribute('src');

            // Populate Junior Modal
            kidsImgDisplay.src = imgSrc;
            kidsTitleDisplay.innerText = name;
            kidsPriceDisplay.innerText = price;

            // Generate WhatsApp Link
            const message = encodeURIComponent(`Hi, I want to order this Kids Collection item: ${name} (${price}). Please guide me about available sizes.`);
            kidsWhatsappBtn.href = `https://wa.me/${BUSINESS_PHONE}?text=${message}`;

            // Open Modal
            juniorModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        });
    });

    // Close logic
    const closeJuniorModal = () => {
        juniorModal.classList.add('hidden');
        document.body.style.overflow = ''; 
    };

    juniorClose.addEventListener('click', closeJuniorModal);

    // Close on backdrop click
    juniorModal.addEventListener('click', (e) => {
        if (e.target === juniorModal) closeJuniorModal();
    });
});

// ----------------------------------------------------------------------------------------------------

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

    // -------------------------------------------------------------------------------------------------

    // ----Dynamic year-----

    document.querySelector('#footer-year').textContent = new Date().getFullYear();

    // -------------------------------------------------------------------------------------------------