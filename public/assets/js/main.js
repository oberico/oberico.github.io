// Assumes coursesData is loaded from data.js
// Assumes renderCostChart and renderComparativePlatformsChart are loaded from charts.js
// Assumes openModal, closeModal, getMatchBadgeColor functions are loaded from modals.js

const tabIds = ['introducao', 'objetivos', 'trilha', 'comparativo', 'custos', 'comparativo-plataformas', 'agenda', 'beneficios', 'proximos-passos'];
let currentTabIndex = 0;

// Swipe navigation variables
let touchstartX = 0;
let touchendX = 0;
const gestureZone = document.querySelector('main');

// Flag to indicate if a swipe is happening within a scrollable table
let isSwipingTable = false;

function checkDirection() {
    if (isSwipingTable) return; // If we are actively scrolling a table, do not change tabs

    if (touchendX < touchstartX - 50) { // Swiped left (next tab)
        nextTab();
    }
    if (touchendX > touchstartX + 50) { // Swiped right (previous tab)
        prevTab();
    }
}

function checkAndShowMobileTip() {
    const mobileTipPopup = document.getElementById('mobileTipPopup');
    if (window.innerWidth < 768) {
        if (!sessionStorage.getItem('devops_mobile_tip_shown')) {
            mobileTipPopup.classList.add('show');
            setTimeout(() => {
                mobileTipPopup.classList.remove('show');
                setTimeout(() => { mobileTipPopup.style.display = 'none'; }, 500);
            }, 5000);
            sessionStorage.setItem('devops_mobile_tip_shown', 'true');
        }
    } else {
        mobileTipPopup.classList.remove('show');
        mobileTipPopup.style.display = 'none';
    }
}

function openTab(event) {
    let tabName;
    if (event && event.currentTarget) { // Click event from tab button
        tabName = event.currentTarget.dataset.tabId;
        currentTabIndex = tabIds.indexOf(tabName);
    } else { // Called programmatically by index
        tabName = tabIds[currentTabIndex];
    }

    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content-section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("material-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    const activeTabButton = document.querySelector(`.material-tab[data-tab-id="${tabName}"]`);
    if (activeTabButton) {
        activeTabButton.classList.add("active");
        activeTabButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    document.querySelector('main').scrollTo({ top: 0, behavior: 'smooth' });

    if (tabName === 'custos') {
        renderCostChart();
    } else if (tabName === 'comparativo-plataformas') {
        renderComparativePlatformsChart();
    }
    updateNavigationButtons();
    updateTabProgressBar();
    checkAndShowMobileTip(); // Re-evaluate mobile tip display on tab change
}

function nextTab() {
    if (currentTabIndex < tabIds.length - 1) {
        currentTabIndex++;
        openTab(null);
    }
}

function prevTab() {
    if (currentTabIndex > 0) {
        currentTabIndex--;
        openTab(null);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevTabBtn');
    const nextBtn = document.getElementById('nextTabBtn');

    if (prevBtn) {
        prevBtn.disabled = (currentTabIndex === 0);
    }
    if (nextBtn) {
        nextBtn.disabled = (currentTabIndex === tabIds.length - 1);
    }
}

function updateTabProgressBar() {
    const totalTabs = tabIds.length;
    const progressBar = document.getElementById('progressBar');
    const progress = totalTabs > 1 ? (currentTabIndex / (totalTabs - 1)) * 100 : 0;
    progressBar.style.width = `${progress}%`;
}

function populateCourses() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = '';
    coursesData.forEach(course => {
        // Filter out courses that are not part of the core 6-month plan or are explicitly optional/post-program
        if (!['windows-server', 'linux-engineer', 'virtualizacao', 'redes-ccna', 'linux-admin', 'linux-force-devops'].includes(course.id)) {
            const card = `
                <div class="course-card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl font-semibold mb-2 text-secondary-dark">${course.title}</h3>
                        <p class="text-sm text-gray-600 mb-1"><strong>Plataforma:</strong> ${course.platform}</p>
                        <p class="text-sm text-gray-600 mb-1"><strong>Duração Estimada:</strong> <span class="badge badge-blue">${course.duration}</span></p>
                        <p class="text-sm text-gray-600 mb-1"><strong>Custo:</strong> <span class="badge badge-green">${course.cost}</span></p>
                        <p class="text-sm text-gray-600 mb-3"><strong>Match:</strong> <span class="badge ${getMatchBadgeColor(course.match)}">${course.match}</span></p>
                        <p class="text-gray-700 text-sm mb-3">${course.summary}</p>
                    </div>
                    <button class="btn-primary mt-auto text-sm py-2" onclick="openModal('${course.id}')">Ver Detalhes</button>
                </div>
            `;
            courseList.innerHTML += card;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateCourses();

    // Attach event listeners to tab buttons
    document.querySelectorAll('.material-tab').forEach(button => {
        button.addEventListener('click', openTab);
    });

    openTab({currentTarget: document.querySelector('.material-tab[data-tab-id="introducao"]')});

    document.getElementById('prevTabBtn').addEventListener('click', prevTab);
    document.getElementById('nextTabBtn').addEventListener('click', nextTab);

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Event listeners for swipe navigation on the main gesture zone
    gestureZone.addEventListener('touchstart', e => {
        // Check if the touch target or any of its parents is a scrollable table container
        let target = e.target;
        isSwipingTable = false; // Reset flag
        while (target != null && target !== gestureZone) {
            if (target.classList.contains('overflow-x-auto') && target.scrollWidth > target.clientWidth) {
                isSwipingTable = true;
                break;
            }
            target = target.parentElement;
        }

        if (isSwipingTable) {
            // If the touch originated in a scrollable table, don't store initial X
            // and let the browser handle the scroll natively for that element.
            return;
        }

        touchstartX = e.changedTouches[0].screenX;
    });

    gestureZone.addEventListener('touchend', e => {
        if (isSwipingTable) {
            isSwipingTable = false; // Reset flag after the swipe ends
            return; // Do not process as a tab change
        }
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    });

    // You might also need a touchmove listener to prevent default if the table content is being dragged
    // but the overflow-x-auto should handle that. The main point is to prevent the 'main' element's
    // touchstart/touchend from misinterpreting a table scroll as a tab swipe.
});