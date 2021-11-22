import { ScriptFileType } from '../../keys/enums/ScriptFileType';
import { ScriptFile } from '../../keys/files/File';
import { setScriptFile } from '../../keys/files/FileHelper';

function addressBuildMultiSig(parameter: AddressBuildMultiSigParams) {
  return `address build-script ${setScriptFile(parameter.scriptFile, ScriptFileType.Default)}`;
}

type AddressBuildMultiSigParams = {
  scriptFile: ScriptFile;
};

export { addressBuildMultiSig, AddressBuildMultiSigParams };
