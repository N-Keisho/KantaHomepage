document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('author-toggle');
    const authorDetails = document.getElementById('author-details');
    const closeButton = document.getElementById('close-details');

    toggleButton.addEventListener('click', function () {
        authorDetails.style.display = 'block';
        toggleButton.style.display = 'none';  
        closeButton.style.display = 'inline-block';  
    });

    closeButton.addEventListener('click', function () {
        authorDetails.style.display = 'none';
        closeButton.style.display = 'none';  
        toggleButton.style.display = 'inline-block';  
    });
});

