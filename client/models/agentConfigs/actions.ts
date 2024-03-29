import * as agentTypes from 'client/models/agents/types';
import * as actionTypes from './actionTypes';
import type * as types from './types';

export const fetchAgentConfig = () => ({
  type: actionTypes.FETCH_AGENT_CONFIGS,
});

export const fetchAgentConfigError = (error: string) => ({
  type: actionTypes.FETCH_AGENT_CONFIGS_ERROR,
  error,
});

export const commitAgentConfig = (
  agentID: agentTypes.AgentID,
  config: types.AgentConfig
) => ({
  type: actionTypes.COMMIT_AGENT_CONFIG,
  agentID,
  config,
});

export const updateProperty = (
  agentID: agentTypes.AgentID,
  key: string,
  value: string
) => ({
  type: actionTypes.UPDATE_PROPERTY,
  agentID,
  key,
  value,
});

export const loadAgentConfigs = (
  configs: ReadonlyArray<types.AgentConfig>
) => ({
  type: actionTypes.LOAD_AGENT_CONFIGS,
  configs,
});
