import fs = require('fs');
import {
  File,
  VerificationKeyFile,
  SigningKeyFile,
  PaymentVerificationKeyFile,
  OutputFile,
} from './File';

function isValidFile(file: File) {
  return file && fs.existsSync(file.filePath);
}

function writeOutputFile(output: Buffer, outputFile: OutputFile) {
  fs.writeFileSync(outputFile.filePath, output);
}

function setVerificationKeyFile(keyFile: VerificationKeyFile) {
  return isValidFile(keyFile) ? `--verification-key-file ${keyFile.filePath}` : '';
}

function setSigningKeyFile(signFile: SigningKeyFile) {
  return isValidFile(signFile) ? `--signing-key-file ${signFile.filePath}` : '';
}

function setVerificationPaymentKeyFile(verificationkeyFile: PaymentVerificationKeyFile) {
  return isValidFile(verificationkeyFile)
    ? `payment-verification-key-file ${verificationkeyFile.filePath}`
    : '';
}

export {
  isValidFile,
  setVerificationKeyFile,
  setSigningKeyFile,
  setVerificationPaymentKeyFile,
  writeOutputFile,
};
