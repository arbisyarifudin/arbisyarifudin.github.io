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
                                <div v-if="project.subtitle" class="mb-2" style="margin-top: -10px">{{ project.subtitle }}</div>
                                <div class="d-flex justify-content-between align-items-center" v-if="project.categories?.length">
                                    <div class="work-item__category"><span>Category:</span> {{ project.categories.map(v => v).join(', ') }}</div>
                                    <div class="work-item__more" v-if="project.slug">
                                        <router-link :to="`/work/${project.slug}`"><i class="bi bi-arrow-right"></i> View
                                            Project</router-link>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center mt-2" v-if="project.roles?.length">
                                    <div class="work-item__category"><span>Role:</span> {{ project.roles.map(v => v).join(', ') }}</div>
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
        },
        {
            name: 'title',
            content: 'Works'
        }
    ]
})

const projects = ref([
    {
        id: 1,
        title: 'Satuin.id',
        subtitle: 'All-in-one CRM system',
        year: '2022 - 2024',
        categories: ['Custom Development', 'Web Apps', 'CRM'],
        roles: ['Fullstack Developer'],
        image: '/projects/satuin.id.webp',
        slug: null,
        siteLink: 'https://satuin.id'
    },
    {
        id: 2,
        title: 'Satuin Connect',
        subtitle: 'Satuin.id in Mobile App',
        year: '2022 - 2023',
        categories: ['Mobile Development', 'CRM', 'Chat System'],
        roles: ['Fullstack Developer'],
        image: '/projects/satuin.id-mobile.webp',
        slug: null,
        siteLink: 'https://play.google.com/store/apps/details?id=com.onero.satuin&pcampaignid=web_share'
    },
    {
        id: 2,
        title: 'JB Radio',
        subtitle: 'Jogja Belajar Radio',
        year: 2023,
        categories: ['Web Development', 'Website', 'Media', 'Education'],
        roles: ['Frontend Developer'],
        image: '/projects/jbradio.jpg',
        slug: null,
        siteLink: 'https://jbradio.jogjabelajar.org'
    },
    {
        id: 4,
        title: 'JB TV',
        subtitle: 'Jogja Belajar TV',
        year: 2022,
        categories: ['Web Development', 'Website', 'Media', 'Education'],
        roles: ['Frontend Developer'],
        image: '/projects/jbtv.jpg',
        slug: null,
        siteLink: 'https://jbtv.jogjabelajar.org'
    },
    {
        id: 5,
        title: 'Ujiaja',
        subtitle: 'Private Mentor & Tryout System', 
        year: '2021 - 2022',
        categories: ['Custom Development', 'Company Profile', 'Web Apps', 'LMS'],
        roles: ['Fullstack Developer'],
        image: '/projects/ujiaja.png',
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
                min-height: 120px;

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

                    span {
                        font-weight: 500;
                        margin-right: 5px;
                        color: #fff;
                    }
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