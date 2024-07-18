/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  AmountDerivationErrors,
  AmountDerivationErrorsInterface,
} from "../../../../seaport-types/src/interfaces/AmountDerivationErrors";

const _abi = [
  {
    inputs: [],
    name: "InexactFraction",
    type: "error",
  },
] as const;

export class AmountDerivationErrors__factory {
  static readonly abi = _abi;
  static createInterface(): AmountDerivationErrorsInterface {
    return new Interface(_abi) as AmountDerivationErrorsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AmountDerivationErrors {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AmountDerivationErrors;
  }
}
