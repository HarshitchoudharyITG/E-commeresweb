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

            // Age verification handlers
            document.getElementById('submitAge').addEventListener('click', function() {
                const ageInput = document.getElementById('ageInput');
                const ageError = document.getElementById('ageError');
                const underAgeError = document.getElementById('underAgeError');
                const ageSuccess = document.getElementById('ageSuccess');
                
                // Reset error messages
                ageError.style.display = 'none';
                underAgeError.style.display = 'none';
                ageSuccess.style.display = 'none';
                
                const age = parseInt(ageInput.value);
                
                // Validate age
                if (isNaN(age) || age < 1 || age > 120) {
                    ageError.style.display = 'block';
                    return;
                }
                
                if (age < 18) {
                    underAgeError.style.display = 'block';
                    return;
                }
                
                // Age is valid and user is 18+
                ageSuccess.style.display = 'block';
                
                // Store verification and show welcome popup
                setTimeout(function() {
                    localStorage.setItem('ageVerified', 'true');
                    document.getElementById('ageVerificationPopup').style.display = 'none';
                    
                    // Show welcome popup after age verification
                    setTimeout(function() {
                        document.getElementById('welcomePopup').style.display = 'flex';
                    }, 500);
                }, 1000);
            });

            // Allow pressing Enter to submit age
            document.getElementById('ageInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    document.getElementById('submitAge').click();
                }
            });

            document.getElementById('declineAge').addEventListener('click', function() {
                // Redirect users under 18 to a safe page or show a message
                alert('You must be 18 or older to access this website.');
                // Optionally redirect: window.location.href = 'https://example.com';
            });

            // Welcome popup handlers
            document.getElementById('closeWelcomePopup').addEventListener('click', function() {
                document.getElementById('welcomePopup').style.display = 'none';
                localStorage.setItem('welcomeShown', 'true');
            });

            document.getElementById('continueShopping').addEventListener('click', function() {
                document.getElementById('welcomePopup').style.display = 'none';
                localStorage.setItem('welcomeShown', 'true');
            });
        });