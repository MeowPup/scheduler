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
};

export function getInterview(state, interview) {
  if (!interview) return null;
  const newObj = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return newObj;
}
export function getInterviewersForDay(state, day) {
  let interviewersForThatDay = [];

  const interviewerObject = state.days.find((element) => {
    return element.name === day;
  });

  if (!interviewerObject) {
    return [];
  }

  interviewersForThatDay = interviewerObject.interviewers.map((element) => {
    return state.interviewers[element];
  });

  return interviewersForThatDay;
}