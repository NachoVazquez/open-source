import { VerifierType } from '../enums/VerifierFileType';
import { ScriptFile } from '../files/File';
import { VerificationKeyOrFile } from '../verification/VerificationKeyOrFile';

export type PaymentVerifier = {
  paymentVerifierKey: VerificationKeyOrFile<VerifierType.Payment>;
  paymentVerifierScriptFile: ScriptFile;
};
