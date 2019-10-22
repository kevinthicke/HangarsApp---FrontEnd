import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { HangarMinifiedPage } from '../../app/core/models/hangar/paginable-minified-hangar.model';
import { Hangar } from '../../app/core/models/hangar/hangar.model';

export interface HangarState {
  hangarMinifiedPage: HangarMinifiedPage;
  hangarSelected: Hangar;
  pending: boolean;
}
