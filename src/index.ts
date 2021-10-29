import { QinColumn, QinLine, QinPath } from "qinpel-cps"

class PackAll extends QinColumn {

    private qinLine = new QinLine();
    private qinBody = new QinPath();

    public constructor() {
        super();
        this.qinLine.install(this);
        this.qinBody.install(this.qinLine);
    }
    
}

new PackAll().putAsBody();