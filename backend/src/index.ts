import { Controller } from "./Controller/Controller";

export class Backend {

    start() {

        const controller = new Controller;
        controller.start();

    }

}

new Backend().start();
