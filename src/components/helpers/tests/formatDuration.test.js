
import { toHoursAndMinutes } from '../../utils/toHoursAndMinutes';
import { formatDuration } from '../../helpers/formatDuration';


test("toHoursAndMinutes", () => {
  expect(formatDuration(toHoursAndMinutes(130))).toBe("02:10");
  expect(formatDuration(toHoursAndMinutes(65))).toBe("01:05");
});
