<template>
    <div id="page" class="page work">
        <div class="container">
            <section class="page-header">
                <div class="page-title">My Works</div>
                <p class="page-description">Here are some of the projects I've worked on.</p>
            </section>
            <section class="work-list">
                <div class="row">
                    <div class="col-md-6 mb-4" v-for="project in projects" :key="project.id">
                        <div class="work-item">
                            <div class="work-item__image">
                                <img :src="project.image" :alt="project.title" class="img-fluid">
                            </div>
                            <div class="work-item__body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="work-item__title">{{ project.title }} <a v-if="project.siteLink" :href="project.siteLink" target="_blank" title="View Site"><i class="bi bi-link-45deg ms-1"></i></a></h3>
                                    <div class="work-item__year">{{ project.year }}</div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="work-item__category">{{ project.categories.map(v => v).join(', ') }}</div>
                                    <div class="work-item__more" v-if="project.slug">
                                        <router-link :to="`/work/${project.slug}`"><i class="bi bi-arrow-right"></i> View
                                            Project</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4 d-none">
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
                                        <router-link to="/work/project-1"><i class="bi bi-arrow-right"></i> View
                                            Project</router-link>
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

const projects = ref([
    {
        id: 1,
        title: 'Satuin CRM',
        year: 2023,
        categories: ['Custom Development', 'Website'],
        image: 'https://satuin.id/wp-content/uploads/2023/05/Content.png',
        slug: null,
        siteLink: 'https://satuin.id'
    },
    {
        id: 1,
        title: 'Satuin Mobile App',
        year: 2023,
        categories: ['Mobile Development'],
        image: 'https://satuin.id/wp-content/uploads/2023/05/Content-1.png',
        slug: null
    },
    {
        id: 2,
        title: 'JB Radio',
        year: 2023,
        categories: ['Web Development'],
        image: 'https://awesomescreenshot.s3.amazonaws.com/image/1973383/46724199-b251b127c7e24469a4a8040194c8e60a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20240313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240313T060733Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2b33174d606e93b8ebf9175f3bc84977f05f022a9c039541f2e1b0d2ffb8743',
        slug: null,
        siteLink: 'https://jbradio.jogjabelajar.org'
    },
    {
        id: 3,
        title: 'JB TV',
        year: 2022,
        categories: ['Web Development'],
        image: 'https://awesomescreenshot.s3.amazonaws.com/image/1973383/46726000-9df2d46c50e755401290d0a12a80ebbc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20240313%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240313T072241Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=5272dc2f5fbc834396960d20729ee4fa26f237bee529a3dfad31d88de593d654',
        slug: null,
        siteLink: 'https://jbtv.jogjabelajar.org'
    },
])

</script>

<style lang="scss" scoped>
.work {
    .work-list {
        .work-item {
            margin-bottom: 30px;
            // border-bottom: 1px solid rgba(240, 240, 240, 0.4);
            border: 1px solid rgba(240, 240, 240, 0.4);

            .work-item__image {
                border: 1px solid rgba(240, 240, 240, 0.4);
                // padding: 10px;

                img {
                    width: 100%;
                    height: 350px;
                    object-fit: contain;
                }
            }

            .work-item__body {
                padding: 20px;
                border-radius: 5px;

                .work-item__title {
                    margin-bottom: 10px;
                    font-size: 24px;
                    font-weight: 600;

                    display: flex;
                    align-items: center;

                    i {
                        font-size: 24px;
                        margin-top: 3px;
                        display: inline-block;
                    }
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