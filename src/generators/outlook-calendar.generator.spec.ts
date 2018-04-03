import {} from 'jasmine';

import {IEvent} from '../model/event.model';
import {OUTLOOK_BASE_URL, OutlookCalendarGenerator} from './outlook-calendar.generator';
import {TestDates} from './test-dates';

describe('add2Calendar', () => {
    describe('outlook-calendar.generator', () => {
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
                } as IEvent;

                const generator = new OutlookCalendarGenerator(model);

                const expectedUid = 'value';

                spyOnProperty(generator as any, 'uid', 'get').and.returnValue(expectedUid);

                const expectedUrl = encodeURI(
                    // tslint:disable-next-line
                    `${OUTLOOK_BASE_URL}&startdt=${expected.startTime}&enddt=${expected.endTime}&uid=${expectedUid}&location=${expected.address}&subject=${expected.title}&body=${expected.description}`,
                );

                // Act
                const url = generator.href;

                // Assert
                expect(url).toBe(expectedUrl);
            });
        });
    });
});
