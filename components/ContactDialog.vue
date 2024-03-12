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
                            <label for="sender_name" class="col-form-label d-none">Your Name:</label>
                            <input type="text" class="form-control" id="sender_name" name="sender_name"
                                placeholder="Enter your name" required v-model="form.name" @change="errors.name = ''" />
                            <div class="form-error" v-if="errors?.name?.length">{{ errors.name }}</div>
                        </div>
                        <div class="mb-3">
                            <label for="sender_email" class="col-form-label d-none">Your Email:</label>
                            <input class="form-control" id="sender_email" name="sender_email"
                                placeholder="Enter your email" required v-model="form.email"
                                @change="errors.email = ''" />
                            <div class="form-error" v-if="errors?.email?.length">{{ errors.email }}</div>
                        </div>

                        <div class="mb-3">
                            <label for="choose_service" class="col-form-label d-none">Choose Service:</label>
                            <select class="form-select" id="choose_service" v-model="form.service" required
                                @change="errors.service = ''">
                                <option value="">- Choose Service -</option>
                                <option value="Custom Development">Custom Development</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile Development">Mobile Development</option>
                                <option value="Web Design & UI/UX">Web Design & UI/UX</option>
                                <option value="Tech Consultation">Tech Consultation</option>
                                <option value="Private Tutoring">Private Tutoring</option>
                                <option value="Other">Other</option>
                            </select>
                            <div class="form-error" v-if="errors?.service?.length">{{ errors.service }}</div>
                        </div>

                        <div class="mb-3">
                            <label for="message" class="col-form-label d-none">Project Details:</label>
                            <textarea class="form-control" id="message" name="message"
                                placeholder="Enter your project details here . ." rows="4" required
                                v-model="form.message" @change="errors.message = ''"></textarea>
                            <div class="form-error" v-if="errors?.message?.length">{{ errors.message }}</div>
                        </div>

                        <div class="mb-3">
                            <label for="choose_budget" class="col-form-label d-none">Choose Budget:</label>
                            <select class="form-select" id="choose_budget" v-model="form.budget" required
                                @change="errors.budget = ''">
                                <option value="">- Your Budget -</option>
                                <option value="2000000">Under Rp 2.000.000</option>
                                <option value="5000000">&gt; Rp 2.000.000 - Rp 5.000.000</option>
                                <option value="15000000">&gt; Rp 5.000.000 - Rp 15.000.000</option>
                                <option value="25000000">&gt; Rp 15.000.000 - Rp 25.000.000</option>
                                <option value="50000000">&gt; Rp 25.000.000 - Rp 50.000.000</option>
                                <option value="100000000">&gt; Rp 50.000.000 - Rp 100.000.000</option>
                                <option value="150000000">Above Rp 100.000.000</option>
                            </select>
                            <div class="form-error" v-if="errors?.budget?.length">{{ errors.budget }}</div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" :disabled="loading">
                            <i class="bi bi-send me-2" v-if="!loading"></i>
                            <i class="bi bi-hour-glass me-2" v-else></i>
                            Send Message
                        </button>
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
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import { ref, computed } from 'vue'
import { useNuxtApp } from '#app';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { $firebaseApp } = useNuxtApp();
const $toast = useToast();

const form = ref({
    name: '',
    email: '',
    message: '',
    service: '',
    budget: ''
})

const errors = ref({
    name: '',
    email: '',
    message: '',
    service: '',
    budget: ''
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

const loading = ref(false)
const db = getFirestore($firebaseApp)

const submitMessage = async () => {
    console.log('submit message')

    // validate form
    for (const key in form.value) {
        if (Object.hasOwnProperty.call(form.value, key)) {
            const element = form.value[key];

            if (!element || element?.length < 1) {
                errors.value[key] = 'This field is required'
            }
        }
    }

    const isError = Object.values(errors.value).some(err => err.length > 0)
    if (isError) return

    loading.value = true
    try {

        // Add a new document to the "submissions" collection
        const docRef = await addDoc(collection(db, "submissions"), {
            name: form.value.name,
            email: form.value.email,
            message: form.value.message,
            service: form.value.service || 'Other',
            budget: form.value.budget ? parseFloat(form.value.budget) : 0,
            createdAt: new Date()
        });
        // console.log("Document written with ID: ", docRef.id);

        if (docRef.id) {

            hitSApi(docRef.id, form.value)

            form.value.name = ''
            form.value.email = ''
            form.value.message = ''
            form.value.service = ''
            form.value.budget = ''

            // hide modal
            const btnClose = document.querySelector('#contactDialog .btn-close')
            btnClose.click()

            $toast.open({
                message: 'Your message has been sent.',
                type: 'success',
                duration: 3000,
                position: 'top-right',
            })
        }

    } catch (err) {
        console.error("Error adding document: ", err);

        $toast.open({
            message: 'Failed to send your message. Please try again later.',
            type: 'error',
            duration: 3000,
            position: 'top-right',
        })

    } finally {
        loading.value = false
    }
}

const hitSApi = async (docRefId, formData) => {
    const data = JSON.parse(JSON.stringify(formData))
    return await fetch('/s/outbound/deal/create', {
        method: 'POST',
        body: JSON.stringify({
            dealName: 'New Deal from FS#' + docRefId,
            dealAmount: data.budget ? parseFloat(data.budget) : 0,
            dealNotes: data.message,
            pipelineID: 'CPP65f046040595d',
            // pipelineID: 'CPP655b6c6ee14d9',
            stageID: 'CST65f046130abef',
            // stageID: 'CST655b6c7d3a42e',
            contactNumber: 'FS#' + docRefId,
            contactName: data.name,
            contactEmail: data.email,
            dealProducts: [
                {
                    name: (data.service || 'Other')
                }
            ]
        })
    })
        .then(response => response.json())
        // .then(data => console.log(data))
        .catch(err => console.error(err))
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

        .form-control,
        .form-select {
            padding: 0.75rem 1rem;
            background-color: #1f1f1f;
        }

        .form-error {
            color: #ffae00;
            font-size: 14px;
            margin-top: 8px;
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