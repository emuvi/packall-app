import { Qinpel } from "qinpel-app/types/qinpel"
// @ts-ignore
const qinpel = window.frameElement.qinpel as Qinpel;

import { Chooser } from "qinpel-cps/all"

class PackAll {

    private divBody = document.createElement("div");
    private chooser = new Chooser();

    public constructor() {
        this.chooser.install(this.divBody);
    }

    public install(on: HTMLElement) {
        on.appendChild(this.divBody);
    }
}

new PackAll().install(document.body);