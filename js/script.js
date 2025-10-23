const hamburgerMenu = document.querySelector('.hamburger-menu');
            const sidebar = document.querySelector('.sidebar');
            const sidebarOverlay = document.querySelector('.sidebar-overlay');
            const sidebarClose = document.querySelector('.sidebar-close');

            function openSidebar() {
                sidebar.classList.add('active');
                sidebarOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closeSidebar() {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }

            hamburgerMenu.addEventListener('click', openSidebar);
            sidebarClose.addEventListener('click', closeSidebar);
            sidebarOverlay.addEventListener('click', closeSidebar);

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeSidebar();
                }
            });
            
  
            const sidebarLinks = document.querySelectorAll('.sidebar-link');
            sidebarLinks.forEach(link => {
                link.addEventListener('click', closeSidebar);
            });


              document.addEventListener('DOMContentLoaded', function() {
            // Check if user has already verified age
            if (!localStorage.getItem('ageVerified')) {
                // Show age verification popup after a short delay
                setTimeout(function() {
                    document.getElementById('ageVerificationPopup').style.display = 'flex';
                }, 1000);
            } else if (!localStorage.getItem('welcomeShown')) {
                // Show welcome popup if age is verified but welcome hasn't been shown
                setTimeout(function() {
                    document.getElementById('welcomePopup').style.display = 'flex';
                }, 1500);
            }

            // Check if age is already verified in localStorage
        document.addEventListener('DOMContentLoaded', function() {
            const ageVerified = localStorage.getItem('ageVerified');
            
            if (ageVerified === 'true') {
                document.querySelector('.main-content').style.display = 'block';
            } else {
                document.getElementById('ageVerificationPopup').style.display = 'flex';
            }
        });

        // Age verification functionality
        document.getElementById('submitAge').addEventListener('click', function() {
            const ageInput = document.getElementById('ageInput');
            const ageError = document.getElementById('ageError');
            const ageSuccess = document.getElementById('ageSuccess');
            
            ageError.style.display = 'none';
            ageSuccess.style.display = 'none';
            
            const age = parseInt(ageInput.value);
            
            if (isNaN(age) || age < 1 || age > 120) {
                ageError.style.display = 'block';
                return;
            }
            
            if (age < 18) {
                // Show Not Eligible popup
                document.getElementById('ageVerificationPopup').style.display = 'none';
                document.getElementById('notEligiblePopup').style.display = 'flex';
                return;
            }
            
            ageSuccess.style.display = 'block';
            localStorage.setItem('ageVerified', 'true');
            
            setTimeout(function() {
                document.getElementById('ageVerificationPopup').style.display = 'none';
                document.getElementById('welcomePopup').style.display = 'flex';
            }, 1000);
        });

        // Exit buttons
        document.getElementById('declineAge').addEventListener('click', function() {
            alert('You must be 18 or older to access this website.');
        });

        document.getElementById('exitUnderage').addEventListener('click', function() {
            window.location.href = 'https://www.google.com'; // or any safe page
        });

        // Welcome popup functionality
        document.getElementById('continueShopping').addEventListener('click', function() {
            document.getElementById('welcomePopup').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        });

        document.getElementById('closeWelcomePopup').addEventListener('click', function() {
            document.getElementById('welcomePopup').style.display = 'none';
            document.querySelector('.main-content').style.display = 'block';
        });
        });