<template>
  <table class="w-full shadow-lg rounded mt-5">
    <tbody :class="`${$color('blocks')}`">
      <tr
        v-for="task in tasks"
        :key="task.id"
        :class="`accordion border-b ${$color('borderMain')} hover:${$color('blocksHover')}`"
        @click="panel = true"
      >
        <td class="flex inline-flex items-center">
          <span class="py-3 w-40">
            <p :class="`${$color('textMain')}-800 text-sm`">{{ task.title }}</p>
            <p :class="`md:hidden text-xs ${$color('textMain')}-600 font-medium`">{{
              capitalize(task.status)
            }}</p>
            <p
              v-if="task.category"
              :class="`pl-2 hidden md:table-cell text-xs text-center w-full ${$color('textMain')}-500 font-medium`"
            >
              <router-link
                :to="{
                  name: 'ProjectCategoryChildrenList',
                  params: {
                    id: task.category.id
                  }
                }"
              >{{ task.category.title }}</router-link>
            </p>
            <p
              v-else
              :class="`pl-2 hidden md:table-cell text-xs text-center w-full ${$color('textMain')}-500 font-medium`"
            > - </p>
          </span>
        </td>
        <td class="hidden md:table-cell">
          <p
            v-if="task.status === 'created' || task.status === 'active'"
            :class="`text-sm ${$color('textMain')}-800 font-medium`"
          >
            {{ capitalize(task.status) }}
          </p>
          <p :class="`text-xs ${$color('textMain')}-500 font-medium`">
            {{ getTaskFormattedTime(task) }}
          </p>
        </td>
        <td class="hidden md:table-cell">
          <p
            v-if="task.category"
            :class="`text-sm ${$color('textMain')}-700 font-medium`"
          >
            <router-link
              :to="{
                name: 'ProjectCategoryChildrenList',
                params: {
                  id: task.category.id
                }
              }"
            >
              {{ task.category.title }}
            </router-link>
          </p>
          <p
            v-else
            :class="`text-sm ${$color('textMain')}-700 font-medium`"
          >
            -
          </p>
        </td>
        <td>
          <DropdownMenu
            class="lg:hidden"
            :actions="getActions(task)"
          />
          <div class="hidden lg:block">
            <Button
              v-if="status !== 'done'"
              color="green"
              extra-class="rounded-l"
              @click="updateStatus(task, 'done')"
            >
              Done
            </Button>
            <Button
              color="blue"
              @click="$router.push(`/tasks/${task.id}/edit`)"
            >
              Open task
            </Button>
            <Button
              v-if="status === 'done' || status === 'hidden'"
              color="blue"
              @click="updateStatus(task, 'active')"
            >
              Activate
            </Button>
            <Button
              v-if="status !== 'hidden'"
              color="gray"
              @click="updateStatus(task, 'hidden')"
            >
              Hide
            </Button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
