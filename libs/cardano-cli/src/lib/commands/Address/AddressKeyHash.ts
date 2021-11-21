import { getVerifierKey } from '../../keys/common/Utils';
import { VerifierType } from '../../keys/enums/VerifierFileType';
import { VerificationKeyOrFile } from '../../keys/verification/VerificationKeyOrFile';

function addressKeyHash(parameters: AddressKeyHashParams) {
  return `address key-hash ${getVerifierKey(parameters.verifierKey, VerifierType.Payment)}`;
}

type AddressKeyHashParams = {
  verifierKey: VerificationKeyOrFile<VerifierType.Payment>;
};

export { addressKeyHash, AddressKeyHashParams };
