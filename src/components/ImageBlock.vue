<template>
    <section class="relative flex items-center py-16 overflow-hidden md:py-20 lg:py-20 xl:py-32">
        <div class="container">
            <div class="px-5 lg:w-6/12 xl:w-5/12 xl:px-4 sm:px-8"
                :class="[contentClass, mediaAlign == 'left' ? 'md:float-right' : '']">
                <p class="mb-1 text-xs tracking-widest uppercase text-primary md:text-base font-demi md:mb-3">{{ tagline
                }}</p>
                <h1 class="mb-3 xl:mb-5" v-html="title"></h1>
                <p class="lg:text-lg" v-html="desc"></p>
                <slot name="content"></slot>
                <div v-if="linkUrl" class="mt-8 md:mt-10">
                    <a class="btn btn-primary" @click="callAction" v-if="linkUrl.indexOf('http')">{{ linkText }}</a>
                    <g-link v-else :to="linkUrl" class="btn btn-primary">{{ linkText }}</g-link>
                </div>
                <a class="mt-8 btn btn-primary md:mt-10" @click="callAction" v-if="linkAction">{{ linkText }}</a>
            </div>
            <div class="inset-y-0 flex items-center w-full lg:w-6/12 lg:absolute"
                :class="[mediaContentAlign == 'left' ? 'justify-start' : mediaContentAlign == 'right' ? 'justify-end' : 'justify-center', mediaAlign == 'left' ? 'left-0' : 'right-0']">
                <slot name="media"></slot>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: 'ImageBlock',
    props: {
        tagline: { type: String },
        title: { type: String },
        desc: { type: String, required: true },
        mediaAlign: { type: String, default: 'right' },
        mediaContentAlign: { type: String, default: 'center' },
        contentClass: { type: String },
        linkUrl: { type: String },
        linkText: { type: String },
        linkAction: { type: Function }
    },
    methods: {
        callAction() {
            if (this.linkAction) this.linkAction();
            else if (this.linkUrl) window.location = this.linkUrl;
        }
    }
};
</script>
