import { addressBuild, AddressBuildParams } from '../commands/Address/AddressBuild';
import {
  addressBuildMultiSig,
  AddressBuildMultiSigParams,
} from '../commands/Address/AddressBuildMultiSig';
import { addressInfo, AddressInfoParams } from '../commands/Address/AddressInfo';
import { AddressKeyGenParams, addressKeyGen } from '../commands/Address/AddressKeyGen';
import { AddressKeyHashParams, addressKeyHash } from '../commands/Address/AddressKeyHash';
import { queryTip, QueryTipParameter } from '../commands/Query/Query';
import { RunCmd } from '../commands/Run';
import { CardanoConfig } from '../config/config';

export class CardanoCLI {
  command = '';
  cardanoConfig: CardanoConfig;
  constructor(cardanoConfig: CardanoConfig) {
    this.cardanoConfig = cardanoConfig;
  }
  // Address Cmds
  addressKeyGen(parameter: AddressKeyGenParams) {
    this.command = addressKeyGen(parameter);
  }
  addressKeyHash(parameter: AddressKeyHashParams) {
    this.command = addressKeyHash(parameter);
  }
  addressBuild(parameter: AddressBuildParams) {
    this.command = addressBuild(parameter);
  }
  addressInfo(parameter: AddressInfoParams) {
    this.command = addressInfo(parameter);
  }
  addressBuildMultiSig(parameter: AddressBuildMultiSigParams) {
    this.command = addressBuildMultiSig(parameter);
  }

  //Query Cmd
  queryTip(parameter: QueryTipParameter) {
    this.command = queryTip(parameter);
  }
  run() {
    RunCmd(this.cardanoConfig, this.command);
    this.command = '';
  }
}
