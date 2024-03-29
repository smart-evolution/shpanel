import * as actionTypes from './actionTypes';
import type * as types from './types';

export const fetchAgents = () => ({
  type: actionTypes.FETCH_AGENTS,
});

export const loadAgents = (agents: ReadonlyArray<types.Agent>) => ({
  type: actionTypes.LOAD_AGENTS,
  agents,
});

export const fetchAgentsError = (error: string) => ({
  type: actionTypes.FETCH_AGENTS_ERROR,
  error,
});

export const toggleAlerts = () => ({
  type: actionTypes.TOGGLE_ALERTS,
});

export const fetchAlerts = () => ({
  type: actionTypes.FETCH_ALERTS,
});

export const sendAlert = () => ({
  type: actionTypes.SEND_ALERT,
});

export const setAlerts = (isAlerts: boolean) => ({
  type: actionTypes.SET_ALERTS,
  isAlerts,
});

export const toggleType2 = (agentID: string) => ({
  type: actionTypes.TOGGLE_TYPE2,
  agentID,
});

export const sniffAgents = () => ({
  type: actionTypes.SNIFF_AGENTS,
});

export const addAgent = (
  agentID: string,
  agentIP: string,
  agentName: string,
  agentType: string
) => ({
  type: actionTypes.ADD_AGENT,
  agentID,
  agentIP,
  agentName,
  agentType,
});

export const changePeriod = (period: number) => ({
  type: actionTypes.CHANGE_PERIOD,
  period,
});

export const removeAgent = (agentID: string) => ({
  type: actionTypes.REMOVE_AGENT,
  agentID,
});
