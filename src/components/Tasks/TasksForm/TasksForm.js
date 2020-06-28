export default {
  name: 'TasksForm',
  components: {},
  props: [],
  data () {
    return {
        showSaveAlert: false,
        panel: false,
        isOpen: false,
        counter: {
            common_time: 0,
            start_time: 0
        },
        parentCategories: [],
        statuses: [
            { value: 'created', name: `Created` },
            { value: 'active', name: `Active` },
            { value: 'done', name: `Done` }
        ],
        h1: {
            main: `${this.getId() ? 'Edit' : 'Create'} task`,
            CurrentTasksList: 'Current tasks',
            HiddenTasksList: 'Hidden tasks',
            ArchiveTasksList: 'Archive tasks'
        },
        checkpoints: [
            {
                description: 'Research subjects for task',
                start: 0,
                end: 156
            },
            {
                description: 'Second task',
                start: 156,
                end: 300
            },
            {
                description: 'Third task',
                start: 300,
                end: 750
            }
        ],
        selected: false,
        form: this.getDefaultForm(),
        showCountdown: true
    }
  },
  computed: {
    isCreate () {
        return !this.getId()
    }
  },
  mounted () {
    this.loadCategories()
    if (this.getId()) {
      this.loadModel()
    }
  },
  methods: {
    async loadCategories () {
        const {data: {data}} = await this.$axios.get('project_categories?all')
        this.parentCategories = data
    },
    async loadModel () {
        const {data: {data}} = await this.$axios.get(`tasks/${this.getId()}`)
        this.form = data
    },
    async toggleCountdown () {
        const {data: {data}} = await this.$axios[this.form.start_time ? 'delete' : 'post'](`tasks/${this.getId()}/countdown`)
        this.form = data
        this.$refs.countdown.$emit('update-task', this.form)
    },
    getId () {
        return this.$route.params.id
    },
    prepareForm() {
      if (this.form.project_category_id == '') {
          delete this.form.project_category_id
      }
    },
    async create () {
        this.prepareForm()
        const {data: {data}} = await this.$axios.post('tasks', this.form)
        this.$router.push({
            name: 'TasksEdit',
            params: {
                id: data.id
            }
        })
        this.showSavedAlert()
    },
      showSavedAlert() {
          this.showSaveAlert = true
          setTimeout(() => this.showSaveAlert = false, 3000)
      },
    async save () {
        this.prepareForm()
        const {data: {data}} = await this.$axios.put(`tasks/${this.getId()}`, this.form)
        this.form = data
        this.showSavedAlert()
    },
    cancel () {
        window.history.back();
    },
    getDefaultForm () {
        return {
            title: '',
            status: 'active',
            project_category_id: '',
            description: ''
        };
    },
    secondsToStringTime (seconds) {
        const second = seconds % 60
        let minute = (seconds - second) / 60 | 0
        const hour = minute / 60 | 0
        minute = minute - (hour * 60)

        return `${this.prepareClockNumber(hour)}:${this.prepareClockNumber(minute)}:${this.prepareClockNumber(second)}`
    },
    stringTimeToSeconds (stringTime) {
        let times = stringTime.split(':')
        times = times.map(parseInt)
        return times[0]*60*60 + times[1]*60 + times[2]
    },
    prepareClockNumber (num) {
        return num < 10 ? '0' + num : num
    },
    addCheckpoint () {
        if (!this.form.checkpoints) {
            this.form.checkpoints = []
        }
        const currentTime = this.form.common_time
        if (this.form.checkpoints.length !== 0 && this.form.checkpoints.length !== 1) {
            this.form.checkpoints[this.form.checkpoints.length-1].end = currentTime
        }
        this.form.checkpoints.push({
            description: 'New one',
            start: currentTime,
            end: currentTime
        })
    },
      updateSeconds (seconds) {
          if (!this.form.checkpoints || this.form.checkpoints.length === 0) {
              return
          }
          this.form.checkpoints[this.form.checkpoints.length-1].end = seconds
      }
  }
}


