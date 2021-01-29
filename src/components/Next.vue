<template>
    <section id="nextCase">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div>
                    <p>Next Product</p>
                    <router-link class="flex items-center justify-center next-arrow" :to="link">
                        <h2 class="font-weight-demi">{{ name }}</h2>
                        <g-image immediate="true" blur="0" class="w-3 ml-3"
                            src="~/assets/images/icons/arrow-right-primary.svg" alt=""></g-image>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Next',
    props: {
        name: {
            type: String
        },
        link: {
            type: String
        }
    }
};
</script>

<style lang='scss' scoped>
.next-arrow {
	img {
		transition: all 0.2s;
		position: relative;
	}

	&:hover {
		img {
			transform: translateX(10px);
		}
	}

	@media (max-width: 767px) {
		a {
			img {
				top: -2px;
			}
		}
	}
}
</style>
