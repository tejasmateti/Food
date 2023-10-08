    const scriptURL ="" 
    const form = document.forms['google-sheet-2']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
        .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
    })