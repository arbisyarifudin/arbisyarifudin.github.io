<template>
    <div id="homepage" class="homepage container">
        <section id="hero" class="section hero">
            <div class="row align-items-center w-100">
                <div class="col-lg-7 col-md-8 col-sm-9 col-7">
                    <div class="introduction">
                        <h1 class="title">I am Arbi Syarifudin.</h1>
                        <p id="ticker" class="description" style="opacity: 0"><span>A professional web apps developer
                                with over 5 years of experience.</span>
                            <br><small>Specializing
                                in building exceptional, high-quality websites and
                                applications.</small>
                        </p>
                    </div>
                </div>
                <div class="col-lg-5 col-md-4 col-sm-3 col-12">
                    <div class="homepage-photo">
                        <!-- <img src="/images/photo.png" alt="Arsyaf" class="img-fluid d-none"> -->
                        <img src="/images/photo-2-bw.png" alt="Arsyaf" class="img-fluid d-none">
                    </div>
                </div>
            </div>
        </section>

        <section id="footer-cta" class="section footer-cta">
            <div class="row">
                <div class="col-lg-7 col-12">
                    <div class="latests">
                        <!-- <h2 class="title">My Latest Blog</h2>
                        <p class="post-title"><a href="#">How to create a beautiful website with Tailwind CSS</a></p> -->
                        <h2 class="title">Check My Latest Work:</h2>
                        <p class="post-title"><router-link to="/work">CRM & Omni-channel Web Apps</router-link></p>
                    </div>
                </div>
                <div class="col-lg-5 col-12">
                    <div class="contact">
                        <ul class="contact-row list-unstyled">
                            <li class="contact-link youtube"><a title="Youtube" href="https://youtube.com/@pekerjarimot"
                                    target="_blank"><i class="bi bi-youtube"></i></a></li>
                            <li class="contact-link instagram"><a title="Instagram"
                                    href="https://instagram.com/pekerjarimot" target="_blank"><i
                                        class="bi bi-instagram"></i></a></li>
                            <li class="contact-link upwork"><a title="Upwork"
                                    href="https://www.upwork.com/freelancers/~014f6363cf8beb7f4a" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-brand-upwork">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8" />
                                    </svg>
                                </a></li>
                            <li class="cta"><a href="#" @click.prevent="openContactDialog"><span class="text">Work with
                                        Me</span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                        fill="currentColor" class="bi bi-arrow-right msx-md-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div class="sparkle">
            <div class="box a1">
                <div class="icon"></div>
            </div>
            <div class="box triangle a2">
                <div class="icon"></div>
            </div>
            <div class="box a3">
                <div class="icon"></div>
            </div>
            <div class="box a4">
                <div class="icon"></div>
            </div>
            <div class="box circle a5">
                <div class="icon"></div>
            </div>
            <div class="box a6">
                <div class="icon spin"></div>
            </div>
            <div class="box a7">
                <div class="icon"></div>
            </div>
            <div class="box a8">
                <div class="icon"></div>
            </div>
            <div class="box cross a9">
                <div class="icon"></div>
            </div>
            <div class="box a10">
                <div class="icon"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

let intervalId = null
onMounted(() => {
    const ticker = document.getElementById('ticker')
    ticker.style.opacity = 1
    ticker.innerHTML = '<span></span><br><small></small>'

    const text = 'A professional web apps developer with over 5 years of experience.'
    const small = 'Specializing in building exceptional, high-quality websites and applications.'

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

    // intervalId = setInterval(() => {
    //     if (!isTyping.value) {
    //         isTyping.value = true
    //         ticker.querySelector('span').textContent = ''
    //         ticker.querySelector('small').textContent = ''
    //         typeWriter('span', text)
    //         setTimeout(() => typeWriter('small', small), 2000)
    //     }
    // }, (text.length + small.length) * speed + 2000)

    typeWriter('span', text)
    setTimeout(() => typeWriter('small', small), 2000)

})

