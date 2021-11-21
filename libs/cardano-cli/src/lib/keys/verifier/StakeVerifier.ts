import { VerifierType } from '../enums/VerifierFileType';
import { ScriptFile } from '../files/File';
import { VerificationKeyOrFile } from '../verification/VerificationKeyOrFile';

export type StakeVerifier = {
  stakeVerifierKey: VerificationKeyOrFile<VerifierType.Stake>;
  stakeVerifierScriptFile: ScriptFile;
};
