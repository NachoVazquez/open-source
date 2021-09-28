import { ByronKeyType } from '../keys/common/ByronKeyType';
import { CardanoAddressKeyType } from '../keys/enums/CardanoAddressKeyType';
import { OutputFile, SigningKeyFile, SomeKeyFile, VerificationKeyFile } from '../keys/files/File';
import { VerificationKeyBase64 } from '../keys/verification/VerificationKeyBase64';

type KeyCmd =
  | KeyGetVerificationKey
  | KeyNonExtendedKey
  | KeyConvertByronKey
  | KeyConvertByronGenesisVKey
  | KeyConvertITNStakeKey
  | KeyConvertITNExtendedToStakeKey
  | KeyConvertITNBip32ToStakeKey
  | KeyConvertCardanoAddressSigningKey;

const renderKeyCmd = (keyCmd: KeyCmd) => {
  if (keyCmd as KeyGetVerificationKey) return 'key verification-key';
  if (keyCmd as KeyNonExtendedKey) return 'key non-extended-key';
  if (keyCmd as KeyConvertByronKey) return 'key convert-byron-key';
  if (keyCmd as KeyConvertByronGenesisVKey) return 'key convert-byron-genesis-key';
  if (keyCmd as KeyConvertITNStakeKey) return 'key convert-itn-key';
  if (keyCmd as KeyConvertITNExtendedToStakeKey) return 'key convert-itn-extended-key';
  if (keyCmd as KeyConvertITNBip32ToStakeKey) return 'key convert-itn-bip32-key';
  if (keyCmd as KeyConvertCardanoAddressSigningKey)
    return 'key convert-cardano-address-signing-key';
};

type KeyGetVerificationKey = {
  signingKeyFile: SigningKeyFile;
  verificationKeyFile: VerificationKeyFile;
};

type KeyNonExtendedKey = {
  verificationKeyFileInput: VerificationKeyFile;
  verificationKeyFileOutput: VerificationKeyFile;
};

type KeyConvertByronKey = {
  text?: string;
  byronKeyType: ByronKeyType;
  someKeyFile: SomeKeyFile;
  outputFile: OutputFile;
};

type KeyConvertByronGenesisVKey = {
  verificationKeyBase64: VerificationKeyBase64;
  outputFile: OutputFile;
};

type KeyConvertITNStakeKey = {
  someKeyFile: SomeKeyFile;
  outputFile: OutputFile;
};

type KeyConvertITNExtendedToStakeKey = {
  someKeyFile: SomeKeyFile;
  outputFile: OutputFile;
};

type KeyConvertITNBip32ToStakeKey = {
  someKeyFile: SomeKeyFile;
  outputFile: OutputFile;
};

type KeyConvertCardanoAddressSigningKey = {
  cardanoAddressKeyType: CardanoAddressKeyType;
  signingKeyFile: SigningKeyFile;
  outputFile: OutputFile;
};

export { KeyCmd, renderKeyCmd };
