import fs = require('fs');
import { getScriptType, getVerifierType } from '../common/Parser';
import { ScriptFileType } from '../enums/ScriptFileType';
import { VerifierType } from '../enums/VerifierFileType';
import { File, VerificationKeyFile, SigningKeyFile, OutputFile, ScriptFile } from './File';

function isValidFile(file: File) {
  return file && fs.existsSync(file.filePath);
}

function writeOutputFile(output: Buffer, outputFile: OutputFile) {
  fs.writeFileSync(outputFile.filePath, output);
}

function setSigningKeyFile(signFile: SigningKeyFile) {
  return isValidFile(signFile) ? `--signing-key-file ${signFile.filePath}` : '';
}

function setVerifierFile(verifierFile: VerificationKeyFile, verifierType: VerifierType) {
  return isValidFile(verifierFile)
    ? `--${getVerifierType(verifierType)}verification-key-file ${verifierFile.filePath}`
    : '';
}

function setScriptFile(scriptFile: ScriptFile, scriptType: ScriptFileType) {
  return isValidFile(scriptFile)
    ? `--${getScriptType(scriptType)}-script-file ${scriptFile.filePath}`
    : '';
}

export { isValidFile, setVerifierFile, setSigningKeyFile, setScriptFile, writeOutputFile };
