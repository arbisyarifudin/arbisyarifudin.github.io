<template>
    <div>
        <div id="top-alert" class="top-alert">This website is under developmet.</div>
        <header id="header" class="header">
            <nav id="navbar" class="navbar navbar-expand-md navbar-dark fixed-top">
                <div class="container">
                    <router-link class="navbar-brand" to="/">Arsyaf.</router-link>
                    <div class="d-flex align-items-center d-md-none">
                        <button class="btn menu-cta-btn d-md-none me-3" @click="openContactDialog"><i class="bi bi-envelope"></i></button>
                        <button class="navbar-toggler d-flex align-items-center" type="button" @click="menuOpened ? hideMenu() : showMenu()"
                            aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon me-2" :class="menuOpened ? 'open' : ''"></span>
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
                            <!-- <li class="nav-item">
                                <router-link class="nav-link" :to="{ path: '/blog' }">Blog</router-link>
                            </li> -->
                            <li class="nav-item message d-md-block d-none">
                                <button class="nav-link" @click="openContactDialog"><i class="bi bi-envelope"></i></button>
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

        <ContactDialog />
    </div>
</template>

<script setup>
import '~/assets/css/main.min.css'
import ContactDialog from '~/components/ContactDialog.vue';

// import { onClickOutside } from 'vue3-click-away'

useHead({
    title: 'Arsyaf.dev',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    htmlAttrs: {
        lang: 'id',
        "data-bs-theme": 'dark'
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
            rel: 'stylesheet',
            // Montserrat, 400, 500, 600, 700
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
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

/* MENU */
const router = useRouter()
watch(router.currentRoute, () => {
    hideMenu()
})

const menuOpened = ref(false)
const showMenu = () => {
    const navbarMenu = document.getElementById('menu')
    const bsCollapse = new bootstrap.Collapse(navbarMenu, { toggle: false })
    bsCollapse.show()

    menuOpened.value = true
}

const hideMenu = () => {
    const navbarMenu = document.getElementById('menu')
    const bsCollapse = new bootstrap.Collapse(navbarMenu, { toggle: false })
    bsCollapse.hide()

    menuOpened.value = false
}

let clickHandler = null
onMounted(() => {
    const topAlert = document.getElementById('top-alert')
    setTimeout(() => {
        topAlert.style.display = 'none'
    }, 5000)

    clickHandler = event => {
        const navbarMenu = document.getElementById('menu')
        const btnToggleMenu = document.querySelector('.navbar-toggler')
        if (menuOpened.value && !navbarMenu.contains(event.target) && !btnToggleMenu.contains(event.target)) {
            hideMenu()
        }
    }
    document.addEventListener('click', clickHandler)
})

onUnmounted(() => {
    document.removeEventListener('click', clickHandler)
})

/* CONTACT DIALOG */
const openContactDialog = () => {
    const contactDialog = new bootstrap.Modal(document.getElementById('contactDialog'), { keyboard: false })
    contactDialog.show()
}
</script>

<style scoped>
.fixed-h {
    height: calc(100vh - 20px);
    overflow: hidden;
}
</style>