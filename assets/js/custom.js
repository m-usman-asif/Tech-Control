// toggle drawer
$(document).ready(function() {
    $(".toggleBar").click(function(e) {
        e.stopPropagation();
        $(".floatingMenu").toggleClass("active");
    });
});


// Header Sticky Behaviour
window.addEventListener('scroll', function () {
    var header = document.getElementById('showSticky');

    if (window.scrollY >= 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Banner Content Slider
$('.bannerSlider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    responsive:{
        0: {
            items: 1
        },
        1025:{
            items:1
        }
    }
});

// CLient Logos
$('.clientsLogoWrapper').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0: {
            items:2,
        },
        480: {
            items:3
        },
        767: {
            items:4
        },
        991: {
            items:6
        },
        1200:{
            items:7
        }
    }
});


// Featured Work Slider
$('.featuredSlider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    center: true,
    autoWidth: true,
    autoplay:true,
    responsive:{
        0: {
            items: 1,
            margin: 15,
        },
        1200:{
            items: 1
        },
        1500: {
            items: 1
        }
    }
});



// Accordion Script

$(document).ready(function () {
    //toggle the component with class accordion_body
    $(".accordion_head").click(function () {
        if ($('.accordion_body').is(':visible')) {
            $(".accordion_body").slideUp(300);
            $(".plusminus").text('+');
        }
        if ($(this).next(".accordion_body").is(':visible')) {
            $(this).next(".accordion_body").slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next(".accordion_body").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
});


// Counters script

// Intersection Observer to observe when the element comes into the viewport
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        // If element is in viewport, start counting
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target); // Stop observing after it's visible
        }
    });
}, { threshold: 0.1 });

// Function to start the counter animation
function startCounter(element) {
    var countTo = parseInt(element.getAttribute('data-count'));
    var currentCount = 0;
    var duration = 2000; // Duration of animation in milliseconds
    var startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        currentCount = Math.min(progress / duration * countTo, countTo);
        element.textContent = Math.floor(currentCount);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Start observing all elements with class "counter"
document.querySelectorAll('.counter').forEach(function(counter) {
    observer.observe(counter);
});