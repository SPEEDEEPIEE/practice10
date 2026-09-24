// === G L A M O U R   I N T E R A C T I O N ===
document.addEventListener('DOMContentLoaded', () => {
  // 1. Кнопка "Найти билет" — гламурный отклик
  const findBtn = document.getElementById('findBtn');
  if (findBtn) {
    findBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Анимация свечения
      findBtn.style.transition = 'all 0.3s';
      findBtn.style.boxShadow = '0 0 50px #D4AF37, 0 0 100px #ffd700';
      findBtn.style.transform = 'scale(1.05)';
      setTimeout(() => {
        findBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.6), 0 0 15px rgba(212, 175, 55, 0.2)';
        findBtn.style.transform = 'scale(1)';
      }, 300);
      alert('✨ RAIL LUXE ✨\n\nВаш запрос на роскошное путешествие принят.\nНаш консьерж свяжется с вами в течение 5 минут.');
    });
  }

  // 2. Кнопка "ВИП-поезд" — королевский отклик
  const vipBtn = document.getElementById('vipBtn');
  if (vipBtn) {
    vipBtn.addEventListener('click', (e) => {
      e.preventDefault();
      vipBtn.style.transition = 'all 0.2s';
      vipBtn.style.background = 'linear-gradient(145deg, #D4AF37, #B8860B)';
      vipBtn.style.color = '#0a0a0f';
      vipBtn.style.borderColor = '#fff9c4';
      setTimeout(() => {
        vipBtn.style.background = 'transparent';
        vipBtn.style.color = '#D4AF37';
        vipBtn.style.borderColor = 'rgba(212, 175, 55, 0.8)';
      }, 400);
      alert('👑 ВИП-ПОЕЗД 👑\n\nВагон "Императорский" с джакузи, дворецким и шампанским Dom Pérignon.\nСтоимость: от 500 000 ₽ за ночь.\n\nМеста ограничены. Поторопитесь.');
    });
  }

  // 3. Кнопка "Поиск" (фейковый) — тоже не работает, но красиво
  const fakeSearchBtn = document.getElementById('fakeSearchBtn');
  if (fakeSearchBtn) {
    fakeSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      fakeSearchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Ищем...';
      setTimeout(() => {
        fakeSearchBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Поиск';
      }, 1200);
      alert('🔍 Демо-поиск\n\nЭто гламурный прототип. Реальные билеты появятся в следующей версии.\nНо выглядит — бомбезно, да?');
    });
  }

  // 4. Все кнопки "Забронировать" в карточках — стильный отклик
  const cardBtns = document.querySelectorAll('.card-btn');
  cardBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Анимация нажатия
      btn.style.transform = 'scale(0.95)';
      btn.style.boxShadow = '0 0 40px #D4AF37';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '';
      }, 200);
      alert('💎 Маршрут добавлен в избранное!\n\nВаш персональный менеджер уже подбирает лучшее купе.');
    });
  });

  // 5. Навигационные ссылки — просто переключаем active
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // 6. Кнопка "Войти" — гламурно
  const loginBtn = document.querySelector('.glam-header .glam-btn.small');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loginBtn.style.borderColor = '#fff9c4';
      loginBtn.style.boxShadow = '0 0 30px gold';
      setTimeout(() => {
        loginBtn.style.borderColor = 'rgba(212, 175, 55, 0.6)';
        loginBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.6), 0 0 15px rgba(212, 175, 55, 0.2)';
      }, 300);
      alert('🔐 Вход в RAIL LUXE\n\nДобро пожаловать в клуб избранных.\n(Демо-режим: просто нажмите OK)');
    });
  }

  // 7. Соцсети — отклик
  const socialIcons = document.querySelectorAll('.socials i');
  socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      alert('📱 Мы в соцсетях!\n\nПодпишитесь, чтобы первыми узнавать о новых гламурных маршрутах.');
    });
  });
    // 8. Кнопка "Наверх" — плавная прокрутка
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Гламурный отклик
      scrollTopBtn.style.boxShadow = '0 0 60px #D4AF37, 0 0 100px #ffd700';
      setTimeout(() => {
        scrollTopBtn.style.boxShadow = '';
      }, 500);
    });
  }

  // 9. Счётчик посетителей — "живая" анимация
  const visitorCount = document.getElementById('visitorCount');
  if (visitorCount) {
    let count = 1247;
    
    // Плавное появление начального значения
    const targetStart = count;
    let currentStart = 1000;
    const startInterval = setInterval(() => {
      currentStart += Math.floor(Math.random() * 15) + 5;
      if (currentStart >= targetStart) {
        currentStart = targetStart;
        clearInterval(startInterval);
      }
      visitorCount.textContent = currentStart.toLocaleString('ru-RU');
    }, 40);

    // Периодическое "живое" обновление
    setInterval(() => {
      const change = Math.floor(Math.random() * 7) - 3; // от -3 до +3
      count = Math.max(1100, Math.min(1500, count + change));
      visitorCount.textContent = count.toLocaleString('ru-RU');
      
      // Лёгкая вспышка при изменении
      visitorCount.style.transition = 'all 0.3s';
      visitorCount.style.textShadow = '0 0 25px #D4AF37, 0 0 40px #ffd700';
      setTimeout(() => {
        visitorCount.style.textShadow = '0 0 12px rgba(212, 175, 55, 0.8)';
      }, 300);
    }, 3500);
  }

  // 10. Параллакс-эффект для поезда (слегка двигается за курсором)
  const trainGlam = document.querySelector('.train-glam');
  if (trainGlam && window.innerWidth > 800) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      trainGlam.style.transform = `translate(${x}px, ${y}px)`;
      trainGlam.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
  }
});