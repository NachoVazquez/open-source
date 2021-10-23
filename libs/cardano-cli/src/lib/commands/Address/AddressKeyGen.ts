import { AddressKeyType } from '../../keys/enums/KeyType';
import { SigningKeyFile, VerificationKeyFile } from '../../keys/files/File';
import { setVerificationKeyFile, setSigningKeyFile } from '../../keys/files/FileHelper';

function addressKeyGen(parameters: AddressKeyGenParams) {
  return `address key-gen ${getKeyType(parameters.addressKeyType)} ${setVerificationKeyFile(
    parameters.verificationKeyFile
  )} ${setSigningKeyFile(parameters.signingKeyFile)}`;
}

type AddressKeyGenParams = {
  addressKeyType: AddressKeyType;
  signingKeyFile: SigningKeyFile;
  verificationKeyFile: VerificationKeyFile;
};

function getKeyType(type: AddressKeyType) {
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

export { addressKeyGen, AddressKeyGenParams };
