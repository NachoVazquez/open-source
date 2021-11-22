import { CardanoConfig } from '../config/config';
import { execSync } from 'child_process';
import { NetworkId } from '../keys/enums/NetworkId';
import { isValidFile, writeOutputFile } from '../keys/files/FileHelper';

export function RunCmd(config: CardanoConfig, command: string) {
  // handle networkId (not always required) ???
  const output = execSync(`${config.cliPath} ${getNetwork(config.networkId)} ${command}`);
  if (config.outputFile && isValidFile(config.outputFile)) {
    writeOutputFile(output, config.outputFile);
  }
  return output;
}

function getNetwork(networkId?: NetworkId) {
  switch (networkId) {
    case NetworkId.Mainnet:
      return 'mainnet';
    case NetworkId.Testnet:
      return 'testnet-magic';
    default:
      return '';
  }
}
