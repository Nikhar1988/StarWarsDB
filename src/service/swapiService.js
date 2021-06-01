
class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `,received ${res.status}`)
        }
    
        return await res.json();
    }


    getAllPeople() {
        return this.getResourse(`/people/`);
    }

    getPerson(id) {
        return this.getResourse(`/people/${id}`);
    }
}

const swipe = new SwapiService();

swipe.getAllPeople().then(body => console.log(body))