import { getAddressKeyType } from '../../keys/common/Parser';
import { AddressKeyType } from '../../keys/enums/KeyType';
import { VerifierType } from '../../keys/enums/VerifierFileType';
import { SigningKeyFile, VerificationKeyFile } from '../../keys/files/File';
import { setSigningKeyFile, setVerifierFile } from '../../keys/files/FileHelper';

function addressKeyGen(parameters: AddressKeyGenParams) {
  return `address key-gen ${getAddressKeyType(parameters.addressKeyType)} ${setVerifierFile(
    parameters.verificationKeyFile,
    VerifierType.Default
  )} ${setSigningKeyFile(parameters.signingKeyFile)}`;
}

type AddressKeyGenParams = {
  addressKeyType: AddressKeyType;
  signingKeyFile: SigningKeyFile;
  verificationKeyFile: VerificationKeyFile;
};

export { addressKeyGen, AddressKeyGenParams };
