type File = {
  filePath: string;
};

type KeyFile = File;
type ScriptFile = File;
type VerificationKeyFile = File;
type OutputFile = File;
type SigningKeyFile = File;
type SomeKeyFile = VerificationKeyFile | SigningKeyFile;

export { KeyFile, ScriptFile, VerificationKeyFile, OutputFile, SigningKeyFile, SomeKeyFile };
