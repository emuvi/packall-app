import { Qinpel } from "qinpel-app/types/qinpel"
// @ts-ignore
const qinpel = window.frameElement.qinpel as Qinpel;

import { QinLine, QinPath } from "qinpel-cps/all"

class PackAll extends QinLine {

    private qinBody = new QinPath();

    public constructor() {
        super();
        this.qinBody.install(this);
    }
    
}

new PackAll().putAsBody();