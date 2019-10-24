import { Hangar } from '../../app/core/models/hangar/hangar.model';
import { HangarMinifiedPage } from '../../app/core/models/hangar/paginable-minified-hangar.model';

export interface HangarState {
  hangarMinifiedPage: HangarMinifiedPage;
  hangarSelected: Hangar;
  pending: boolean;
}
