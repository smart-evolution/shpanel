// @flow
import * as constants from './constants';

export type Status =
  | typeof constants.STATUS_DISCONNECTED
  | typeof constants.STATUS_PENDING
  | typeof constants.STATUS_CONNECTED;

export type Flag =
  | typeof constants.FLAG_CONNECT
  | typeof constants.FLAG_DISCONNECT
  | null;

export type Message = {
  left: number;
  top: number;
  flag: Flag;
};

export type Action = {
  type: string;
  client: WebSocket;
  status: string;
};

export type State = {
  wsClient: WebSocket;
  status: string;
};

export type GlobalState = {
  proxy: State;
};
