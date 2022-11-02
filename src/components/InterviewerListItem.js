import React from 'react';
import './InterviewerListItem.scss';
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  const interviewerImageClass = classNames("interviewers__item-image", {
    "interviewers__item-image": props.selected
  });

  return (
    <li className={interviewClass} onClick={props.setInterviewer}>
  <img
    className={interviewerImageClass}
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>
  )
}