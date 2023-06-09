function showSuccessMessage(message) {
    Swal.fire({
        icon: 'success',
        text: message,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}

function showErrorMessage(message) {
    Swal.fire({
        icon: 'error',
        text: message,
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}


function showInfoMessage(message) {
    Swal.fire({
        icon: 'info',
        html: message,
        toast: true,
        width: 500,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true,
        timerProgressBar: false,
    });
}