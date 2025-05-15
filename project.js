const projects = [
    {
        title: "Viral-Mayhem-bomb-pandemic",
        desc: "A GDScript game project simulating a viral pandemic scenario with bombs and mayhem.",
        img: "assets/1.png"
    },
    {
        title: "Personal-Blog-Website",
        desc: "A JavaScript-powered to-do list for my Website developing endeavors.",
        img: "assets/2.png"
    },
    {
        title: "VIPINOSA_websystem_756",
        desc: "A web system project for class, featuring user management and data visualization.",
        img: "assets/3.png"
    }
];

let current = 0;

function renderProject(idx) {
    const project = projects[idx];
    document.getElementById('projectCard').innerHTML = `
        <img src="${project.img}" alt="${project.title} screenshot">
        <div class="project-title">${project.title}</div>
        <div class="project-desc">${project.desc}</div>
    `;
    document.getElementById('prevBtn').disabled = idx === 0;
    document.getElementById('nextBtn').disabled = idx === projects.length - 1;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProject(current);
    document.getElementById('prevBtn').onclick = () => {
        if (current > 0) {
            current--;
            renderProject(current);
        }
    };
    document.getElementById('nextBtn').onclick = () => {
        if (current < projects.length - 1) {
            current++;
            renderProject(current);
        }
    };

    // Modal logic
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgModalImg');
    const modalClose = document.getElementById('imgModalClose');

    document.getElementById('projectCard').addEventListener('click', function(e) {
        if (e.target.tagName === 'IMG') {
            modal.style.display = 'flex';
            modalImg.src = e.target.src;
            modalImg.alt = e.target.alt;
        }
    });

    modalClose.onclick = function() {
        modal.style.display = 'none';
    };
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
});