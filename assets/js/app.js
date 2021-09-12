const app = new Vue({
    el: '#time-tracking-app',
    data: {
        reports: TIME_DATA,
        periods: ['daily', 'weekly', 'monthly'],
        selected_period: 0
    },
    computed: {
        selected_period_adjective: function () {
            return this.periods[this.selected_period].adjective
        },
        selected_period_name: function () {
            return this.periods[this.selected_period].name
        },
    },
    methods: {
        select_period: function (period) {
            this.selected_period = period
        },
        slugify: function (string) {
            return string.split(' ').map(function(word) {return word.toLowerCase()}).join('-')
        }
    },
    filters: {
        hours: function (val) {
            if (val < 1) return 'No time'
            return val > 1 ? val + 'hrs' : val + 'hr'
        }
    }
})