<template>
    <Layout>
        <section class="py-16 md:py-20 xl:py-32">
            <div class="container px-5 sm:px-8 xl:px-40">
                <a href="https://www.iubenda.com/privacy-policy/25848319"
                    class="iubenda-nostyle no-brand iubenda-embed iub-body-embed" title="Privacy Policy">Privacy
                    Policy</a>
            </div>
        </section>
    </Layout>
</template>

<script>

export default {
    metaInfo: {
        title: 'Cookie Policy'
    },
    mounted() {
        var s = document.createElement('script'),
            tag = document.getElementsByTagName('script')[0];
        s.src = '//cdn.iubenda.com/iubenda.js';
        tag.parentNode.insertBefore(s, tag);
    }
};
</script>
