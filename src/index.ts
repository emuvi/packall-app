import {
    QinColumn, QinField, QinLine, QinInteger, QinPath, QinBoolean, QinTabs
} from "qinpel-cps"
import { QinFilesNature } from "qinpel-res";

class PackAll extends QinColumn {

    private qinLine: QinLine = new QinLine();
    private qinBody: QinField = new QinField("Body", new QinPath({
        nature: QinFilesNature.DIRECTORIES
    }));
    private qinSpeed: QinField = new QinField("Speed", new QinInteger());
    private qinClean: QinField = new QinField("Clean", new QinBoolean());
    private qinFeed: QinField = new QinField("Feed", new QinPath());

    private lineTabs = new QinLine();
    private qinTabs = new QinTabs({
        initial: [
            {
                title: "Tab 1", viewer: new QinColumn({
                    initial: [
                        new QinField("Speed1", new QinInteger()),
                        new QinField("Clean1", new QinBoolean()),
                        new QinField("Feed1", new QinPath()),
                    ]
                })
            },
            {
                title: "Tab 2", viewer: new QinColumn({
                    initial: [
                        new QinField("Speed2", new QinInteger()),
                        new QinField("Clean2", new QinBoolean()),
                        new QinField("Feed2", new QinPath()),
                    ]
                })
            },
            {
                title: "Tab 3", viewer: new QinColumn({
                    initial: [
                        new QinField("Speed3", new QinInteger()),
                        new QinField("Clean3", new QinBoolean()),
                        new QinField("Feed3", new QinPath()),
                    ]
                })
            },
        ]
    });

    public constructor() {
        super();
        this.qinLine.install(this);
        this.qinBody.install(this.qinLine);
        this.qinSpeed.install(this.qinLine);
        this.qinClean.install(this.qinLine);
        this.qinFeed.install(this.qinLine);
        this.lineTabs.install(this);
        this.qinTabs.install(this.lineTabs);
    }

}

new PackAll().putAsBody();