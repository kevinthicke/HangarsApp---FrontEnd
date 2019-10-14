import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { PaginableHangar } from '../../app/core/models/hangar/paginable-hangar.model';

export interface HangarState {
  hangars: PaginableHangar;
  hangarsName: HangarMinified[];
  pending: boolean;
}
