import {} from 'jasmine';

import {EventModel} from '../model/event.model';
import {MS_IN_MINUTES} from './base-calendar.generator';
import {TestDates} from './test-dates';
import {YAHOO_URL, YahooCalendarGenerator} from './yahoo-calendar.generator';

describe('add2Calendar', () => {
    describe('yahoo-calendar.generator', () => {
        let expected: any;
        let model: EventModel;
        let generator: any;

        beforeEach(() => {
            expected = {
                address: 'address and space',
                description: 'description and space',
                endTime: TestDates._1970_01_02_ISO,
                startTime: TestDates._1970_01_01_ISO,
                title: 'title and space',
            };

            model = {
                address: expected.address,
                description: expected.description,
                end: TestDates._1970_01_02,
                start: TestDates._1970_01_01,
                title: expected.title,
            } as EventModel;

            generator = new YahooCalendarGenerator(model);
        });

        describe('href', () => {
            it('should be a valid url', () => {
                // Arrange
                const expectedUrl = encodeURI(
                    // tslint:disable-next-line
                    `${YAHOO_URL}&st=${generator.startTime}&dur=${generator.getYahooEventDuration()}&in_loc=${expected.address}&url=&title=${expected.title}&desc=${expected.description}`);

                // Act
                const url = generator.href;

                // Assert
                expect(url).toBe(expectedUrl);
            });
        });

        describe('getYahooEventDuration', () => {
            it('should be on the format yahoo expects', () => {
                const expectedYahooEventDuration = '2400';

                const  duration = generator.getYahooEventDuration();

                expect(duration).toBe(expectedYahooEventDuration);
            });
        });
    });
});
