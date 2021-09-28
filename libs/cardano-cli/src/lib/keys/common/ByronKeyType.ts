import { ByronKeyFormat } from '../enums/ByronKeyFormat';

export type ByronKeyType = {
  byronPaymentKey: ByronKeyFormat;
  byronGenesisKey: ByronKeyFormat;
  byronDelegateKey: ByronKeyFormat;
};
