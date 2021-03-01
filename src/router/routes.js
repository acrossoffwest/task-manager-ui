const ProjectCategoryList = () => import('src/components/ProjectsCategories/ProjectCategoryList')
const TasksForm = () => import('src/components/Tasks/TasksForm')
const TasksList = () => import('src/components/Tasks/TasksList')
const ProjectCategoryForm = () => import('src/components/ProjectsCategories/ProjectCategoryForm')

const routes = [
	{
		path: '/',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: TasksList,
		name: 'CurrentTasksList'
	},
	{
		path: '/register',
		component: () => import('src/components/Auth/Register'),
		name: 'Register',
		meta: {
			allowedGuests: true,
			transitionName: 'fade-fast'
		}
	},
	{
		path: '/password/forget',
		component: () => import('src/components/Auth/ForgetPassword'),
		name: 'ForgetPassword',
		meta: {
			allowedGuests: true,
			transitionName: 'fade-fast'
		}
	},
	{
		path: '/password/reset',
		component: () => import('src/components/Auth/ResetPassword'),
		name: 'ResetPassword',
		meta: {
			allowedGuests: true,
			transitionName: 'fade-fast'
		}
	},
	{
		path: '/login',
		component: () => import('src/components/Auth/Login'),
		name: 'Login',
		meta: {
			allowedGuests: true,
			transitionName: 'fade-fast'
		}
	},
	{
		path: '/projects-categories',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryList,
		name: 'ProjectCategoryList',
	},
	{
		path: '/projects-categories/create',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryForm,
		name: 'ProjectCategoryCreate'
	},
	{
		path: '/projects-categories/:id/edit',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryForm,
		name: 'ProjectCategoryEdit'
	},
	{
		path: '/projects-categories/status/:status?',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryList,
		name: 'ProjectCategoryChildrenListWithStatus'
	},
	{
		path: '/projects-categories/:id/children/:status?',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryList,
		name: 'ProjectCategoryChildrenList'
	},
	{
		path: '/projects-categories/:project_category_id/create',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: ProjectCategoryForm,
		name: 'ProjectCategoryCreateInCategory'
	},
	{
		path: '/project-categories/:project_category_id/tasks/create',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: TasksForm,
		name: 'TasksCreateWithProjectCategoryId'
	},
	{
		path: '/create',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: TasksForm,
		name: 'TasksCreate'
	},
	{
		path: '/hidden',
		component: TasksList,
		meta: {
			status: 'hidden',
			transitionName: 'slide',
			navbarHidden: true
		},
		name: 'HiddenTasksList'
	},
	{
		path: '/archive',
		component: TasksList,
		meta: {
			status: 'done',
			transitionName: 'slide',
			navbarHidden: true
		},
		name: 'ArchiveTasksList'
	},
	{
		path: '/create',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: () => import('src/components/Tasks/TasksForm'),
		name: 'TasksCreate'
	},
	{
		path: '/:id/edit',
		meta: {
			transitionName: 'slide',
			navbarHidden: true
		},
		component: TasksForm,
		name: 'TasksEdit'
	},
	{
		path: '/settings',
		component: () => import('src/components/Settings'),
		meta: {
			transitionName: 'fade-fast',
			navbarHidden: true
		},
		name: 'Settings'
	},
	{
		path: '/stats',
		component: () => import('src/components/Public/Stats'),
		meta: {
			transitionName: 'fade-fast',
			navbarHidden: false,
			allowedGuests: true,
			notOnlyForLoggedUsers: true
		},
		name: 'Stats'
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
