    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    let button = document.getElementById('submit');

    // Add an event listener to the button to execute the logic when clicked
    button.addEventListener('click', function() {
        if (yes.checked) {
            alert('super');
        } else {
          
            alert('not super');
        }
    });