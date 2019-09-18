import { Page } from 'src/app/core/models/page.model';
import { Hangar } from 'src/app/core/models/hangar.model';

export interface HangarState {
  hangars: Page<Hangar>;
  hangarsName: string[];
  pending: boolean;
  error: any;
}
