<template>
    <div>
        <div id="top-alert" class="top-alert">This website is under developmet.</div>
        <header id="header" class="header">
            <nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
                <div class="container">
                    <router-link class="navbar-brand" to="/">Arsyaf.</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                        aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
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
                            <li class="nav-item message">
                                <button class="nav-link"><i class="bi bi-envelope"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <main id="main" class="main">
            <NuxtPage />
        </main>

        <footer id="footer" class="footer">
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

</script>