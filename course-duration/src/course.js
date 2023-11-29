import {env} from "process";

export class Course {
    constructor(name) {
        this.name = name;
        this.durationInMinutes = 0;
    }
    
    start() {
      this.startTime = Date.now();
    }
    
    end() {
        const endTime = Date.now();
        this.durationInMinutes = (endTime - this.startTime) / (1000 * 60);
    }

    isShort() {
      const tenMinutes = 10 * 60;
      return this.durationInMinutes < tenMinutes;
    }
    
    isLong() {
      return !this.isShort();
    }

    getTitle() {
        return `${this.name} course in ${this.#getCollege()} college`;
    }

    #getCollege() {
        return env.college;
    }
}


