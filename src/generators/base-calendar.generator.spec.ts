import {} from 'jasmine';
import {IEvent} from '../model/event.model';
import {BaseCalendarGenerator, MS_IN_MINUTES} from './base-calendar.generator';
import {TestDates} from './test-dates';

describe('add2Calendar', () => {
    // tslint:disable
    const expected_getTime_ErrorMsgReg = /Cannot read property 'getTime' of/;
    const expected_end_ErrorMsgReg = /Cannot read property 'end' of/;
    const expected_convertToGMT_ErrorMsgReg = /Cannot read property 'convertToGMT' of/;
    const expected_invalidInterval_ErrorMsgReg = /You have to provide either the duration or end/;
    const expectedErrorCannotReadPropertyToISOString =  /Cannot read property 'toISOString' of/;
    // tslint:enable

    describe('base-calendar.generator', () => {
        let model: IEvent;

        let getGenerator: () => BaseCalendarGenerator;

        beforeEach(() => {
            model = {
                end: TestDates._1970_01_02,
                start: TestDates._1970_01_01,
            } as IEvent;
        });

        getGenerator = () => {
            return new BaseTestCalendarGenerator(model);
        };

        describe('constructor', () => {
            it('should assign the start and end dates', () => {
                // Arrange
                const expectedStartDate = TestDates._1970_01_01_ISO;
                const expectedEndDate = TestDates._1970_01_02_ISO;

                // Act
                const generator = getGenerator() as any;

                // Assert
                expect(generator.startTime).toBe(expectedStartDate);
                expect(generator.endTime).toBe(expectedEndDate);
            });
        });

        describe('formatTime', () => {
            it('should format the given time accordingly', () => {
                // Arrange
                const expectedDate = TestDates._1970_01_01_ISO;
                const date = TestDates._1970_01_01;

                // Act
                const formatedDate = (getGenerator() as any).formatTime(date);

                // Assert
                expect(formatedDate).toBe(expectedDate);
            });

            it('should throw a format error if the date is not informed', () => {
                // Arrange
                const generator = getGenerator();

                // Act + Assert
                expect(() => (generator as any).formatTime(null)).toThrowError(expectedErrorCannotReadPropertyToISOString); // tslint:disable-line
                expect((generator as any).formatTime).toThrowError(expectedErrorCannotReadPropertyToISOString);
            });
        });

        describe('calculateEndTime', () => {
            it('should calculate the endTime accordingly if the end time is not provided', () => {
                // Arrange\
                model.end = undefined;
                model.duration = 30;
                const expectedDate = (getGenerator() as any).formatTime(
                    new Date(TestDates._1970_01_01.getTime() + (model.duration * MS_IN_MINUTES)));

                // Act
                const endDate = (getGenerator() as any).calculateEndTime(model);

                // Assert
                expect(endDate).toBe(expectedDate);
            });

            describe('Invalid inputs', () => {

                it('should throw an error for null or undefined entry', () => {
                    expect(
                        (getGenerator() as any).calculateEndTime,
                    ).toThrowError(expected_end_ErrorMsgReg);
                });

                it('should throw an error if the input is an empty object', () => {
                    expect(() =>
                        (getGenerator() as any).calculateEndTime({}),
                    ).toThrowError(expected_invalidInterval_ErrorMsgReg);
                });

                it('should throw an error if input has no start date and no end date', () => {
                    expect(() =>
                        (getGenerator() as any).calculateEndTime({duration: 30}),
                    ).toThrowError(expected_getTime_ErrorMsgReg);
                });

                it('should throw an error if input has no duration and no end date', () => {
                    expect(() =>
                        (getGenerator() as any).calculateEndTime({start: new Date()}),
                    ).toThrowError(expected_invalidInterval_ErrorMsgReg);
                });
            });
        });
    });
});

class BaseTestCalendarGenerator extends BaseCalendarGenerator {
    public href = '';
}
