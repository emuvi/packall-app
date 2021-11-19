import {
    QinColumn, QinField, QinLine, QinInteger, QinPath, QinBoolean, QinString
} from "qinpel-cps/types/all"
import { QinFilesNature } from "qinpel-res/types/all";

class PackAll extends QinColumn {

    private qinLine: QinLine = new QinLine();
    private qinBody: QinField = new QinField("Body", new QinPath(QinFilesNature.DIRECTORIES));
    private qinSpeed: QinField = new QinField("Speed", new QinInteger());
    private qinClean: QinField = new QinField("Clean", new QinBoolean());
    private qinFeed: QinField = new QinField("Feed", new QinPath());

    public constructor() {
        super();
        this.qinLine.install(this);
        this.qinBody.install(this.qinLine);
        this.qinSpeed.install(this.qinLine);
        this.qinClean.install(this.qinLine);
        this.qinFeed.install(this.qinLine);
    }

}

new PackAll().putAsBody();