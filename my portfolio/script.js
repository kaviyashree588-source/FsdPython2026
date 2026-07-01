// ===========================
// Welcome Message
// ===========================

window.onload = function(){

    alert(" Welcome to Kaaviya Shree's Portfolio!");

    showGreeting();

};

// ===========================
// Greeting Based on Time
// ===========================

function showGreeting(){

    let hour = new Date().getHours();

    let greeting = "";

    if(hour < 12){

        greeting = "Good Morning! Welcome to my Portfolio.";

    }

    else if(hour < 18){

        greeting = "Good Afternoon! Welcome to my Portfolio.";

    }

    else{

        greeting = "Good Evening! Welcome to my Portfolio.";

    }

    let home = document.getElementById("home");

    let message = document.createElement("p");

    message.innerHTML = greeting;

    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
    message.style.color = "#7c3aed";

    home.appendChild(message);

}

// ===========================
// Scroll to Top Button
// ===========================

let topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#7c3aed";
topButton.style.color = "white";
topButton.style.fontSize = "18px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.onscroll = function(){

    if(document.documentElement.scrollTop > 200){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

};

topButton.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ===========================
// Active Navigation
// ===========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 100;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.style.color = "#6b7280";

        if(link.getAttribute("href") == "#" + current){

            link.style.color = "#c08497";

        }

    });

});

// ===========================
// Fade In Sections
// ===========================

const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

allSections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s";

    observer.observe(section);

});
// ===========================
// Contact Popup
// ===========================

function openForm() {
    document.getElementById("contactPopup").style.display = "flex";
}

function closeForm() {
    document.getElementById("contactPopup").style.display = "none";
    document.getElementById("errorBox").style.display = "none";
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const errorBox = document.getElementById("errorBox");

    if(name === "" || email === "" || phone === "" || message === ""){

        errorBox.style.display = "block";

        return;
    }

    errorBox.style.display = "none";

    alert("✅ Message Sent Successfully!");

    form.reset();

    closeForm();

});
// ==================================
// Extra Portfolio Effects
// ==================================

// Highlight current section

const cards = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight-150){

            card.style.borderLeft = "6px solid #7c3aed";

        }

    });

});

// Skills Click Effect

const skills = document.querySelectorAll("#skills li");

skills.forEach(skill=>{

    skill.addEventListener("click",()=>{

        skill.style.background="#5b21b6";

        skill.style.color="white";

        setTimeout(()=>{

            skill.style.background="";

            skill.style.color="";

        },300);

    });

});

// Project Hover Effect

const projects = document.querySelectorAll("#projects h3");

projects.forEach(project=>{

    project.addEventListener("mouseenter",()=>{

        project.style.textDecoration="underline";

    });

    project.addEventListener("mouseleave",()=>{

        project.style.textDecoration="none";

    });

});

// Contact Button Effect

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("mouseenter",()=>{

    contactBtn.innerHTML="📨 Contact Me";

});

contactBtn.addEventListener("mouseleave",()=>{

    contactBtn.innerHTML="Contact Me";

});