import { addressBuild, AddressBuildParams } from '../commands/Address/AddressBuild';
import {
  addressBuildMultiSig,
  AddressBuildMultiSigParams,
} from '../commands/Address/AddressBuildMultiSig';
import { addressInfo, AddressInfoParams } from '../commands/Address/AddressInfo';
import { addressKeyGen, AddressKeyGenParams } from '../commands/Address/AddressKeyGen';
import { AddressKeyHashParams, addressKeyHash } from '../commands/Address/AddressKeyHash';
import { QueryTipParameter, queryTip } from '../commands/Query/Query';
import { RunCmd } from '../commands/Run';
import { CardanoConfig } from '../config/config';

export function CommandBuilder(cardanoConfig: CardanoConfig) {
  let currentCommand = '';
  const config = cardanoConfig;

  // Address Cmds
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

  function addrBuildMultiSig(parameter: AddressBuildMultiSigParams) {
    currentCommand = addressBuildMultiSig(parameter);
    return CommandBuilder(config);
  }

  // Query Cmds
  function tip(parameter: QueryTipParameter) {
    currentCommand = queryTip(parameter);
    return CommandBuilder(config);
  }

  // PUBLIC API
  function address() {
    return {
      keyHas,
      keyGen,
      build: addrBuild,
      info: addrInfo,
      buildMultiSig: addrBuildMultiSig,
    };
  }

  function query() {
    return {
      tip,
    };
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
