// BODEGA IMPERIAL | APF3
// Menú hamburguesa y botón Ir arriba para todas las páginas.
document.addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.querySelector('.menu-toggle');
    const navegacion = document.querySelector('.navegacion');
    const enlacesMenu = document.querySelectorAll('.navegacion a');
    const botonArriba = document.querySelector('.boton-ir-arriba');
    const anchoEscritorio = 992;

    if (botonMenu && navegacion) {
        botonMenu.addEventListener('click', () => {
            const abierto = botonMenu.getAttribute('aria-expanded') === 'true';
            botonMenu.setAttribute('aria-expanded', String(!abierto));
            botonMenu.setAttribute('aria-label', abierto ? 'Abrir menú' : 'Cerrar menú');
            navegacion.classList.toggle('menu-abierto', !abierto);
            document.body.classList.toggle('menu-activo', !abierto);
        });
        enlacesMenu.forEach(enlace => enlace.addEventListener('click', () => {
            botonMenu.setAttribute('aria-expanded', 'false');
            botonMenu.setAttribute('aria-label', 'Abrir menú');
            navegacion.classList.remove('menu-abierto');
            document.body.classList.remove('menu-activo');
        }));
        window.addEventListener('resize', () => {
            if (window.innerWidth > anchoEscritorio) {
                botonMenu.setAttribute('aria-expanded', 'false');
                botonMenu.setAttribute('aria-label', 'Abrir menú');
                navegacion.classList.remove('menu-abierto');
                document.body.classList.remove('menu-activo');
            }
        });
    }

    if (botonArriba) {
        const umbral = 350;
        const actualizarBoton = () => botonArriba.classList.toggle('visible', window.scrollY > umbral);
        window.addEventListener('scroll', actualizarBoton, { passive: true });
        actualizarBoton();
        botonArriba.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
