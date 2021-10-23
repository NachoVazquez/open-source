import { CardanoConfig } from '../../config/config';
import { OutputFile } from '../files/File';

export function OutputMiddleware(config: CardanoConfig, outputFile?: OutputFile) {
  if (outputFile && !config.outputFile) config.outputFile = outputFile;
}
