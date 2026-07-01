/* =========================================================
   Scuola Cinofila Al Rifugio — Script principale
   ========================================================= */

/* ── Navbar: sfondo al scroll ── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 20) {
    navbar.classList.add('scrollata');
  } else {
    navbar.classList.remove('scrollata');
  }
});

/* ── Menu mobile ── */
const hamburger     = document.getElementById('hamburger');
const menuMobile    = document.getElementById('menu-mobile');
const icona         = document.getElementById('icona-hamburger');

hamburger.addEventListener('click', function () {
  const aperto = menuMobile.classList.toggle('aperto');
  icona.textContent = aperto ? '✕' : '☰';
});

/* ── Scorrimento fluido verso una sezione ── */
function scorri(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    /* chiudi il menu mobile se aperto */
    menuMobile.classList.remove('aperto');
    icona.textContent = '☰';
  }
}

/* ── Anno corrente nel footer ── */
document.getElementById('anno').textContent = new Date().getFullYear();
