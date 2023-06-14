import filterProjects from "./modules/filter.js";
import transitions from "./modules/transitions.js";
export default class App {
    constructor() {
    }
    Load() {
        filterProjects();
        transitions();
    }
}
