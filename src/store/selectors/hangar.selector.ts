import { AppState } from '../state/index';
import { createSelector } from '@ngrx/store';
import { HangarState } from '../state/hangar.state';

export const selectHangar = (state: AppState) => state.hangar;

export const selectHangarList = createSelector(
  selectHangar,
  (state: HangarState) => state.hangars.content
);
