export class Time{
    constructor(hours, minutes, seconds){
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    outputScreen(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    addSeconds(secondsAdd){
        const COMPATIBLE_SECONDS = this.seconds + secondsAdd;
        const NEW_SECONDS = COMPATIBLE_SECONDS % 60;
        const MINUTES_ADD = Math.floor(COMPATIBLE_SECONDS / 60);
        this.seconds = NEW_SECONDS;
        this.addMinutes(MINUTES_ADD);
    }

    addMinutes(minutesAdd) {
        const COMPATIBLE_MINUTES = this.minutes + minutesAdd;
        const NEW_MINUTES = COMPATIBLE_MINUTES % 60;
        const HOURS_ADD = Math.floor(COMPATIBLE_MINUTES / 60);
        this.minutes = NEW_MINUTES;
        this.addHours(HOURS_ADD);
    }

    addHours(hoursAdd) {
        const NEW_HOURS = (this.hours + hoursAdd) % 24;
        this.hours = NEW_HOURS;
    }
}