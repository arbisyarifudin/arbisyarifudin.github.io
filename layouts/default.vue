<template>
    <div>
        <!-- <div id="top-alert" class="top-alert">This website is under developmet.</div> -->
        <header id="header" class="header">
            <nav id="navbar" class="navbar navbar-expand-md navbar-dark">
                <div class="container">
                    <router-link class="navbar-brand" to="/">Arsyaf.</router-link>
                    <div class="d-flex align-items-center">
                        <button class="btn menu-cta-btn d-md-none me-3"><i class="bi bi-envelope"></i></button>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                            aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/' }">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/profile' }">Profile</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/work' }">Work</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/service' }">Service</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/blog' }">Blog</router-link>
                            </li>
                            <li class="nav-item message d-md-block d-none">
                                <button class="nav-link"><i class="bi bi-envelope"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <main id="main" class="main" :class="[$route.path === '/' ? 'fixed-h' : '']">
            <NuxtPage />
        </main>

        <footer id="footer" class="footer" :class="[$route.path === '/' ? 'd-none' : '']">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <p>&copy; 2024 Arsyaf.dev</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import '~/assets/css/main.min.css'

useHead({
    title: 'Arsyaf.dev',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        },
    ],
    script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' },
    ],
    noscript: [{ children: 'This website requires JavaScript.' }],
})

</script>

<style scoped>
.fixed-h {
    height: calc(100vh - 80px);
    overflow: hidden;
}
</style>