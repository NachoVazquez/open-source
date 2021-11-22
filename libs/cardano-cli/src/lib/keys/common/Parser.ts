import { ConsensusMode } from '../enums/ConsensusMode';
import { AddressKeyType } from '../enums/KeyType';
import { ScriptFileType } from '../enums/ScriptFileType';
import { VerifierType } from '../enums/VerifierFileType';
function getVerifierType(verificationType: VerifierType) {
  switch (verificationType) {
    case VerifierType.Default:
      return '';
    case VerifierType.Payment:
      return 'payment-';
    case VerifierType.Stake:
      return 'stake-';
  }
}

function getScriptType(type: ScriptFileType) {
  switch (type) {
    case ScriptFileType.Payment:
      return 'payment-';
    case ScriptFileType.Stake:
      return 'stake-';
    case ScriptFileType.Default:
      return '';
  }
}

function getAddressKeyType(type: AddressKeyType) {
  switch (type) {
    case AddressKeyType.AddressKeyShelley:
      return 'normal-key';
    case AddressKeyType.AddressKeyShelleyExtended:
      return 'extended-key';
    case AddressKeyType.AddressKeyByron:
      return 'byron-key';
    default:
      return '';
  }
}

function getConsensusMode(mode: ConsensusMode) {
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

export { getVerifierType, getScriptType, getAddressKeyType, getConsensusMode };
