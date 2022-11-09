import React from 'react';
import InterviewerListItem from "components/InterviewerListItem";
import "./InterviewerList.scss";
import PropTypes from "prop-types";

export default function InterviewerList(props) {


  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{props.interviewers.map(interviewer => 
       <InterviewerListItem 
       {...interviewer}
        key={interviewer.id}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    )}
    </ul>
  </section>
  ) 
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}
