<template>
    <div id="page" class="page work-detail">
        <div class="container">
            <section class="page-header d-lg-flex justify-content-between pb-2 pb-md-4">
                <div class="page-title">Project 1</div>
                <div class="text-start">
                    <div class="page-subtitle">Overview</div>
                    <p class="page-description">This is a project that I worked on in 2019. It's a web development and
                        design project.</p>
                </div>
            </section>

            <section class="page-hero">
                <img src="https://via.placeholder.com/1280x400" alt="Project 1" class="img-fluid" />
                <div class="row">
                    <div class="col-md-4">
                        <div class="work-summary">
                            <div class="work-summary__title">Year</div>
                            <div class="work-summary__info">2019</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="work-summary">
                            <div class="work-summary__title">Role</div>
                            <div class="work-summary__info">Fullstack Developer</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="work-summary">
                            <div class="work-summary__title">Service</div>
                            <div class="work-summary__info">
                                <ul>
                                    <li>Web Development</li>
                                    <li>Web Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-content">
                <div class="row">
                    <div class="col-md-8">
                        <div class="work-detail__content">
                            <h2>Overview</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h2>Goals</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <h2>My Role</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="work-detail__sidebar">
                            <h3>Details</h3>
                            <ul>
                                <li>Client: <span>Client 1</span></li>
                                <li>Category: <span>Web Development</span></li>
                                <li>Tags: <span>Web Design, Web Development</span></li>
                                <li>Website: <span><a href="https://www.example.com"
                                            target="_blank">www.example.com</a></span></li>
                            </ul>

                            <h3>Stack & Tools</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>VueJs</li>
                                <li>PHP / Laravel</li>
                                <li>VS Code</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.work-detail {
    .page-hero {
        margin-bottom: 30px;
        img {
            margin-bottom: 30px;
        }
        .work-summary {
            margin-bottom: 20px;
            .work-summary__title {
                font-size: 0.85rem;
                font-weight: 500;
                color: #aaa;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
            .work-summary__info {
                font-size: 1.2rem;
                ul {
                    padding-left: 0;
                    li {
                        list-style: none;
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
    .page-content {
        .work-detail__content {
            h2 {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 20px;
            }
            p {
                font-size: 1.1rem;
                margin-bottom: 20px;
                line-height: 1.9;
                color: #f5f5f5;
            }
        }
        .work-detail__sidebar {
            h3 {
                font-size: 1rem;
                font-weight: 700;
                margin-bottom: 20px;
            }
            ul {
                li {
                    font-size: 1rem;
                    margin-bottom: 10px;
                    span {
                        font-weight: 500;
                        color: #b9b9b9;
                    }
                }
            }
        }
    }
}
</style>