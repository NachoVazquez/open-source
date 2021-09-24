import { VerificationKeyHash } from "./VerificationKeyHash";
import { VerificationKeyOrFile } from "./VerificationKeyOrFile";

export type VerificationKeyOrHashOrFile<KRole> = VerificationKeyHash | VerificationKeyOrFile<KRole>