onUnmounted(() => {
    clearInterval(intervalId)
})

const openContactDialog = () => {
    const contactDialog = new bootstrap.Modal(document.getElementById('contactDialog'), { keyboard: false })
    contactDialog.show()
}

</script>

<style scoped lang="scss">
$dark: #282828;
$light: #fff;

$primary: #0f5fff;
$secondary: #FF0000;

$textPrimary: #f5f5f5;
$textSecondary: #cccaca;

#homepage {
    position: relative;
    height: calc(100vh - 40px);
    // overflow: hidden;
    overflow: visible;

    .hero {
        height: 100%;
        display: flex;
        align-items: center;

        .introduction {
            margin-top: -100px;
            z-index: 10;
            position: relative;

            .title {
                font-size: 75px;
                line-height: 1.1;
                font-weight: 700;
            }

            .description {
                padding-top: 15px;
                font-size: 20px;
                line-height: 1.5;
                font-weight: 400;
                color: $textSecondary;

                small {
                    font-size: 14px;
                    color: #9c9c9c;
                    display: inline-block;
                    margin-top: 10px;
                    line-height: 1.7;
                }
            }
        }
    }

    .homepage-photo {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50%;
        height: 100%;
        // background-image: url(/images/photo.png);
        background-image: url(/images/photo-2-bw.png);
        // background-image: url(/images/photo-ai.jpg);
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: auto 100%;
        z-index: 5;
        // border-radius: 50% 0 0 50%;
    }

    .footer-cta {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        z-index: 10;

        .latests {
            .title {
                font-size: 12px;
                text-transform: uppercase;
                color: #c0c0c0;
            }

            .post-title {
                font-size: 16px;
                color: $light;

                a {
                    color: $light;
                    text-decoration: none;
                    transition: all 0.3s ease;

                    &:hover {
                        color: #c0c0c0;
                        border-left: 5px solid #0057ff;
                        padding-left: 10px;
                    }
                }
            }
        }

        .contact {
            position: fixed;
            bottom: -15px;
            right: 0;

            &-row {
                display: flex;
                justify-content: flex-end;
                align-items: center;

                li {
                    font-size: 20px;
                    background-color: $light;
                    text-transform: uppercase;
                    font-weight: 600;
                    height: 50px;
                    display: flex;
                    align-items: center;

                    a {
                        display: inline-block;
                        padding: 10px 25px;
                        transition: all 0.3s ease;
                        color: $dark;
                        text-decoration: none;

                        &:hover {
                            transform: scale(1.15);
                        }
                    }

                    &.contact-link {
                        font-size: 25px;

                        a {
                            color: $light;
                        }
                    }

                    &.youtube {
                        background-color: #FF0000;
                    }

                    &.instagram {
                        background-color: #0f5fff;
                    }

                    &.upwork {
                        background-color: #46bb17;

                        a {
                            padding: 10px 20px;
                        }

                        svg {
                            width: 35px;
                            height: 35px;
                        }
                    }

                    &.cta {
                        min-width: 290px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        svg {
                            transition: all 0.3s ease;
                            margin-top: -3px;

                            path {
                                stroke: currentColor;
                                stroke-width: 0.5;
                            }
                        }

                        &:hover {
                            svg {
                                margin-left: 25px !important;
                            }
                        }

                        a {
                            &:hover {
                                transform: scale(1);
                            }
                        }
                    }
                }
            }
        }
    }
}

