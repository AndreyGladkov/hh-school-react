export default class ApiService {
    _apiBase = 'http://localhost:9200/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getLogs(rid) {
        return this.getResource(`/logs?rid=${rid}`);
    }

    getLucky() {
        return this.getResource(`/feelinglucky`)
    }
}