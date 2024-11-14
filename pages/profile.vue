<template>
    <div id="page" class="page profile">
        <div class="container">
            <div class="row align-items-centerx">
                <div class="col-lg-4 col-md-4 text-center">
                    <div class="profile-left">
                        <!-- <img src="/images/photo.png" alt="Profile Picture" class="img-fluid profile-image"> -->
                        <img src="/images/photo-2-bw.png" alt="Profile Picture" class="img-fluid profile-image">
                        <div class="profile-summary">
                            <h1 class="profile-name">Arbi Syarifudin</h1>
                            <h3 class="profile-role">a Full Stack Developer,<br>loves to code and design</h3>
                        </div>
                        <div class="profile-socials mt-4">
                            <a href="https://youtube.com/@pekerjarimot" class="btn btn-primary btn-sm me-3 youtube" target="_blank"><i class="bi bi-youtube"></i></a>
                            <a href="https://www.upwork.com/freelancers/~014f6363cf8beb7f4a" class="btn btn-primary btn-sm me-3 upwork" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-brand-upwork">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M3 7v5a3 3 0 0 0 6 0v-5h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0 -7c-2.027 0 -3.137 1 -3.5 3c-.242 1.33 -.908 4 -2 8" />
                                    </svg>
                            </a>
                            <!-- <a href="https://facebook.com/arbisyarifudin" class="btn btn-primary btn-sm me-3 facebook"><i class="bi bi-facebook"></i></a> -->
                            <a href="https://instagram.com/pekerjarimot" class="btn btn-primary btn-sm me-3 instagram" target="_blank"><i
                                    class="bi bi-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/arbi-syarifudin/" class="btn btn-primary btn-sm me-3 linkedin" target="_blank"><i
                                    class="bi bi-linkedin"></i></a>
                            <a href="https://github.com/arbisyarifudin/" class="btn btn-primary btn-sm me-3 github" target="_blank"><i class="bi bi-github"></i></a>
                        </div>
                        <!-- <ul class="profile-contact list-unstyled mt-3">
                            <li><strong>Email:</strong> <a
                                    href="mailto:arbisyarifudin@gmail.com">arbisyarifudin@gmail.com</a></li>
                            <li><strong>Phone:</strong> <a href="tel:+6285773716731">+62 857 7371 6731</a></li>
                            <li><strong>Website:</strong> <a href="https://www.arsyaf.dev">www.arsyaf.dev</a>
                            </li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-lg-8 col-md-8">
                    <div class="scrollable-area">
                        <section class="profile-summary">
                            <div class="profile-short">
                                <h2 class="section-title">Hi, welcome!</h2>
                                <p class="profile-desc">
                                    A seasoned developer with over 5 years of extensive experience in the computer software industry. I am passionate about combining programming and design to create functional and visually appealing web application solutions. With experience in both front-end and back-end development, I have worked with a diverse range of clients worldwide as a freelancer and remote worker, including private and government agencies in Indonesia.
                                </p>
                                <p class="profile-desc">
                                    I specialize in custom web applications, having developed various projects including company profile websites, SaaS platforms, e-commerce websites, website redesigns, custom bots & automation, and more. I write clean, well-documented, and high-quality code that meets industry standards. My goal is to deliver exceptional results and high levels of customer satisfaction.
                                </p>
                                <p class="profile-desc cta">
                                    Let's talk about your project and how I can help you achieve your goals.
                                </p>

                                <div class="d-flex mt-4">
                                    <a download href="/documents/Resume - Arbi Syarifudin (EN) - 2024.pdf"
                                        class="btn btn-outline-primary"><i class="bi bi-download me-2"></i>
                                        Download CV</a>
                                    <button @click="openContactDialog" class="btn btn-primary ms-3"><i
                                            class="bi bi-envelope me-2"></i>
                                        Hire Me</button>
                                </div>

                            </div>
                        </section>

                        <hr class="my-5">

                        <section class="profile-skills">
                            <h2 class="section-title">Skill & Expertise</h2>

                            <div class="row">
                                <div class="col-md-6">
                                    <h3 class="skill-title">Front-end Development</h3>
                                    <ul class="list-unstyled">
                                        <li>HTML5 & CSS3</li>
                                        <li>JavaScript & ES6</li>
                                        <li>JQuery</li>
                                        <li>Vue Js & Nuxt Js</li>
                                        <li>Quasar Framework</li>
                                        <li>React Js  & Next JS</li>
                                        <li>Bootstrap & Tailwind CSS</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="skill-title">Back-end Development</h3>
                                    <ul class="list-unstyled">
                                        <li>PHP Laravel / Lumen</li>
                                        <li>Node Js, Express Js & Nest JS</li>
                                        <li>PHP Codeigniter 4</li>
                                        <li>MySQL & PostgreSQL</li>
                                        <li>MongoDB</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="skill-title">DevOps & Tools</h3>
                                    <ul class="list-unstyled">
                                        <li>Linux & Ubuntu</li>
                                        <li>AWS & Google Cloud</li>
                                        <li>Docker</li>
                                        <li>CI/CD</li>
                                        <li>Git & Github / Gitlab</li>
                                        <li>Postman & Insomnia</li>
                                        <li>VS Code</li>
                                        <li>Figma</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h3 class="skill-title">Other Skills</h3>
                                    <ul class="list-unstyled">
                                        <li>Agile Methodology</li>
                                        <li>Unit Testing</li>
                                        <li>Database Designing</li>
                                        <li>UI/UX Design</li>
                                        <li>SEO & Google Analytics</li>
                                        <li>Web Security</li>
                                        <li>Performance Optimization</li>
                                        <li>Design to Code conversion</li>
                                        <li>Responsive UI</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr class="my-5">

                        <section class="profile-experience">
                            <h2 class="section-title">Experience</h2>
                            <div class="experience-item">
                                <h3 class="experience-title">Full-stack Developer (Remote)</h3>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h4 class="experience-company">PT Satu Resolusi Optima (Onero Solutions)</h4>
                                        <p class="experience-company-link">
                                            <a href="https://onero.id">
                                                <i class="bi bi-link-45deg me-1"></i>onero.id</a>
                                        </p>
                                    </div>
                                    <p class="experience-date">Sept 2021 - Nov 2024</p>
                                </div>
                                <p class="experience-desc">
                                    I am responsible as a full-stack developer and Technical Lead in several products
                                    that my company develops. I handle the front end using Quasar & Vue Js / Nuxt Js and
                                    the back end using Laravel/Lumen, NodeJs, and Codeigniter 4.
                                </p>
                            </div>
                            <div class="experience-item">
                                <h3 class="experience-title">Trainer & Web Developer</h3>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h4 class="experience-company">CV TRAINIT CIPTA INFORMATIKA</h4>
                                        <p class="experience-company-link"><a href="https://teamtrainit.com">
                                                <i class="bi bi-link me-1"></i> teamtrainit.com</a>
                                        </p>
                                    </div>
                                    <p class="experience-date">Sept 2019 - Sept 2021</p>
                                </div>
                                <p class="experience-desc">
                                    I am responsible for being a trainer, who teaches our students to learn website
                                    programming from scratch using real case studies.
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    title: 'Profile',
    meta: [
        {
            name: 'title',
            content: 'Profile'
        },
        {
            name: 'description',
            content: 'Arbi Syarifudin is a Full Stack Developer, loves to code and design. He is passionate about combining programming and design to create functional and visually appealing web solutions.'
        },
        {
            name: 'keywords',
            content: 'Arbi Syarifudin, Full Stack Developer, Web Developer, Software Engineer, Laravel, Vue Js, Nuxt Js, Quasar, React Js, Node Js, Express Js, Codeigniter 4, MySQL, PostgreSQL, MongoDB, RESTful API, Linux, Ubuntu, AWS, Google Cloud, Docker, CI/CD, Git, Github, Gitlab, Postman, Insomnia, VS Code, Figma, Agile Methodology, Unit Testing, Database Designing, UI/UX Design, SEO, Google Analytics, Web Security, Performance Optimization'
        }
    ]
})

