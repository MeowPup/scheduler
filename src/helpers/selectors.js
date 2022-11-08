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
let interviewerList = []; 

for (const interviewerDay of state.days) {
  if (interviewerDay.name === day) {
    interviewerList = interviewerDay.interviewers;
  }
};

let finalInterviewerList = interviewerList.map((id) => {
  for (let interviewer in state.interviewers) {
    if (Number(interviewer) === id) {
      return state.interviewers[interviewer];
    }
  }
})
return finalInterviewerList
};