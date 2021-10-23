import { PaymentVerificationKeyFile } from '../../keys/files/File';
import { setVerificationPaymentKeyFile } from '../../keys/files/FileHelper';
import { VerificationKeyTextOrFile } from '../../keys/verification/VerificationKeyTextOrFile';

function addressKeyHash(parameters: AddressKeyHashParams) {
  return `address key-hash ${getVerificationKey(parameters.verificationKeyTextOrFile)}`;
}

function getVerificationKey(verification: VerificationKeyTextOrFile) {
  const fileVerification = verification as PaymentVerificationKeyFile;
  if (fileVerification.filePath != null) return setVerificationPaymentKeyFile(fileVerification);

  return `payment-verification-key ${verification as string}`;
}

type AddressKeyHashParams = {
  verificationKeyTextOrFile: VerificationKeyTextOrFile;
};

export { addressKeyHash, AddressKeyHashParams };
