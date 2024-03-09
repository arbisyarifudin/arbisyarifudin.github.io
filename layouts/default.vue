<template>
    <div>
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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Service</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            <li class="nav-item message">
                                <a class="nav-link" href="#"><i class="bi bi-envelope"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <main id="main" class="main">
            <RouterView />
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
useHead({
    title: 'Home',
    link: [
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
        },
        {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        }
    ]
})
</script>