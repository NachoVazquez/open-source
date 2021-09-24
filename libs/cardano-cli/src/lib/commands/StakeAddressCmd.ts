import { NetworkId } from "../keys/enums/NetworkId";
import { RoleKey } from "../keys/enums/RoleKey";
import { OutputFile, SigningKeyFile, VerificationKeyFile } from "../keys/files/File";
import { VerificationKeyOrFile } from "../keys/verification/VerificationKeyOrFile";
import { VerificationKeyOrHashOrFile } from "../keys/verification/VerificationKeyOrHashOrFile";
import { StakeVerifier } from "../keys/verifier/StakeVerifier";

type StakeAddressCmd = StakeAddressKeyGen | StakeAddressKeyHash | StakeAddressBuild | StakeRegistrationCert | StakeCredentialDelegationCert | StakeCredentialDeRegistrationCert

const renderStakeAddressCmd = (stakeAddressCmd: StakeAddressCmd) => {
    if (stakeAddressCmd as StakeAddressKeyGen)
        return "stake-address key-gen"
    if (stakeAddressCmd as StakeAddressKeyHash)
        return "stake-address key-hash"
    if (stakeAddressCmd as StakeAddressBuild)
        return "stake-address build"
    if (stakeAddressCmd as StakeRegistrationCert)
        return "stake-address registration-certificate"
    if (stakeAddressCmd as StakeCredentialDelegationCert)
        return "stake-address delegation-certificate"
    if (stakeAddressCmd as StakeCredentialDeRegistrationCert)
        return "stake-address deregistration-certificate"
}

type StakeAddressKeyGen = {
    verificationKeyFile: VerificationKeyFile
    signingKeyFile: SigningKeyFile
}

type StakeAddressKeyHash = {
    verificationKeyTextOrFile: VerificationKeyOrFile<RoleKey.StakeKey>
    outputFile?: OutputFile
}

type StakeAddressBuild = {
    verificationKeyTextOrFile: VerificationKeyOrFile<RoleKey.StakeKey>
    networkId: NetworkId
    outputFile?: OutputFile
}

type StakeRegistrationCert = {
    stakeVerifier: StakeVerifier
    outputFile: OutputFile
}

type StakeCredentialDelegationCert = {
    stakeVerifier: StakeVerifier
    verificationKeyOrHashOrFile: VerificationKeyOrHashOrFile<RoleKey.StakePoolKey>
    outputFile: OutputFile
}

type StakeCredentialDeRegistrationCert = {
    stakeVerifier: StakeVerifier
    outputFile: OutputFile
}

export { StakeAddressCmd, renderStakeAddressCmd, StakeAddressKeyGen, StakeAddressKeyHash, StakeAddressBuild, StakeRegistrationCert, StakeCredentialDelegationCert, StakeCredentialDeRegistrationCert }