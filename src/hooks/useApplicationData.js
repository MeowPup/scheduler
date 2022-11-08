import axios from "axios";
import { useState, useEffect } from "react";

export default function useApplicationData(initial) {
 
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

    // change local state when booking interview
    function bookInterview(id, interview) {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      
      return axios.put(`/api/appointments/${id}`, { interview })
      .then(()=> {
        setState({ ...state, appointments });
      })
    }

    function cancelInterview(id, interview) {
      console.log('bookInterview', id, interview);
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      };
      
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      
      return axios.delete(`/api/appointments/${id}`, { interview })
      .then(()=> {
        setState({ ...state, appointments });
      })
    }

    useEffect(() => {
      Promise.all([
        Promise.resolve(axios.get('http://localhost:8001/api/days')),
        Promise.resolve(axios.get('http://localhost:8001/api/appointments')),
        Promise.resolve(axios.get('http://localhost:8001/api/interviewers'))
      ]).then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
      })
    }, [])

    return { state, setDay, bookInterview, cancelInterview };
}