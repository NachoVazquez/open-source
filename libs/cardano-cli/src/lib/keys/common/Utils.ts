import { VerifierType } from '../enums/VerifierFileType';
import { VerificationKeyFile } from '../files/File';
import { setVerifierFile } from '../files/FileHelper';
import {
  VerificationKeyOrFile,
  getVerificationKeyValue,
  VerificationKeyValue,
} from '../verification/VerificationKeyOrFile';

function getVerifierKey<TVerifier extends VerifierType>(
  verifierKey: VerificationKeyOrFile<TVerifier>,
  verifierType: TVerifier
) {
  if ((verifierKey as VerificationKeyFile).filePath != undefined) {
    return setVerifierFile(verifierKey as VerificationKeyFile, verifierType);
  }
  return getVerificationKeyValue(verifierKey as VerificationKeyValue<TVerifier>);
}

export { getVerifierKey };
