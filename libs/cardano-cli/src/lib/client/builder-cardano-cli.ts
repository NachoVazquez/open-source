import { addressBuild, AddressBuildParams } from '../commands/Address/AddressBuild';
import { addressInfo, AddressInfoParams } from '../commands/Address/AddressInfo';
import { addressKeyGen, AddressKeyGenParams } from '../commands/Address/AddressKeyGen';
import { AddressKeyHashParams, addressKeyHash } from '../commands/Address/AddressKeyHash';
import { QueryTipParameter, queryTip } from '../commands/Query/Query';
import { RunCmd } from '../commands/Run';
import { CardanoConfig } from '../config/config';

export function CommandBuilder(cardanoConfig: CardanoConfig) {
  let currentCommand = '';
  const config = cardanoConfig;

  function query() {
    return {
      tip,
    };
  }

  function address() {
    return {
      keyHas,
      keyGen,
      build: addrBuild,
      info: addrInfo,
    };
  }

  function tip(parameter: QueryTipParameter) {
    currentCommand = queryTip(parameter);
    return CommandBuilder(config);
  }

  function keyGen(parameter: AddressKeyGenParams) {
    currentCommand = addressKeyGen(parameter);
    return CommandBuilder(config);
  }

  function keyHas(parameter: AddressKeyHashParams) {
    currentCommand = addressKeyHash(parameter);
    return CommandBuilder(config);
  }

  function addrBuild(parameter: AddressBuildParams) {
    currentCommand = addressBuild(parameter);
    return CommandBuilder(config);
  }

  function addrInfo(parameter: AddressInfoParams) {
    currentCommand = addressInfo(parameter);
    return CommandBuilder(config);
  }

  function run() {
    RunCmd(config, currentCommand);
    currentCommand = '';
  }

  return {
    query,
    run,
    address,
  };
}
