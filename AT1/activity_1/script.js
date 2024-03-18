document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll('.label');
    const dataBoxes = document.querySelectorAll('.data-box');

    labels.forEach(label => {
        label.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text', event.target.id);
        });
    });

    dataBoxes.forEach(dataBox => {
        dataBox.addEventListener('dragover', function(event) {
            event.preventDefault();
        });

        dataBox.addEventListener('drop', function(event) {
            event.preventDefault();
            const draggedLabelId = event.dataTransfer.getData('text');
            const draggedLabel = document.getElementById(draggedLabelId);
            
            // Check if the dragged label matches the data box number
            const dataBoxNumber = parseInt(dataBox.dataset.number);
            const expectedLabelId = `label-${dataBoxNumber}`;
            if (draggedLabelId === expectedLabelId) {
                dataBox.style.backgroundColor = 'lightgreen'; // Update background color to indicate correct match
                draggedLabel.style.backgroundColor = 'green'; // Update label background color to indicate correct match
            } else {
                dataBox.style.backgroundColor = 'red'; // Update background color to indicate incorrect match
                draggedLabel.style.backgroundColor = 'red'; // Update label background color to indicate incorrect match
            }
        });
    });
});
