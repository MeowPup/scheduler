export function getAppointmentsForDay(state, day) {

  let result = [];
  const filteredDays = state.days.filter(days => days.name === day);

  if (!filteredDays[0]) {
    return result;
  } else {
  for (const items of filteredDays[0].appointments) {
    result.push(state.appointments[items]);
   }
  }
  return result;
}