const openContactDialog = () => {
    const contactDialog = new bootstrap.Modal(document.getElementById('contactDialog'), { keyboard: false })
    contactDialog.show()
}

</script>

<style lang="scss" scoped>
.profile {
    padding-top: 25px;
    padding-bottom: 20px;

    .scrollable-area {
        height: calc(100vh - 180px);
        overflow-y: auto;
        padding-right: 30px;

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background-color: #b3b3b3;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #0f5fff;
            border-radius: 10px;
        }
    }

    &-image {
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: top;
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 20px;
        display: inline-block;
    }

    &-name {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    &-role {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    &-short {
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
        line-height: 1.9;
        color: #cccaca;
    }

    &-desc {
        margin-bottom: 1.1rem;
        font-size: 0.95rem;
        line-height: 1.9;
        color: #cccaca;

        &.cta {
            font-size: 1.1rem;
            font-weight: 600;
            color: #fff;
        }
    }

    &-contact {
        margin-bottom: 1.5rem;

        li {
            margin-bottom: 0.5rem;
        }
    }

    &-socials {
        a {
            font-size: 0.9rem;
        }

        .upwork {
            padding: 3px;
        }
    }

    &-left {
        .profile {
            &-image {
                margin: 0 auto;
                margin-bottom: 20px;
            }

            &-name {
                font-size: 2rem;
            }

            &-role {
                font-size: 1.2rem;
            }

            &-contact {
                li {
                    margin-bottom: 0.5rem;
                }
            }
        }
    }

    &-experience {
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
        }

        .experience {
            &-item {
                margin-bottom: 2.2rem;
            }

            &-title {
                font-size: 1rem;
                font-weight: 700;
                margin-bottom: 0.75rem;
            }

            &-company {
                font-size: 1.3rem;
                font-weight: 400;
                margin-bottom: 0.75rem;

                &-link {
                    margin-top: -10px;

                    a {
                        font-size: 1rem;
                        color: #0f5fff;
                        text-decoration: none;
                    }
                }
            }

            &-date {
                font-size: 0.85rem;
                font-weight: 400;
                margin-bottom: 0.5rem;
                color: #cccaca;
            }

            &-desc {
                font-size: 0.85rem;
                line-height: 1.9;
                font-weight: 400;
                color: rgba(204, 202, 202, 0.8);
            }
        }

    }

    &-skills {
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
        }

        .skill {
            &-title {
                font-size: 1.2rem;
                font-weight: 700;
                margin-bottom: 0.75rem;
            }
        }

        ul {
            li {
                font-size: 0.9rem;
                font-weight: 400;
                margin-bottom: 0.4rem;
                color: #cccaca;
            }
        }
    }
}

/* TABLET */

@media (max-width: 991px) {
    .profile {
        &-left {
            .profile {
                &-image {
                    width: 150px;
                    height: 150px;
                }

                &-name {
                    font-size: 1.8rem;
                }

                &-role {
                    font-size: 1rem;
                }
            }
        }
    }
}

/* MOBILE */

@media (max-width: 767px) {
    .profile {
        .scrollable-area {
            padding-right: 0;
            height: auto;
            overflow-y: visible;
            margin-top: 40px;
        }
    }
}
</style>
