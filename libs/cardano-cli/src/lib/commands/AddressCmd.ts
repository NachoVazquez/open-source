import { AddressKeyType } from '../keys/enums/KeyType';
import { NetworkId } from '../keys/enums/NetworkId';
import {
  KeyFile,
  OutputFile,
  ScriptFile,
  SigningKeyFile,
  VerificationKeyFile,
} from '../keys/files/File';
import { VerificationKeyTextOrFile } from '../keys/verification/VerificationKeyTextOrFile';
import { PaymentVerifier } from '../keys/verifier/PaymentVerifier';
import { StakeVerifier } from '../keys/verifier/StakeVerifier';

type AddressCmd =
  | AddressKeyGen
  | AddressKeyHash
  | AddressBuild
  | AddressBuildMultiSig
  | AddressInfo;

const renderAddressCmd = (addressCmd: AddressCmd) => {
  if (addressCmd as AddressKeyGen) return 'address key-gen';
  if (addressCmd as AddressKeyHash) return 'address address key-hash';
  if (addressCmd as AddressBuild) return 'address build';
  if (addressCmd as AddressBuildMultiSig) return 'address build-script';
  if (addressCmd as AddressInfo) return 'address info';
};

type AddressKeyGen = {
  addressKeyType: AddressKeyType;
  signingKeyFile: SigningKeyFile;
  verificationKeyFile: VerificationKeyFile;
};

type AddressKeyHash = {
  verificationKeyTextOrFile: VerificationKeyTextOrFile;
  outputFile?: OutputFile;
};

type AddressBuild = {
  paymentVerifier: PaymentVerifier;
  stakeVerifier?: StakeVerifier;
  networkId: NetworkId;
  outputFile?: OutputFile;
};

type AddressBuildMultiSig = {
  scriptFile: ScriptFile;
  networkId: NetworkId;
  outputFile?: OutputFile;
};

type AddressInfo = {
  text: string;
  outputFile?: OutputFile;
};

export {
  AddressCmd,
  renderAddressCmd,
  AddressKeyGen,
  AddressKeyHash,
  AddressBuild,
  AddressBuildMultiSig,
  AddressInfo,
};
