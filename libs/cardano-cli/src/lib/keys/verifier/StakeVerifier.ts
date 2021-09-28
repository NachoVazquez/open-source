import { RoleKey } from '../enums/RoleKey';
import { ScriptFile } from '../files/File';
import { VerificationKeyOrFile } from '../verification/VerificationKeyOrFile';

export type StakeVerifier = StakeVerifierKey | StakeVerifierScriptFile;

type StakeVerifierScriptFile = {
  scriptFile: ScriptFile;
};

type StakeVerifierKey = {
  verificationKeyOrFile: VerificationKeyOrFile<RoleKey.StakeKey>;
};