.sparkle {
    .box {
        height: 30px;
        width: 30px;
        position: absolute;
        bottom: 0;
        // border: 1px solid #4F575A;
        transform: translate3d(0px, 100%, 0);
        /* X, Y, Z */
    }

    .icon {
        height: 30px;
        width: 30px;
        border: 1px solid #4F575A;
    }

    .triangle {
        .icon {
            width: 0;
            height: 0;
            border-left: 14px solid transparent;
            border-right: 14px solid transparent;
            border-bottom: 25px solid #FF0000;
            border-top: 25px solid transparent;
        }
    }

    .circle {
        .icon {
            border-radius: 50%;
        }
    }

    .cross {
        .icon {
            border: none;
            position: relative;
            width: 30px;
            height: 30px;

            &::before,
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 15px;
                height: 30px;
                width: 2px;
                background-color: #0f5fff;
            }

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: rotate(-45deg);
            }
        }
    }


    /* KEYFRAMES */
    @keyframes animateY {
        0% {
            transform: translateY(100%);
            opacity: 1;
        }

        75% {
            opacity: 1;
        }

        100% {
            transform: translateY(-500px);
            opacity: 0;
        }
    }

    @keyframes animateX {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(50px);
        }
    }

    @keyframes animateYWithSpin {
        0% {
            transform: translateY(100%) rotate(0deg);
            opacity: 1;
        }

        15% {
            transform: rotate(180deg);
        }

        30% {
            transform: rotate(360deg);
        }

        45% {
            transform: rotate(540deg);
        }

        60% {
            transform: rotate(720deg);
        }

        75% {
            opacity: 1;
            transform: rotate(900deg);
        }

        100% {
            transform: translateY(-500px) rotate(1080deg);
            opacity: 0;
        }
    }

    /* ANIMATIONS */
    .a1 {
        animation: animateY 35s ease-out infinite;
        animation-delay: 15s;

        .icon {
            animation: animateX 2s ease-in-out infinite alternate;
        }
    }

    .a2 {
        animation: animateY 30s ease-out infinite;
        left: 5%;
        animation-delay: 3s;

        .icon {
            animation: animateX 4s ease-in-out infinite alternate;
        }
    }

    .a3 {
        animation: animateY 38s ease-out infinite;
        animation-delay: 10s;
        left: 10%;

        .icon {
            animation: animateX 2s ease-in-out infinite alternate;
        }
    }

    .a4 {
        animation: animateY 32s linear infinite;
        left: 20%;

        .icon {
            animation: animateX 3s ease-in-out infinite alternate;
        }
    }

    .a5 {
        animation: animateY 39s linear infinite;
        left: 30%;

        .icon {
            animation: animateX 4s ease-in-out infinite alternate;
        }
    }

    .a6 {
        animation: animateY 31s linear infinite;
        animation-delay: 20s;

        left: 50%;

        .icon {
            animation: animateX 2s ease-in-out infinite alternate;
        }
    }

    .a7 {
        animation: animateY 30s linear infinite;

        left: 65%;

        .icon {
            animation: animateX 2s ease-in-out infinite alternate;
        }
    }

    .a8 {
        animation: animateY 32s linear infinite;

        left: 80%;

        .icon {
            animation: animateX 3s ease-in-out infinite alternate;
        }
    }

    .a9 {
        animation: animateY 39s linear infinite;
        animation-delay: 7s;

        left: 90%;

        .icon {
            animation: animateX 4s ease-in-out infinite alternate;
        }
    }

    .a10 {
        animation: animateY 36s linear infinite;

        left: 95%;

        .icon {
            animation: animateX 2s ease-in-out infinite alternate;
        }
    }

    .icon.spin {
        animation: animateYWithSpin 35s linear infinite;
    }
}


/* RESPONSIVE 1*/
@media (max-width: 1198px) {
    #homepage {
        .homepage-photo {
            width: 80%;
            right: -200px;
        }
    }
}


/* TABLET */

