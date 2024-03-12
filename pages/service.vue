<template>
    <div id="page" class="page service">
        <div class="container">
            <section class="page-header">
                <div class="page-title">My Services</div>
                <p class="page-description">Here are the services that I can provide.</p>
            </section>

            <section class="service-list">
                <div class="row">
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-laptop"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Web Development</h3>
                                <p class="service-item__description">I can help you build a website from scratch or
                                    improve your existing website.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-pencil"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Web Design & UI/UX</h3>
                                <p class="service-item__description">I can help you design a website that suits your
                                    needs and preferences.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-phone"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Mobile Development</h3>
                                <p class="service-item__description">I can help you build a mobile app for your business
                                    or personal use.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-gear"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Custom Development</h3>
                                <p class="service-item__description">I can help you build a custom web or mobile
                                    application that suits your needs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-incognito"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Private Tutoring</h3>
                                <p class="service-item__description">I can help you learn web development, mobile
                                    development, or programming in general.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="service-item__icon">
                                <i class="bi bi-lightbulb"></i>
                            </div>
                            <div class="service-item__body">
                                <h3 class="service-item__title">Tech Consultation</h3>
                                <p class="service-item__description">I can help you with your tech-related problems or
                                    questions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="service-cta">
                <div class="service-cta__title">Interested in working with me?</div>
                <div class="service-cta__description">I'm currently available for freelance work. If you have a project
                    that you want to get started, think you need my help with something or just fancy saying hey, then
                    get in touch.</div>
                <div class="service-cta__button">
                    <a href="#" class="btn btn-primary" @click.prevent="openContactDialog"><i class="bi bi-envelope me-2"></i> Contact Me</a>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

useHead({
    title: 'Services',
    meta: [
        {
            name: 'description',
            content: 'Here are the services that Arbi Syarifudin can provide.'
        }
    ]
})

const openContactDialog = () => {
    const contactDialog = new bootstrap.Modal(document.getElementById('contactDialog'), { keyboard: false })
    contactDialog.show()
}

</script>

<style lang="scss" scoped>
.service {
    .service-list {
        .service-item {
            margin-bottom: 30px;
            display: flex;
            border: 1px solid rgba(141, 141, 141, 0.5);
            padding: 20px 30px;
            border-radius: 5px;
            min-height: 150px;

            .service-item__icon {
                font-size: 2rem;
                margin-bottom: 20px;
                margin-right: 30px;
            }

            .service-item__title {
                font-size: 1.5rem;
                font-weight: 500;
                margin-bottom: 10px;
                font-weight: 600;
            }

            .service-item__description {
                font-size: 1rem;
                color: #cccaca;
            }
        }
    }

    .service-cta {
        margin-top: 50px;
        padding: 30px;
        background-color: rgba(141, 141, 141, 0.2);
        border-radius: 5px;

        .service-cta__title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .service-cta__description {
            font-size: 1.25rem;
            margin-bottom: 30px;
            color: #cccaca;
        }

        .service-cta__button {
            a {
                font-size: 1.1rem;
                padding: 10px 30px;
            }
        }
    }
}
</style>