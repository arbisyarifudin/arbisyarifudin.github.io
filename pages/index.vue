<template>
    <div id="homepage" class="homepage container">
        <section id="hero" class="section hero">
            <div class="row align-items-center w-100">
                <div class="col-lg-7 col-md-8 col-sm-9 col-7">
                    <div class="introduction">
                        <h1 class="title">I am Arbi Syarifudin.</h1>
                        <p id="ticker" class="description" style="opacity: 0"><span>A professional web developer based in Indonesia.</span>
                            <br><small>Specializing
                                in building (and occasionally designing) exceptional, high-quality websites and
                                applications.</small>
                        </p>
                    </div>
                </div>
                <div class="col-lg-5 col-md-4 col-sm-3 col-12">
                    <div class="homepage-photo">
                        <img src="public/images/photo.png" alt="Arsyaf" class="img-fluid d-none">
                    </div>
                </div>
            </div>
        </section>

        <section id="footer-cta" class="section footer-cta">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="latests">
                        <h2 class="title">My Latest Blog</h2>
                        <p class="post-title"><a href="#">How to create a beautiful website with Tailwind CSS</a></p>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <div class="contact">
                        <ul class="contact-row list-unstyled">
                            <li class="youtube"><a href="#"><i class="bi bi-youtube"></i></a></li>
                            <li class="instagram"><a href="#"><i class="bi bi-instagram"></i></a></li>
                            <li class="cta"><a href="#"><span class="text">Work with Me</span> <svg
                                        xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        class="bi bi-arrow-right ms-md-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// onMounted(() => {
//     const ticker = document.getElementById('ticker')
//     ticker.style.opacity = 1
//     ticker.innerHTML = '<span></span><br><small></small>'

//     const text = 'A professional web developer based in Indonesia.'
//     const small = 'Specializing in building (and occasionally designing) exceptional, high-quality websites and applications.'

//     let speed = 50

//     function typeWriter(target, message, index = 0) {
//         if (index < message.length) {
//             ticker.querySelector(target).textContent += message.charAt(index)
//             setTimeout(() => typeWriter(target, message, index + 1), speed)
//         }
//     }

//     typeWriter('span', text)
//     setTimeout(() => typeWriter('small', small), 2000)
// })

let intervalId = null
onMounted(() => {
    const ticker = document.getElementById('ticker')
    ticker.style.opacity = 1
    ticker.innerHTML = '<span></span><br><small></small>'

    const text = 'A professional web developer based in Indonesia.'
    const small = 'Specializing in building (and occasionally designing) exceptional, high-quality websites and applications.'

    let speed = 50
    let isTyping = ref(false)

    function typeWriter(target, message, index = 0) {
        if (index < message.length) {
            ticker.querySelector(target).textContent += message.charAt(index)
            setTimeout(() => typeWriter(target, message, index + 1), speed)
        } else {
            isTyping.value = false
        }
    }

    intervalId = setInterval(() => {
        if (!isTyping.value) {
            isTyping.value = true
            ticker.querySelector('span').textContent = ''
            ticker.querySelector('small').textContent = ''
            typeWriter('span', text)
            setTimeout(() => typeWriter('small', small), 2000)
        }
    }, (text.length + small.length) * speed + 2000)
    
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>