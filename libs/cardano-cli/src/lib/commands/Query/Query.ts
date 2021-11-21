import { getConsensusMode } from '../../keys/common/Parser';
import { ConsensusMode } from '../../keys/enums/ConsensusMode';

export function queryTip(parameters: QueryTipParameter) {
  return `query tip ${getConsensusMode(parameters.consensusMode)}`;
}

type QueryTipParameter = {
  consensusMode: ConsensusMode;
};
export { QueryTipParameter };
