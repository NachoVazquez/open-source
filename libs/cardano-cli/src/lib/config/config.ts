import { NetworkId } from '../keys/enums/NetworkId';
import { OutputFile } from '../keys/files/File';

export type CardanoConfig = {
  networkId: NetworkId;
  cliPath: 'cardano-cli';
  outputFile?: OutputFile;
};
