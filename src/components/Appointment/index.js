import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";
import Form from "./Form.js";
import Confirm from "./Confirm.js"
import useVisualMode from "hooks/useVisualMode";
import Status from './Status';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

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

   props.bookInterview(props.id, interview)
    .then(() => transition(SHOW))
  }

  function deleter(interview) {
    transition(DELETING)
    props.cancelInterview(props.id, interview)
    .then(() => transition(EMPTY))
  }

  return (
    <article className="appointment">
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
    </article>
  )
}