import { getVerifierType } from '../common/Parser';
import { VerifierType } from '../enums/VerifierFileType';
import { VerificationKeyFile } from '../files/File';

export type VerificationKeyOrFile<KRole extends VerifierType> =
  | VerificationKeyValue<KRole>
  | VerificationKeyFile;

type VerificationKeyValue<KRole> = {
  role: KRole;
  key: string;
};

function getVerificationKeyValue(verificationKeyValue: VerificationKeyValue<VerifierType>) {
  return `--${getVerifierType(verificationKeyValue.role)}verification-key ${
    verificationKeyValue.key
  }`;
}

export { getVerificationKeyValue, VerificationKeyValue };
