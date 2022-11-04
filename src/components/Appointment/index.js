import React from 'react';
import "./styles.scss";
import Header from "./Header.js";
import Show from "./Show.js";
import Empty from "./Empty.js";
import Form from "./Form.js";
import useVisualMode from "hooks/useVisualMode";
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time} />
      { mode === SHOW &&
      <Show 
      student={props.interview.student} 
      interviewer={props.interview.interviewer}
      />}
      { mode === EMPTY &&  
      <Empty 
      onAdd={() => transition(CREATE)}
      />}
      { mode === CREATE && 
      <Form 
      interviewers={[]}
    />}
    </article>
  )
}