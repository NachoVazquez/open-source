type File = {
  filePath: string;
};

type KeyFile = File;
type ScriptFile = File;
type VerificationKeyFile = File;
type OutputFile = File;
type SigningKeyFile = File;
type PaymentVerificationKeyFile = VerificationKeyFile;
type SomeKeyFile = VerificationKeyFile | SigningKeyFile;
type StakeVerificationKeyFile = VerificationKeyFile;

export {
  KeyFile,
  ScriptFile,
  VerificationKeyFile,
  OutputFile,
  SigningKeyFile,
  SomeKeyFile,
  PaymentVerificationKeyFile,
  StakeVerificationKeyFile,
  File,
};
