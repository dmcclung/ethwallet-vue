import { Web3 } from 'web3';
import * as config from './config';

export const web3 = new Web3(config.JSONRPC_WS_ENDPOINT);

