import { animate, AnimationTriggerMetadata, keyframes, style, transition, trigger, state } from '@angular/animations';

export let pulse: AnimationTriggerMetadata = trigger('pulse', [
  transition('* <=> *', [
    animate('500ms ease-in-out', keyframes([
      style({
        offset: 0,
        transform: 'scale3d(1, 1, 1)'
      }),
      style({
        offset: 0.5,
        transform: 'scale3d(1.50, 1.50, 1.50)'
      }),
      style({
        offset: 1,
        transform: 'scale3d(1, 1, 1)'
      })
    ]))
  ])
])
