import { ScriptFile } from "../files/File";
import { VerificationKeyTextOrFile } from "../verification/VerificationKeyTextOrFile";

export type PaymentVerifier = {
    paymentVerifierKey: VerificationKeyTextOrFile,
    paymentVerifierScriptFile: ScriptFile
}