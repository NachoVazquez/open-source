import { VerificationKeyFile } from "../files/File"

export type VerificationKeyOrFile<KRole> = VerificationKeyValue<KRole> | VerificationKeyFile

type VerificationKeyValue<KRole> = {
    role: KRole
}