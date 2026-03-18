const form = document.getElementById('waContactForm');
        const success = document.getElementById('success');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Data Collection
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;

            // WhatsApp Settings
            const phoneNumber = "923061068574"; 
            const text = `*New Inquiry | Rania Collection*%0A%0A` +
                         `*From:* ${name}%0A` +
                         `*Email:* ${email}%0A` +
                         `*Interest:* ${service}%0A` +
                         `*Message:* ${message}`;

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

            // UI Transition
            form.classList.add('opacity-0');
            setTimeout(() => {
                form.style.display = 'none';
                success.classList.remove('hidden');
                window.open(whatsappUrl, '_blank');
            }, 600);
        });

        // Simple Reveal on load
        window.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.reveal').forEach((el, i) => {
                setTimeout(() => el.classList.add('active'), i * 300);
            });
        });