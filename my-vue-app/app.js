const app = new Vue({
    el: '#app',
    data: {
        activities: [],
        posts: [],
        newActivity: '',
        newPost: '',
        filter: 'all'
    },
    methods: {
        addActivity() {
            if (this.newActivity.trim() !== '') {
                this.activities.push({ text: this.newActivity.trim(), completed: false });
                this.newActivity = '';
            }
        },
        addPost() {
            if (this.newPost.trim() !== '') {
                this.posts.push(this.newPost.trim());
                this.newPost = '';
            }
        },
        toggleActivity(index) {
            this.activities[index].completed = !this.activities[index].completed;
        },
        deleteActivity(index) {
            this.activities.splice(index, 1);
        },
        deletePost(index) {
            this.posts.splice(index, 1);
        },
        setFilter(filterType) {
            this.filter = filterType;
        }
    },
    computed: {
        filteredActivities() {
            if (this.filter === 'unfinished') {
                return this.activities.filter(activity => !activity.completed);
            } else {
                return this.activities;
            }
        }
    }
});
