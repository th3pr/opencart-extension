$(document).ready(function() {
    // Disable text selection
    $('body').css({
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    });

    // Disable text copy
    $(document).on('copy', function(e) {
        e.preventDefault();
        alert('Copying is disabled on this website.');
    });

    // Disable F12 key
    $(document).on('keydown', function(e) {
        if (e.key === 'F12') {
            e.preventDefault();
            alert('Developer tools are disabled on this website.');
        }
    });
});
