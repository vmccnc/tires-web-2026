export type ProductFilterFormValues = Record<
  string,
  string | boolean | string[]
>;

export type FilterSelectValues = {
  width?: string;
  profile?: string;
  diameter?: string;
  centralBoreDiameter?: string;
  boltSpacing?: string;
  et?: string;
  season?: string;
  boltDistance?: string;
  boltInfo?: string;
  thickness?: string;
};
