import {} from 'jasmine';

import {EventModel} from '../model/event.model';
import {GOOGLE_URL, GoogleCalendarGenerator} from './google-calendar.generator';
import {TestDates} from './test-dates';

describe('add2Calendar', () => {
    describe('google-calendar.generator', () => {
        describe('href', () => {
            it('should be a valid url', () => {
                // Arrange
                const expected = {
                    address: 'address and space',
                    description: 'description and space',
                    endTime: TestDates._1970_01_02_ISO,
                    startTime: TestDates._1970_01_01_ISO,
                    title: 'title and space',
                };

                const model = {
                    address: expected.address,
                    description: expected.description,
                    end: TestDates._1970_01_02,
                    start: TestDates._1970_01_01,
                    title: expected.title,
                } as EventModel;

                const generator = new GoogleCalendarGenerator(model);

                const expectedUrl = encodeURI(
                    // tslint:disable-next-line
                    `${GOOGLE_URL}&dates=${expected.startTime}/${expected.endTime}&location=${expected.address}&sprop=&text=${expected.title}&details=${expected.description}`,
                );

                // Act
                const url = generator.href;

                // Assert
                expect(url).toBe(expectedUrl);
            });
        });
    });
});
