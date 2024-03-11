<template>
    <div id="page" class="page blog-detail">
        <section class="post-hero">
            <div class="container">
                <div class="post-back mb-4">
                    <router-link to="/blog"><i class="bi bi-arrow-left me-2"></i> Back to Blogs</router-link>
                </div>
                <div class="post-hero__title">The Post Title is Here</div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="post-author">
                        <img src="https://via.placeholder.com/100" alt="Author" class="img-fluid rounded-circle" />
                        <div class="">
                            <div class="post-author__name">Arbi Syarifudin</div>
                            <div class="post-author__date">Updated Dec 10, 2023 · 8 min read</div>
                        </div>
                    </div>
                    <div class="post-category">
                        <div class="post-category__title">Category</div>
                        <div class="post-category__list">
                            <span>Web Development</span>
                            <span>Design</span>
                        </div>
                    </div>
                </div>
                <div class="post-hero__image">
                    <img src="https://via.placeholder.com/1280x500" alt="Post 1" class="img-fluid" />
                </div>
            </div>

        </section>

        <section class="post-body">
            <div class="container">
                <div class="post-body__content">
                    <h2>Subtitle 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <h2>Subtitle 2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
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
        </section>
    </div>
</template>

<style lang="scss" scoped>
.blog-detail {
    background-color: #f9f5f2;
    padding-top: 20px;
    color: #282825;

    .post-back {
        a {
            font-size: 0.8rem;
            color: #3f3f3f;
            display: flex;
            align-items: center;
            text-decoration: none;
            transition: 0.3s;

            i {
                font-size: 1rem;
            }

            &:hover {
                color: #0f5fff;
            }
        }
    }

    .post-hero {
        .post-hero__title {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .post-author {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            img {
                margin-right: 15px;
                width: 50px;
                height: 50px;
                object-fit: cover;
            }

            .post-author__name {
                font-weight: 700;
                font-size: 1.2rem;
            }

            .post-author__date {
                font-size: 0.85rem;
                color: #3f3f3f;
            }
        }

        .post-category {
            .post-category__title {
                font-size: 0.85rem;
                font-weight: 500;
                color: #aaa;
                margin-bottom: 5px;
            }

            .post-category__list {
                span {
                    font-size: 15px;
                    font-weight: 500;
                    margin-right: 10px;
                    color: #3f3f3f;

                    &::after {
                        content: ',';
                    }

                    &:last-child {
                        margin-right: 0;

                        &::after {
                            content: '';
                        }
                    }
                }
            }

        }

        .post-hero__image {
            margin: 30px auto 70px;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .post-body {
        color: #3f3f3f;
        font-size: 20px;
        line-height: 160%;

        .post-body__content {

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-weight: 700;
                margin-bottom: 15px;
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.8rem;
            }

            h3 {
                font-size: 1.6rem;
            }

            h4 {
                font-size: 1.4rem;
            }

            h5 {
                font-size: 1.2rem;
            }

            h6 {
                font-size: 1rem;
            }

            p {
                margin-bottom: 25px;
                font-weight: 500;
                line-height: 1.7;
                font-size: 1.1rem;
            }
        }
    }
}
</style>