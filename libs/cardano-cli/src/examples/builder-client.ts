import { CommandBuilder } from '../lib/client';
import { ConsensusMode } from '../lib/keys/enums/ConsensusMode';
import { AddressKeyType } from '../lib/keys/enums/KeyType';
import { NetworkId } from '../lib/keys/enums/NetworkId';

// Address Key Gen cmd
CommandBuilder({
  networkId: NetworkId.Testnet,
  cliPath: 'cardano-cli',
})
  .address()
  .keyGen({
    addressKeyType: AddressKeyType.AddressKeyShelley,
    signingKeyFile: { filePath: 'test.txt' },
    verificationKeyFile: { filePath: 'test.txt' },
  })
  .run();

// Query tip Gen cmd
CommandBuilder({
  networkId: NetworkId.Mainnet,
  cliPath: 'cardano-cli',
  outputFile: { filePath: 'output.txt' },
})
  .query()
  .tip({
    consensusMode: ConsensusMode.CardanoMode,
  })
  .run();
