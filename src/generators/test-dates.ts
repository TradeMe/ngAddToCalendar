export class TestDates {

    // tslint:disable
    public static _1970_01_01: Date;
    public static _1970_01_02: Date;
    public static _1970_01_01_ISO: string;
    public static _1970_01_02_ISO: string;
    // public static _1970_01_01_ISO_W_TZ: string;
    // public static _1970_01_02_ISO_W_TZ: string;

    private static _constructor: void = (() => {
        TestDates._1970_01_01 = new Date(Date.UTC(1970, 1, 1));
        TestDates._1970_01_02 = new Date(Date.UTC(1970, 1, 2));
        TestDates._1970_01_01_ISO = "19700201T000000Z";
        TestDates._1970_01_02_ISO = "19700202T000000Z";
        // TestDates._1970_01_01_ISO_W_TZ = "19700131T110000+1300";
        // TestDates._1970_01_02_ISO_W_TZ = "19700201T110000+1300";
    })();
    // tslint:enable
}
