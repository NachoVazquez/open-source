import { VerifierType } from '../enums/VerifierFileType';
import { VerificationKeyHash } from './VerificationKeyHash';
import { VerificationKeyOrFile } from './VerificationKeyOrFile';

export type VerificationKeyOrHashOrFile<KRole extends VerifierType> =
  | VerificationKeyHash
  | VerificationKeyOrFile<KRole>;
