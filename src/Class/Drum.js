export default class Drum {
    constructor(name, soundUrl) {
        this.name = name;
        this.soundUrl = soundUrl;
    }
    getDrum() {
        return {
            name: this.name,
            url: this.soundUrl
        }
    }
}
