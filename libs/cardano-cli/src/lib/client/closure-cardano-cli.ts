import { addressBuild, AddressBuildParams } from '../commands/Address/AddressBuild';
import { AddressKeyGenParams, addressKeyGen } from '../commands/Address/AddressKeyGen';
import { addressKeyHash, AddressKeyHashParams } from '../commands/Address/AddressKeyHash';
import { QueryTipParameter, queryTip } from '../commands/Query/Query';
import { RunCmd } from '../commands/Run';
import { CardanoConfig } from '../config/config';

export function createCardanoCLI(cardanoConfig: CardanoConfig): CardanoAPI {
  let command = '';
  const config = cardanoConfig;
  function tip(parameter: QueryTipParameter) {
    command = queryTip(parameter);
  }
  function keyGen(parameter: AddressKeyGenParams) {
    command = addressKeyGen(parameter);
  }
  function keyHash(parameter: AddressKeyHashParams) {
    command = addressKeyHash(parameter);
  }
  function addrBuild(parameter: AddressBuildParams) {
    command = addressBuild(parameter);
  }
  function run() {
    RunCmd(config, command);
    command = '';
  }

  return {
    query: {
      tip,
    },
    address: {
      keyGen,
      keyHash,
      build: addrBuild,
    },
    run,
  };
}

interface CardanoAPI {
  query: {
    tip: { (parameter: QueryTipParameter): void };
  };
  address: {
    keyGen: { (parameter: AddressKeyGenParams): void };
    keyHash: { (parameter: AddressKeyHashParams): void };
    build: { (parameter: AddressBuildParams): void };
  };
  run: { (): void };
}
