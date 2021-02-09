class Github {
    constructor() {
        this.client_id = 'a469556ca527ae7ac6d8';
        this.client_secret = 'fbfa7f502d83b6a35c33485f1321b0d856a07ebb';
        this.repost_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repost_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}