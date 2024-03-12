<template>
    <div class="modal fade" id="contactDialog" tabindex="-1" aria-labelledby="contactDialogLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="submitMessage">
                    <div class="modal-body">
                        <h1 class="modal-title" id="contactDialogLabel">Contact me</h1>
                        <p>Send me a message and explain your project. I'll get back to you as soon as possible.</p>
                        <div class="mb-3">
                            <label for="sender_name" class="col-form-label">Your Name:</label>
                            <input type="text" class="form-control" id="sender_name" placeholder="Enter your name"
                                required v-model="form.name" />
                        </div>
                        <div class="mb-3">
                            <label for="sender_email" class="col-form-label">Your Email:</label>
                            <input class="form-control" id="sender_email" placeholder="Enter your email" required
                                v-model="form.email" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message" placeholder="Enter your message" rows="4"
                                required v-model="form.message"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary"><i class="bi bi-send me-2"></i> Send
                            Message</button>
                    </div>
                </form>

                <div class="modal-more-contact px-4">
                    <p>Or you can contact me via:</p>
                    <ul>
                        <li><a :href="`mailto:arbisyarifudin@gmail.com?subject=Hello Arbi!&body=${messageText}`"
                                title="Email"><i class="bi bi-envelope me-2"></i>
                                arbisyarifudin@gmail.com</a></li>
                        <li><a :href="`https://t.me/arbisyarifudin?text=${messageText}`" target="_blank"
                                title="Telegram"><i class="bi bi-telegram me-2"></i> @arbisyarifudin</a></li>
                        <li><a :href="`https://wa.me/+6285773716731?text=${messageText}`" target="_blank"
                                title="WhatsApp"><i class="bi bi-whatsapp me-2"></i> +62 857 7371 6731</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const form = ref({
    name: '',
    email: '',
    message: ''
})

const messageText = computed(() => {
    let text = ''

    if (form.value.name && form.value.email && form.value.message) {
        text = `Hello Arbi! I'm ${form.value.name} (${form.value.email}). ${form.value.message}`
    } else if (form.value.name && form.value.email && !form.value.message) {
        text = `Hello Arbi! I'm ${form.value.name} (${form.value.email}). I need your help about my project.`
    } else if (form.value.name && !form.value.email && form.value.message) {
        text = `Hello Arbi! I'm ${form.value.name}. ${form.value.message}`
    } else if (form.value.name && !form.value.email && !form.value.message) {
        text = `Hello Arbi! I'm ${form.value.name}. I need your help about my project.`
    } else if (!form.value.name && form.value.email && form.value.message) {
        text = `Hello Arbi! I need your help about my project. ${form.value.message}`
    } else if (!form.value.name && form.value.email && !form.value.message) {
        text = `Hello Arbi! I need your help about my project.`
    } else if (!form.value.name && !form.value.email && form.value.message) {
        text = `Hello Arbi! I need your help about my project. ${form.value.message}`
    } else {
        text = `Hello Arbi! I need your help about my project.`
    }

    return encodeURIComponent(text)
})

const submitMessage = () => {
    console.log('submit message')

    fetch('YOUR_FUNCTION_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Hello, this is a test message.'
        }),
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });

}

</script>

<style lang="scss" scoped>
.modal-content {
    background-color: #000;

    .modal-header {
        border-bottom: 0;
    }

    .modal-title {
        font-size: 40px;
        font-weight: 600;
    }

    .modal-body {
        padding: 0 30px 10px 30px;

        p {
            color: #bcbbbb;
            font-size: 16px;
            line-height: 24px;
        }

    }

    form {
        label {
            display: none;
        }

        .form-control {
            padding: 0.75rem 1rem;
            background-color: #1f1f1f;
        }
    }

    .modal-footer {
        border-top: 0;
        padding: 0 30px 30px 30px;
        // background-color: #1f1f1f;
        justify-content: flex-start;

        button {
            padding: 0.75rem 1rem;
            border: 0;
            border-radius: 0.25rem;
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
        }
    }


}

.modal-more-contact {
    // background-color: #1f1f1f;
    color: #bcbbbb;
    font-size: 16px;
    line-height: 24px;

    ul {
        padding: 0;
        list-style: none;

        li {
            margin-bottom: 10px;

            a {
                color: #bcbbbb;
                text-decoration: none;
                display: flex;
                align-items: center;
                transition: color 0.3s ease;

                i {
                    font-size: 24px;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    align-items: center;
                }

                &:hover {
                    color: #fff;
                }
            }
        }
    }
}
</style>