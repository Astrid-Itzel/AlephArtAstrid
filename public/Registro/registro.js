document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();
    
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const perfil = document.getElementById('perfil').value;
    const contraseña = document.getElementById('contraseña').value.trim();
    const contraseña2 = document.getElementById('contraseña2').value.trim();

    // Obtener referencias a los elementos de error
    const nombreError = document.getElementById('nombreError');
    const apellidoError = document.getElementById('apellidoError');
    const emailError = document.getElementById('emailError');
    const perfilError = document.getElementById('perfilError');
    const contraseñaError = document.getElementById('contraseñaError');
    const contraseña2Error = document.getElementById('contraseña2Error');

    // Limpiar los mensajes de error previos
    nombreError.textContent = '';
    apellidoError.textContent = '';
    emailError.textContent = '';
    perfilError.textContent = '';
    contraseñaError.textContent = '';
    contraseña2Error.textContent = '';

    // Variables para verificar si hay errores
    let isValid = true;

    // Validar el nombre
    if (nombre === '') {
        nombreError.textContent = 'El nombre es requerido.';
        isValid = false;
    }
    // Validar el apellido
    if (apellido === '') {
        apellidoError.textContent = 'El apellido es requerido.';
        isValid = false;
    }
    // Validar el correo electrónico
    if (!validateEmail(email)) {
        emailError.textContent = 'Ingresa un correo electrónico válido.';
        isValid = false;
    }
    // Validar el perfil
    if (!perfil) {
        perfilError.textContent = 'Debes seleccionar un perfil.';
        isValid = false;
    }
    // Validar la contraseña
    if (!validateContraseña(contraseña)) {
        contraseñaError.textContent = 'La contraseña debe tener entre 8 y 16 caracteres, incluyendo al menos un número, una letra mayúscula, una letra minúscula y un carácter especial.';
        isValid = false;
    }
    // Validar que las contraseñas coincidan
    if (contraseña !== contraseña2) {
        contraseña2Error.textContent = 'Las contraseñas no coinciden.';
        isValid = false;
    }
    // Enviar el formulario si es válido
    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: '¡Listo!',
            html: 'Haz completado el formulario. <br> ¡Te damos la bienvenida a la comunidad más grande de artistas!',//html, en lugar de text para poder meter salto de línea con <br>
            customClass: {
                container: 'my-custom-container',
                title: 'my-custom-title',
                content: 'my-custom-content',
                confirmButton: 'my-custom-confirm-button'
            },
            buttonsStyling: false            
        });
    }
});

// Función para validar email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para validar contraseña
function validateContraseña(contraseña) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$/;
    return regex.test(contraseña);
}