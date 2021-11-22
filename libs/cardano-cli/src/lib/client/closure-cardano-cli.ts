import { addressBuild, AddressBuildParams } from '../commands/Address/AddressBuild';
import {
  addressBuildMultiSig,
  AddressBuildMultiSigParams,
} from '../commands/Address/AddressBuildMultiSig';
import { addressInfo, AddressInfoParams } from '../commands/Address/AddressInfo';
import { AddressKeyGenParams, addressKeyGen } from '../commands/Address/AddressKeyGen';
import { addressKeyHash, AddressKeyHashParams } from '../commands/Address/AddressKeyHash';
import { QueryTipParameter, queryTip } from '../commands/Query/Query';
import { RunCmd } from '../commands/Run';
import { CardanoConfig } from '../config/config';

export function createCardanoCLI(cardanoConfig: CardanoConfig): CardanoAPI {
  let command = '';
  const config = cardanoConfig;

  // Address Cmds
  function keyGen(parameter: AddressKeyGenParams) {
    command = addressKeyGen(parameter);
  }
  function keyHash(parameter: AddressKeyHashParams) {
    command = addressKeyHash(parameter);
  }
  function addrBuild(parameter: AddressBuildParams) {
    command = addressBuild(parameter);
  }
  function addrInfo(parameter: AddressInfoParams) {
    command = addressInfo(parameter);
  }
  function addrBuildMultiSig(parameter: AddressBuildMultiSigParams) {
    command = addressBuildMultiSig(parameter);
  }

  // Query Cmds
  function tip(parameter: QueryTipParameter) {
    command = queryTip(parameter);
  }

  // PUBLIC API
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
      info: addrInfo,
      buildMultiSig: addrBuildMultiSig,
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
    info: { (parameter: AddressInfoParams): void };
    buildMultiSig: { (parameter: AddressBuildMultiSigParams): void };
  };
  run: { (): void };
}
