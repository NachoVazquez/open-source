import { CardanoCLI } from '../lib/client';
import { ConsensusMode } from '../lib/keys/enums/ConsensusMode';
import { AddressKeyType } from '../lib/keys/enums/KeyType';
import { NetworkId } from '../lib/keys/enums/NetworkId';

// Address Key Gen cmd
const cardanoCLI = new CardanoCLI({
  networkId: NetworkId.Mainnet,
  cliPath: 'cardano-cli',
});

cardanoCLI.addressKeyGen({
  addressKeyType: AddressKeyType.AddressKeyShelley,
  signingKeyFile: { filePath: 'test.txt' },
  verificationKeyFile: { filePath: 'test.txt' },
});

cardanoCLI.run();

// Query Tip cmd
cardanoCLI.queryTip({
  consensusMode: ConsensusMode.ByronMode,
});

cardanoCLI.run();
