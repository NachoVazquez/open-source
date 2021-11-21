// import { NetworkId } from "../../keys/enums/NetworkId";
// import { OutputFile, ScriptFile } from "../../keys/files/File";
// import { PaymentVerifier } from "../../keys/verifier/PaymentVerifier";
// import { StakeVerifier } from "../../keys/verifier/StakeVerifier";

// type AddressCmd =
//   | AddressBuildMultiSig
//   | AddressInfo;

// const renderAddressCmd = (addressCmd: AddressCmd) => {
//   if (addressCmd as AddressBuildMultiSig) return 'address build-script';
//   if (addressCmd as AddressInfo) return 'address info';
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
