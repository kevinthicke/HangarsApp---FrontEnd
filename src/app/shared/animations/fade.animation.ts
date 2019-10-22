import { trigger, transition, style, animate, state, AnimationTriggerMetadata } from '@angular/animations';

export let fade: AnimationTriggerMetadata = trigger('fade', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void => *', [
    animate(200)
  ])
]);
