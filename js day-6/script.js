    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    let button = document.getElementById('submit');
    button.addEventListener('click', function() {
        if (yes.checked) {
            alert('super');
        } else {
          
            alert('not super');
        }
    });
