<template>
  <div class="card transition duration-300 ease-in-out hover:shadow-sm flex flex-col my-5">
    <div class="card-body py-4">
      <nav
        aria-label="breadcrumb"
        class="text-left"
      >
        <ol
          v-if="current"
          class="breadcrumb md:flex"
        >
          <li class="inline md:hidden">
            Breadcrumbs:
          </li>
          <li
            v-for="(item, i) in items"
            :key="i"
            class="breadcrumb-item  inline text-gray-600"
            @drop="drop($event, item.payload)"
            @dragenter.prevent="item.payload.hoverClass = 'bg-red-500'"
            @dragover.prevent="item.payload.hoverClass = 'bg-red-500'"
            @dragleave="item.payload.hoverClass = ''"
          >
            <router-link
              :to="item.to"
              class="text-gray-600 hover:text-purple-700 mx-0 md:mx-1"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li
            class="breadcrumb-item active inline text-purple-700 hover:text-purple-700 md:mx-1"
            aria-current="page"
          >
            {{ current }}
          </li>
        </ol>

        <ol
          v-else
          class="breadcrumb flex"
          style="padding-left: 0;"
        >
          <li
            class="breadcrumb-item active text-purple-700 hover:text-purple-700 mx-2"
            aria-current="page"
          >
            Categories
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Breadcrumbs",
		props: {
			items: {
				required: true,
				type: Array
			},
			title: {
				required: false,
				type: String,
				default: 'Breadcrumbs'
			},
			current: {
				required: false,
				type: String,
				default: 'Current page'
			},
      drop: {
			  type: Function,
        required: false,
        default: () => () => {}
      }
		}
	}
</script>

<style scoped lang="scss">
	.breadcrumb .breadcrumb-item {
		position: relative;
	}

	.breadcrumb .breadcrumb-item:not(:last-child):after {
		content: '/';

		@media screen and (max-width: 768px) {
			content: '/';
		}
	}
	@media screen and (max-width: 768px) {
		.breadcrumb .breadcrumb-item:first-child:before {
			content: '->';
		}
	}
</style>
