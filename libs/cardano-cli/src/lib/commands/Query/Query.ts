import { ConsensusMode } from '../../keys/enums/ConsensusMode';

export function queryTip(parameters: QueryTipParameter) {
  return `query tip ${getMode(parameters.consensusMode)}`;
}

function getMode(mode: ConsensusMode) {
  switch (mode) {
    case ConsensusMode.ByronMode:
      return 'byron-mode';
    case ConsensusMode.ShelleyMode:
      return 'shelley-mode';
    case ConsensusMode.CardanoMode:
      return 'cardano-mode';
    default:
      return '';
  }
}

type QueryTipParameter = {
  consensusMode: ConsensusMode;
};
export { QueryTipParameter };