@media (max-width: 991px) {
    #homepage {
        overflow: visible;

        .hero {
            .introduction {
                .title {
                    font-size: 50px;
                }

                .description {
                    font-size: 16px;

                    small {
                        font-size: 12px;
                    }
                }
            }
        }

        .homepage-photo {
            width: 100%;
            height: 150%;
            background-size: 100% auto;
            background-position: bottom right;
            right: -280px;
            bottom: -100px;
        }

        .footer-cta {
            position: fixed;
            bottom: 0;
            left: 20px;

            .latests {
                .title {
                    font-size: 10px;
                }

                .post-title {
                    font-size: 14px;
                }
            }

            .contact {
                li {
                    font-size: 18px;
                    height: 50px;

                    &.cta {
                        min-width: 200px;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

/* MOBILE */

@media (max-width: 767px) {
    #homepage {
        overflow: visible;

        .hero {
            .introduction {
                .title {
                    font-size: 40px;
                }

                .description {
                    font-size: 14px;

                    small {
                        font-size: 11px;
                    }
                }
            }
        }

        .homepage-photo {
            width: 100%;
            height: 100%;
            background-size: 100% auto;
            background-position: bottom center;
            right: -200px;
            bottom: 0;
        }

        .footer-cta {
            .latests {
                .title {
                    font-size: 8px;
                }

                .post-title {
                    font-size: 12px;
                }
            }

            .contact {
                position: fixed;
                right: 0;

                li {
                    font-size: 16px;
                    height: 50px;

                    a {
                        padding: 5px 20px;
                    }

                    &.cta {
                        min-width: 100px;

                        .text {
                            display: none;
                        }

                        svg {
                            margin: 0;
                        }
                    }
                }
            }
        }
    }
}

/* EXTRA SMALL */

@media (max-width: 575px) {
    #homepage {
        .hero {
            .introduction {
                .title {
                    font-size: 50px;
                }

                .description {
                    font-size: 16px;

                    small {
                        font-size: 12px;
                    }
                }
            }
        }

        .homepage-photo {
            width: 110%;
            height: 100%;
            background-size: cover;
            background-position: left center;
            right: -150px;
            bottom: 0;
        }

        .footer-cta {
            .latests {
                .title {
                    font-size: 16px;
                }

                .post-title {
                    font-size: 14px;
                }
            }

            .contact {
                position: fixed;
                right: 0;

                &-row {
                    flex-direction: column;
                    align-items: flex-end;
                }

                li {
                    // font-size: 14px;
                    // height: 50px;

                    font-size: 21px !important;
                    height: unset;
                    // width: 100px;
                    width: 60px;
                    align-items: center;
                    justify-content: center;

                    a {
                        padding: 15px 15px;
                    }

                    &.cta {
                        min-width: 60px;
                        // min-width: unset;

                        .text {
                            display: none;
                        }

                        svg {
                            width: 28px;
                            height: 28px;
                        }
                    }
                }
            }
        }
    }
}

/* EXTRA EXTRA SMALL */

@media (max-width: 376px) {
    #homepage {
        .hero {
            .introduction {
                .title {
                    font-size: 35px;
                }

                .description {
                    font-size: 12px;

                    small {
                        font-size: 8px;
                    }
                }
            }
        }

        .homepage-photo {
            width: 120%;
            height: 100%;
            background-size: cover;
            background-position: left center;
            right: -150px;
            bottom: 0;
        }

        .footer-cta {
            position: fixed;
            left: 0;
            bottom: 0;

            .latests {
                padding-left: 20px;

                .title {
                    font-size: 10px;
                }

                .post-title {
                    font-size: 10px;
                }
            }

            .contact {
                position: fixed;

                &-row {
                    flex-direction: column;
                    align-items: flex-end;
                }

                li {
                    font-size: 12px;
                    height: unset;
                    width: 50px;
                    align-items: center;
                    justify-content: center;

                    a {
                        padding: 10px 10px;
                    }

                    &.cta {
                        min-width: unset;
                        font-size: 12px;

                        a {
                            padding: 10px;
                        }

                        .text {
                            display: none;
                        }

                        svg {
                            width: 25px;
                            height: 25px;
                        }
                    }
                }
            }
        }
    }
}

// max-widtyh 415px and max-height 897px
@media (max-width: 415px) and (max-height: 897px) {
    #homepage {
        .homepage-photo {
            right: -20px;
        }
    }
}
</style>