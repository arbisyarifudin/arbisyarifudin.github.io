<template>
    <div id="page" class="page work">
        <div class="container">
            <section class="page-header">
                <div class="page-title">My Works</div>
                <p class="page-description">Here are some of the projects I've worked on.</p>
            </section>
            <section class="work-list">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="work-item">
                            <div class="work-item__image">
                                <img src="https://placehold.it/400x250" alt="Project 1" class="img-fluid">
                            </div>
                            <div class="work-item__body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="work-item__title">Project 1</h3>
                                    <div class="work-item__year">2019</div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="work-item__category">Web Development, Design</div>
                                    <div class="work-item__more">
                                        <router-link to="/work/project-1"><i class="bi bi-arrow-right"></i> View Project</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="work-item">
                            <div class="work-item__image">
                                <img src="https://placehold.it/400x250" alt="Project 1" class="img-fluid">
                            </div>
                            <div class="work-item__body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="work-item__title">Project 1</h3>
                                    <div class="work-item__year">2019</div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="work-item__category">Web Development, Design</div>
                                    <div class="work-item__more">
                                        <router-link to="/work/project-1"><i class="bi bi-arrow-right"></i> View Project</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Works',
    meta: [
        {
            name: 'description',
            content: 'Here are some of the projects that Arbi Syarifudin has worked on.'
        }
    ]
})
</script>

<style lang="scss" scoped>
.work {
    .work-list {
        .work-item {
            margin-bottom: 30px;
            border-bottom: 1px solid rgba(240, 240, 240, 0.4);

            .work-item__image {
                border: 1px solid rgba(240, 240, 240, 0.4);
                // padding: 10px;

                img {
                    width: 100%;
                    height: 350px;
                    object-fit: cover;
                }
            }
            .work-item__body {
                padding: 20px;
                border-radius: 5px;
                .work-item__title {
                    margin-bottom: 10px;
                    font-size: 24px;
                    font-weight: 600;
                }
                .work-item__year {
                    font-size: 14px;
                    color: #aaa;
                }
                .work-item__category {
                    font-size: 12px;
                    color: #aaa;
                }

                .work-item__more {
                    display: flex;
                    align-items: center;

                    a {
                        font-size: 12px;
                        font-weight: 500;
                        color: #e7e7e7;
                        text-decoration: none;
                        transition: all 0.3s ease;
                        
                        i {
                            margin-right: 15px;
                            transition: all 0.3s ease;
                        }

                        &:hover {
                            color: #fff;

                            i {
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>