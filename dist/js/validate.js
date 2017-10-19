
$('#ke').click(function () {
    $("#ke").prop("checked", true);
});
$('#kt').click(function () {
    $("#kt").prop("checked", true);
});
$('#submit').click(function () {
    validateForm();
});
function validateForm() {

    var name = $('#ad').val();
    var surname = $('#soyad').val();
    var telephone = $('#tel').val();
    var email = $('#email').val();
    var projects = $('#proje').val();
    var message = $('#mesaj').val();
    var nameReg = /^[A-Za-zşŞıİçÇöÖüÜĞğa-zA-Z-,]+(\s{0,1}[A-Za-zşŞıİçÇöÖüÜĞğa-zA-Z-, ])*$/; ///^[A-Za-zşŞıİçÇöÖüÜĞğa-zA-Z-,]+(\s{0,1}[A-Za-zşŞıİçÇöÖüÜĞğa-zA-Z-,]\ {0,1})*$/
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var kabul = $('#ke');
    var kdegil = $('#kt');



    if (!kabul.is(':checked') && !kdegil.is(':checked')) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen yasal uyarıyı kabul edip etmediğinizi belirtiniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }
    if (projects == "" || projects == '0') {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen bir proje seçiniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }

    if (message == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen mesajınızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }

    if (email == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen mail adresinizi giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    } else if (!emailReg.test(email)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir mail adresi giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }

    if (telephone == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen telefon numaranızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    } else if (!numberReg.test(telephone)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir telefon numarası giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }


    if (surname == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen soyadınızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    } else if (!nameReg.test(surname)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir soyadı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }



    if (name == "") {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen adınızı giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    } else if (!nameReg.test(name)) {
        swal({
            title: 'Uyarı!',
            text: 'Lütfen geçerli bir ad giriniz',
            type: 'warning',
            confirmButtonText: 'OK'
        });
        event.preventDefault();
    }






}






