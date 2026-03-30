document.addEventListener('DOMContentLoaded', () => {
    
    // Initial hero animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.fade-in-up');
        heroElements.forEach((el, index) => {
            el.classList.add('visible');
        });
    }, 100);

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };
    
    // Trigger once on load
    revealOnScroll();
    
    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);

    // Navbar blur effect on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 20, 30, 0.8)';
            navbar.style.border = '1px solid var(--glass-border)';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        } else {
            navbar.style.background = 'rgba(15, 20, 30, 0.4)';
            navbar.style.border = '1px solid transparent';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 40;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Simulator for ChalkOS Fleet Command Dashboard ---
    const deviceGrid = document.getElementById('simulated-device-grid');
    if (deviceGrid) {
        const numDevices = 30; // 30-laptop lab
        const devices = [];
        let onlineCount = 0;
        let offlineCount = 0;
        
        // Generate devices
        for (let i = 1; i <= numDevices; i++) {
            const isOffline = Math.random() > 0.85;
            if (isOffline) { offlineCount++; } else { onlineCount++; }
            
            const battery = isOffline ? '--' : Math.floor(Math.random() * 40 + 60);
            const storage = isOffline ? 0 : Math.floor(Math.random() * 20 + 2);
            const load = isOffline ? '0.00' : (Math.random() * 2 + 0.1).toFixed(2);
            const uptimeH = Math.floor(Math.random() * 10);
            const uptimeM = Math.floor(Math.random() * 60);
            
            const card = document.createElement('div');
            const statusClass = isOffline ? 'offline' : 'online';
            const statusText = isOffline ? 'Offline' : 'Online';
            const name = i === 1 ? 'debian' : (i === 2 ? 'test-lab' : `chalk-${i.toString().padStart(2, '0')}`);
            
            card.className = `dash-card ${statusClass}`;
            card.innerHTML = `
                <div class="dash-card-header">
                    <div class="dc-icon">💻</div>
                    <div class="dc-info">
                        <div class="dc-name">${name}</div>
                        <div class="dc-mac">d8:43:ae:7c:${(10+i).toString(16)}:52</div>
                    </div>
                    <div class="dc-badge ${statusClass}">${statusText}</div>
                </div>
                <div class="dash-card-body">
                    <div class="dc-row">
                        <span>Kolibri</span>
                        <span class="dc-btn-run">RUNNING</span>
                    </div>
                    <div class="dc-row" style="margin-top: 5px;">
                        <span>Storage</span>
                        <span>${storage}%</span>
                    </div>
                    <div class="dc-storage"><div class="dc-storage-fill" style="width: ${storage}%"></div></div>
                    
                    <div class="dc-stats">
                        <div class="dc-stat-box">
                            <div class="dc-stat-lbl">UPTIME</div>
                            <div class="dc-stat-val">${isOffline ? '0' : uptimeH}h ${isOffline ? '0' : uptimeM}m</div>
                        </div>
                        <div class="dc-stat-box">
                            <div class="dc-stat-lbl">LOAD</div>
                            <div class="dc-stat-val">📈 ${load}</div>
                        </div>
                    </div>
                    <div class="dc-last">Last seen: 00:35</div>
                </div>
                <div class="dash-card-footer">
                    <div class="dc-action-btn">⚡ Actions ⌄</div>
                </div>
            `;
            deviceGrid.appendChild(card);
            devices.push({ element: card, battery: battery, isOffline: isOffline });
        }
        
        document.getElementById('online-count').innerText = onlineCount;
        document.getElementById('offline-count').innerText = offlineCount;

        // Simulate telemetry blink
        setInterval(() => {
            const randomDevice = devices[Math.floor(Math.random() * devices.length)];
            if (!randomDevice.isOffline) {
                const el = randomDevice.element;
                const badge = el.querySelector('.dc-badge');
                if (badge) {
                    badge.style.transform = 'scale(1.05)';
                    badge.style.boxShadow = '0 0 10px rgba(0,200,116,0.6)';
                    setTimeout(() => {
                        badge.style.transform = 'scale(1)';
                        badge.style.boxShadow = 'none';
                    }, 300);
                }
            }
        }, 1500);
    }
});
