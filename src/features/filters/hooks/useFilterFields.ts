import type { ProductFilterType } from '@/features/filters/model';
import type { FilterSelectValues } from '@/features/filters/model';
import { FILTER_VALUES } from '@/features/filters/config';
import {
  useGetTireFilterWidthQuery,
  useGetTireFilterProfileQuery,
  useGetTireFilterDiameterQuery,
  useGetWheelFilterWidthQuery,
  useGetWheelFilterDiameterQuery,
  useGetWheelFilterCentralBoreDiameterQuery,
  useGetWheelFilterBoltSpacingQuery,
  useGetWheelFilterEtQuery,
  useGetWheelSpacerFilterBoltDistanceQuery,
  useGetWheelSpacerFilterBoltInfoQuery,
  useGetWheelSpacerFilterThicknessQuery,
} from '@/features/filters/api';
import { skipToken } from '@reduxjs/toolkit/query';

export const useFilterFields = (
  filterType: ProductFilterType,
  values: FilterSelectValues,
) => {
  const { fields } = FILTER_VALUES[filterType];
  const isTires = filterType === 'tires';
  const isWheels = filterType === 'wheels';
  const isWheelSpacers = filterType === 'wheelSpacers';

  //для шин
  const { currentData: tireWidths } = useGetTireFilterWidthQuery(
    isTires ? undefined : skipToken,
  );

  const { currentData: tireProfiles } = useGetTireFilterProfileQuery(
    isTires && values.width ? Number(values.width) : skipToken,
  );

  const { currentData: tireDiameters } = useGetTireFilterDiameterQuery(
    isTires && values.width && values.profile
      ? {
          width: Number(values.width),
          profile: Number(values.profile),
        }
      : skipToken,
  );

  //для колес

  const { currentData: wheelWidths } = useGetWheelFilterWidthQuery(
    isWheels ? undefined : skipToken,
  );

  const { currentData: wheelDiameters } = useGetWheelFilterDiameterQuery(
    isWheels && values.width ? Number(values.width) : skipToken,
  );

  const { currentData: wheelCentralBoreDiameters } =
    useGetWheelFilterCentralBoreDiameterQuery(
      isWheels && values.width && values.diameter
        ? {
            width: Number(values.width),
            diameter: Number(values.diameter),
          }
        : skipToken,
    );

  const { currentData: wheelBoltSpacings } = useGetWheelFilterBoltSpacingQuery(
    isWheels && values.width && values.diameter && values.centralBoreDiameter
      ? {
          width: Number(values.width),
          diameter: Number(values.diameter),
          centralBoreDiameter: Number(values.centralBoreDiameter),
        }
      : skipToken,
  );

  const { currentData: wheelEts } = useGetWheelFilterEtQuery(
    isWheels &&
      values.width &&
      values.diameter &&
      values.centralBoreDiameter &&
      values.boltSpacing
      ? {
          width: Number(values.width),
          diameter: Number(values.diameter),
          centralBoreDiameter: Number(values.centralBoreDiameter),
          boltSpacing: values.boltSpacing,
        }
      : skipToken,
  );

  //для спейсеров

  const { currentData: spacerBoltDistances } =
    useGetWheelSpacerFilterBoltDistanceQuery(
      isWheelSpacers ? undefined : skipToken,
    );

  //для спейсеров
  const { currentData: spacerBoltInfos } = useGetWheelSpacerFilterBoltInfoQuery(
    isWheelSpacers && values.boltDistance ? values.boltDistance : skipToken,
  );

  const { currentData: spacerThicknesses } =
    useGetWheelSpacerFilterThicknessQuery(
      isWheelSpacers && values.boltDistance && values.boltInfo
        ? {
            boltDistance: values.boltDistance,
            boltInfo: values.boltInfo,
          }
        : skipToken,
    );

  //Данные для первых хуков

  ///результирующий объект
  const resultFields = fields.map((field) => {
    let options: (string | number)[] | undefined = undefined;

    switch (field.name) {
      case 'width':
        options = isTires ? tireWidths : wheelWidths;
        break;

      case 'profile':
        options = tireProfiles;
        break;

      case 'diameter':
        options = isTires ? tireDiameters : wheelDiameters;
        break;

      case 'centralBoreDiameter':
        options = wheelCentralBoreDiameters;
        break;

      case 'boltSpacing':
        options = wheelBoltSpacings;
        break;

      case 'et':
        options = wheelEts;
        break;

      case 'boltDistance':
        options = spacerBoltDistances;
        break;

      case 'boltInfo':
        options = spacerBoltInfos;
        break;

      case 'thickness':
        options = spacerThicknesses;
        break;

      case 'season':
        return {
          ...field,
          options: field.options ?? [],
          disabled: !values.diameter,
        };
    }

    return {
      ...field,
      options:
        options?.map((value) => ({
          value: String(value),
          label: String(value),
        })) ?? [],
      disabled: !options?.length,
    };
  });

  return resultFields;
};
