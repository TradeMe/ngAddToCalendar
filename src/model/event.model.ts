export class EventModel {
    // Event title
    public title: string;
    // Event start date
    public start: Date;
    // Event duration (IN MINUTES)
    public duration: number;
    // You can also choose to set an end time
    // If an end time is set, this will take precedence over duration
    public end?: Date;
    // Event Address
    public address?: string;
    // Event Description
    public description?: string;
    public url?: string;
}
