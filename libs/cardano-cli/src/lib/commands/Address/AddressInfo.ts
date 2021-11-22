function addressInfo(parameter: AddressInfoParams) {
  return `address info --address ${parameter.address}`;
}

type AddressInfoParams = {
  address: string;
};

export { addressInfo, AddressInfoParams };
