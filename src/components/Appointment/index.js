import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";
import Form from "./Form.js";
import Confirm from "./Confirm.js";
import Error from "./Error.js";
import useVisualMode from "hooks/useVisualMode";
import Status from './Status';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    // Shows the booked interview after filling out the form or displays error 
   props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE, true));
  }

  // removes the interview or displays error 
  function deleter(interview) {
    transition(DELETING, true);
    props
    .cancelInterview(props.id, interview)
    .then(() => transition(EMPTY))
    .catch(() => transition(ERROR_DELETE, true));
  }

  return (
    <article className="appointment"
    data-testid="appointment"
    >
      <Header time={props.time} />
      { mode === SHOW &&
      (<Show 
      student={props.interview.student} 
      interviewer={props.interview.interviewer}
      onDelete={() => transition(CONFIRM)}
      onEdit={() => transition(EDIT)}
      />)}
      { mode === EMPTY &&  
      (<Empty 
      onAdd={() => transition(CREATE)}
      />)}
      { mode === CREATE && 
      (<Form
      student={props.interview && props.interview.student}
      interviewer={props.interview && props.interview.interviewer.id}
      interviewers={props.interviewers}
      onCancel={back}
      onSave={save}
    />)}
       { mode === EDIT && 
      (<Form
      student={props.interview && props.interview.student}
      interviewer={props.interview && props.interview.interviewer.id}
      interviewers={props.interviewers}
      onCancel={() => transition(SHOW)}
      onSave={save}
    />)}
    { mode === SAVING && 
    (<Status
    message="Saving"
    />)}
    { mode === DELETING && 
     (<Status message="Deleting" 
    />)}
    { mode === CONFIRM &&
    (<Confirm message="Confirm deletion?"
    onConfirm={() => deleter()}
    onCancel={() => back()}
    />)}
    { mode === ERROR_SAVE && 
    (<Error message="Could not save appointment" onClose={back}
    />)}
     { mode === ERROR_DELETE && 
    (<Error message="Could not delete appointment" onClose={back}
    />)}
    </article>
  )
}