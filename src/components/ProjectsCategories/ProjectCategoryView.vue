<template>
	<div>
		<BaseLayout>
			<template #header>{{ h1 }}</template>
			<template #body>
				<div class="w-full shadow-lg rounded mt-5">
					<div class="bg-white">
						<table class="w-full">
							<tbody class="bg-white">
							<tr v-for="item in 3" :key="item" class="accordion border-b border-grey-light hover:bg-gray-100" @click="panel = true">
								<td class="flex inline-flex items-center">
									<span class="py-3 w-40">
										<p class="text-gray-800 text-sm">Project name</p>
										<p class="text-xs text-gray-600 font-medium">Process</p>
									</span>
								</td>
								<td class="hidden md:table-cell">
									<p class="text-sm text-gray-700 font-medium">Tasks</p>
									<p class="text-xs text-gray-500 font-medium">352</p>
								</td>
								<td>
									<DropdownMenu class="lg:hidden" :actions="getActions()"></DropdownMenu>
									<div class="hidden lg:block">
										<router-link
											to="/projects-categories/view"
											class="rounded-l px-5 py-1 border border-4 border-green-400 text-green-600 hover:bg-green-400 hover:text-white">
											Open
										</router-link>
										<router-link
											to="#"
											class="rounded-r px-5 py-1 border border-4 border-red-400 text-red-600 hover:bg-red-400 hover:text-white">
											Delete
										</router-link>
									</div>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</template>
		</BaseLayout>
	</div>
</template>

<script>
	export default {
		name: 'ProjectCategoryView',
		components: {},
		props: [],
		data () {
			return {
				h1: 'Project Category'
			}
		},
		computed: {

		},
		mounted () {

		},
		methods: {
			getActions () {
				return []
			}
		}
	}
</script>
