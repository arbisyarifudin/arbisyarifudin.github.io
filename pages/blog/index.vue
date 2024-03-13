<template>
    <div id="page" class="page blog">
        <div class="container">
            <section class="page-header">
                <div class="page-title">Blogs</div>
                <p class="page-description">Here are my latest blog posts.</p>
            </section>

            <section class="blog-list">
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="blog-item">
                            <div class="blog-item__body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="blog-item__title">Blog 1</h3>
                                    <div class="blog-item__date">May 1, 2021</div>
                                </div>
                                <div class="blog-item__summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                <div class="blog-item__more">
                                    <router-link to="/blog/blog-1"><i class="bi bi-arrow-right"></i> <span>Read More</span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="blog-item">
                            <div class="blog-item__body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3 class="blog-item__title">Blog 2</h3>
                                    <div class="blog-item__date">May 1, 2021</div>
                                </div>
                                <div class="blog-item__summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                <div class="blog-item__more">
                                    <router-link to="/blog/blog-1"><i class="bi bi-arrow-right"></i> <span>Read More</span></router-link>
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
    title: 'Blogs',
    meta: [
        {
            name: 'description',
            content: 'Here are some of the blog posts that Arbi Syarifudin has written.'
        },
        {
            name: 'title',
            content: 'Blogs'
        }
    ]
})
</script>

<style lang="scss" scoped>
.blog {
    .blog-list {
        .blog-item {
            margin-bottom: 30px;
            border-bottom: 1px solid rgba(240, 240, 240, 0.4);

            .blog-item__image {
                img {
                    width: 100%;
                    height: auto;
                }
            }

            .blog-item__body {
                padding: 20px;

                .blog-item__title {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }

                .blog-item__date {
                    font-size: 0.9rem;
                    color: #666;
                }

                .blog-item__summary {
                    margin-top: 10px;
                    color: #666;
                }

                .blog-item__more {
                    margin-top: 10px;

                    a {
                        color: #f5f5f5;
                        text-decoration: none;

                        span {
                            transition: margin-left 0.3s;
                        }

                        i {
                            margin-right: 5px;
                            transition: margin-left 0.3s;
                        }

                        &:hover {
                            span {
                                margin-left: -5px;
                            }

                            i {
                                margin-left: 5px;
                            }
                        }

                    }
                }
            }
        }
    }
}
</style>