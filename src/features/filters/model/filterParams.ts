//Tires
export type TireDiameterParams = {
  profile: number;
  width: number;
};

//Wheels
export type WheelCentralBoreDiameterParams = {
  width: number;
  diameter: number;
};

export type WheelBoltSpacingParams = {
  width: number;
  diameter: number;
  centralBoreDiameter: number;
};

export type WheelEtParams = {
  width: number;
  diameter: number;
  centralBoreDiameter: number;
  boltSpacing: string;
};

//Spacers

export type WheelSpacerThicknessParams = {
  boltDistance: string;
  boltInfo: string;
};
