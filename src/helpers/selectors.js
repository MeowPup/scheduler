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
 const filteredDays = state.days.filter((singleDay) => singleDay.name === day);
 if (state.days.length === 0 || filteredDays.length === 0) {
  return [];
 }

 let formattedInterviewers = [];

 for (let interviewer of Object.values(state.interviewers)) {
  formattedInterviewers.push(state.interviewers[interviewer.id]);
 }
 return formattedInterviewers
}