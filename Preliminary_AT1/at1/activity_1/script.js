document.getElementById('answer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const label1 = document.getElementById('label1').value.trim().toUpperCase(); // Convert user input to uppercase
    const label2 = document.getElementById('label2').value.trim().toUpperCase(); // Convert user input to uppercase
    const label3 = document.getElementById('label3').value.trim().toUpperCase(); // Convert user input to uppercase
    
    const correctLabel1 = "SUBSTRATE".toUpperCase(); // Convert correct label to uppercase
    const correctLabel2 = "ACTIVE SITE".toUpperCase(); // Convert correct label to uppercase
    const correctLabel3 = "ENZYME".toUpperCase(); // Convert correct label to uppercase
    
    if (label1 === correctLabel1) {
        document.getElementById('label1').style.backgroundColor = 'green';
    } else {
        document.getElementById('label1').style.backgroundColor = 'red';
    }
    
    if (label2 === correctLabel2) {
        document.getElementById('label2').style.backgroundColor = 'green';
    } else {
        document.getElementById('label2').style.backgroundColor = 'red';
    }
    
    if (label3 === correctLabel3) {
        document.getElementById('label3').style.backgroundColor = 'green';
    } else {
        document.getElementById('label3').style.backgroundColor = 'red';
    }
});
