document.addEventListener('DOMContentLoaded', function() {
    const grande = document.querySelector('.grande');
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => {
            let posicion = i;
            let operacion = posicion * -115;

            grande.style.transform = `translateX(${operacion}%)`;

            puntos.forEach(punto => punto.classList.remove('activo'));
            punto.classList.add('activo');
        });
    });
});
