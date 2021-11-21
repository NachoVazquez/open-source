import { getVerifierKey } from '../../keys/common/Utils';
import { ScriptFileType } from '../../keys/enums/ScriptFileType';
import { VerifierType } from '../../keys/enums/VerifierFileType';
import { setScriptFile } from '../../keys/files/FileHelper';
import { PaymentVerifier } from '../../keys/verifier/PaymentVerifier';
import { StakeVerifier } from '../../keys/verifier/StakeVerifier';

function addressBuild(parameters: AddressBuildParams) {
  return `address build ${getPaymentVerifier(parameters.paymentVerifier)} ${getStakeVerifier(
    parameters.stakeVerifier
  )}`;
}

function getPaymentVerifier(paymentVerifier: PaymentVerifier) {
  return (
    getVerifierKey<VerifierType.Payment>(paymentVerifier.paymentVerifierKey, VerifierType.Payment) +
    setScriptFile(paymentVerifier.paymentVerifierScriptFile, ScriptFileType.Payment)
  );
}

function getStakeVerifier(stakeVerifier?: StakeVerifier) {
  if (stakeVerifier) {
    return (
      getVerifierKey<VerifierType.Stake>(stakeVerifier.stakeVerifierKey, VerifierType.Stake) +
      setScriptFile(stakeVerifier.stakeVerifierScriptFile, ScriptFileType.Stake)
    );
  }
  return '';
}

type AddressBuildParams = {
  paymentVerifier: PaymentVerifier;
  stakeVerifier?: StakeVerifier;
};

export { addressBuild, AddressBuildParams };
