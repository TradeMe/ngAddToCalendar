export interface ICalendarEvent {
    // Event title
    title: string;
    // Event start date
    start: Date;
    // Event duration (IN MINUTES)
    duration: number;
    // You can also choose to set an end time
    // If an end time is set, this will take precedence over duration
    end?: Date;
    // Event Address
    address?: string;
    // Event Description
    description?: string;
    url?: string;
}
