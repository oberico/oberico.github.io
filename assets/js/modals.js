// Assumes coursesData is loaded from data.js
// Assumes getMatchBadgeColor is available (moved to main.js or utility.js)

function getMatchBadgeColor(match) {
    const numericMatch = parseInt(match.split('/')[0]);
    if (numericMatch >= 9) return 'badge-green';
    if (numericMatch >= 7) return 'badge-amber';
    return 'badge-red';
}

function openModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalPlatform').textContent = course.platform;
    document.getElementById('modalInstructor').textContent = course.instructor;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalCost').textContent = course.cost;
    document.getElementById('modalMatch').textContent = course.match;
    document.getElementById('modalMatch').className = `badge ${getMatchBadgeColor(course.match)}`;
    document.getElementById('modalSummary').textContent = course.summary;

    const ementaContainer = document.getElementById('modalEmenta');
    ementaContainer.innerHTML = '';
    course.ementa.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item; // Use innerHTML to render strong tags
        p.className = 'mb-1';
        ementaContainer.appendChild(p);
    });

    document.getElementById('modalOpinion').textContent = course.opinion;
    document.getElementById('courseModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Event listener for the close button inside the modal
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('closeModalButton');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});