import { createCardanoCLI } from '../lib/client';
import { ConsensusMode } from '../lib/keys/enums/ConsensusMode';
import { AddressKeyType } from '../lib/keys/enums/KeyType';
import { NetworkId } from '../lib/keys/enums/NetworkId';

const cardanoCLI2 = createCardanoCLI({
  networkId: NetworkId.Testnet,
  cliPath: 'cardano-cli',
});

cardanoCLI2.address.keyGen({
  addressKeyType: AddressKeyType.AddressKeyShelley,
  signingKeyFile: { filePath: 'test.txt' },
  verificationKeyFile: { filePath: 'test.txt' },
});

cardanoCLI2.run();

cardanoCLI2.query.tip({ consensusMode: ConsensusMode.ShelleyMode });
cardanoCLI2.run();

cardanoCLI2.address.info({ address: 'address-test' });
cardanoCLI2.run();
