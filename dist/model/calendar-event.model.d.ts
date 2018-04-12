export interface ICalendarEvent {
    title: string;
    start: Date;
    duration: number;
    end?: Date;
    address?: string;
    description?: string;
    url?: string;
}
