<template>
    <Layout>
        <section class="bg-gray-100">
            <div class="container px-5 sm:px-8 xl:px-4">
                <table class="table-auto bg-white w-full rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th class="px-4 py-5 font-normal text-gray-600 text-left text-xl">Plans</th>
                            <th class="px-4 py-5 font-normal text-xl">Comfort</th>
                            <th class="px-4 py-5 font-normal text-xl">Complete</th>
                            <th class="px-4 py-5 font-normal text-xl">Freedom</th>
                            <th class="px-4 py-5 font-normal text-xl">Infinity</th>
                            <th class="px-4 py-5 font-normal text-xl">Bespoke</th>
                        </tr>
                        <tr>
                            <th class="px-4 py-2 font-normal text-gray-600 text-left text-xl">{{ pricing[0].Plan }}</th>
                            <th class="px-4 py-2 text-2xl font-semibold">{{ pricing[0].Comfort }}</th>
                            <th class="px-4 py-2 text-2xl font-semibold">{{ pricing[0].Complete }}</th>
                            <th class="px-4 py-2 text-2xl font-semibold">{{ pricing[0].Freedom }}</th>
                            <th class="px-4 py-2 text-2xl font-semibold">{{ pricing[0].Infinity }}</th>
                            <th class="px-4 py-2 text-2xl font-semibold">{{ pricing[0].Bespoke }}</th>
                        </tr>
                    </thead>
                    <tbody class="font-medium">
                        <tr v-for="(item, index) in pricing.slice(1)" :key="index"
                            :class="index % 2 == 0 ? 'bg-gray-100' : ''">
                            <td class="px-4 py-2 text-sm font-base" v-html="item.Plan"></td>
                            <td class="px-4 py-2 text-center text-secondary" v-html="getItemContent(item.Comfort)"></td>
                            <td class="px-4 py-2 text-center text-secondary" v-html="getItemContent(item.Complete)"></td>
                            <td class="px-4 py-2 text-center text-secondary" v-html="getItemContent(item.Freedom)"></td>
                            <td class="px-4 py-2 text-center text-secondary" v-html="getItemContent(item.Infinity)"></td>
                            <td class="px-4 py-2 text-center text-secondary" v-html="getItemContent(item.Bespoke)"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td class="px-4 py-6 text-center"><a href="" class="btn-primary">Get Started</a></td>
                            <td class="px-4 py-6 text-center"><a href="" class="btn-gray-100">Get Started</a></td>
                            <td class="px-4 py-6 text-center"><a href="" class="btn-gray-100">Get Started</a></td>
                            <td class="px-4 py-6 text-center"><a href="" class="btn-gray-100">Get Started</a></td>
                            <td class="px-4 py-6 text-center"><a href="" class="btn-gray-100">Get Started</a></td>
                        </tr>
                    </tbody>
                </table>
                <div class="mt-8">
                    <small>
                        Full-Time driver defined as an individual driver completing >=20 bookings in a calendar month.
                        <br />
                        Part-Time drivers, charged at £1 per day (irrespective of the number of bookings completed
                        during the day) until reaching full-tirged at additional driver charge PCM.<br />
                        cancelled, cancelled on arrival and promotional bookings.
                    </small>
                </div>
                <!-- <div v-for="(item, index) in pricing" :keull rounded-lg shadow-lg p-3 mb-3">
					<div class="flex justify-between">
						<div>
							<p class="text-xl font-medium leading-6">{{ item.Plan }}</p>
							<small
								>Fleet size of <span>{{ item['Fleet Size'] }}</span> taxis</small
							>
						</div>
						<p>
							<span class="text-xl font-bold">{{ item['Monthly Charges'] }}</span
							><span class="text-sm text-gray-600">/m</span>
						</p>
					</div>
					<a href="" class="text-primary text-xs text-center block mt-8" @click.prevent="item.showFeatures = !item.showFeatures">View More</a>
					<div v-show="item.showFeatures">
						<div class="flex justify-between mb-3 text-sm" v-for="(value, name) in item.Features" :key="name">
							<p class="mr-2">{{ name }}</p>
							<div class="text-right" v-html="getItemContent(value)"></div>
						</div>
					</div>
			
				</div> -->
            </div>
        </section>
    </Layout>
</template>

<script>
import pricing from '@/assets/data/pricing.json';
// import pricing from '@/assets/data/pricing-mobile.json';

export default {
    data() {
        return {
            pricing: pricing,
            comfort: [],
            showFeatures: false
        };
    },
    methods: {
        getItemContent(item) {
            if (item == 'YES') return '<img class="mx-auto" src="' + require('~/assets/images/icons/checked.svg') + '">';
            else if (item == 'NO') return '<img class="mx-auto" src="' + require('~/assets/images/icons/cancel.svg') + '">';
            else return item;
        },
        show(item) {
            debugger;
            this.showFeatures = !this.showFeatures;
        }
    }
};
</script>

<style lang='scss' scoped></style>
