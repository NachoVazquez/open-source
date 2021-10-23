// import { NetworkId } from "../../keys/enums/NetworkId";
// import { OutputFile, ScriptFile } from "../../keys/files/File";
// import { PaymentVerifier } from "../../keys/verifier/PaymentVerifier";
// import { StakeVerifier } from "../../keys/verifier/StakeVerifier";

// type AddressCmd =
//   | AddressBuild
//   | AddressBuildMultiSig
//   | AddressInfo;

// const renderAddressCmd = (addressCmd: AddressCmd) => {
//   if (addressCmd as AddressBuild) return 'address build';
//   if (addressCmd as AddressBuildMultiSig) return 'address build-script';
//   if (addressCmd as AddressInfo) return 'address info';
// };

// type AddressBuild = {
//   paymentVerifier: PaymentVerifier;
//   stakeVerifier?: StakeVerifier;
//   networkId: NetworkId;
//   outputFile?: OutputFile;
// };

// type AddressBuildMultiSig = {
//   scriptFile: ScriptFile;
//   networkId: NetworkId;
//   outputFile?: OutputFile;
// };

// type AddressInfo = {
//   text: string;
//   outputFile?: OutputFile;
// };

// export {
//   AddressCmd,
//   renderAddressCmd,
//   AddressBuild,
//   AddressBuildMultiSig,
//   AddressInfo,
// };
