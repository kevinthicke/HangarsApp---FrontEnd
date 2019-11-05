import { trigger, transition, animate, keyframes, style, AnimationTriggerMetadata } from '@angular/animations';

export let fadeOutLeft: AnimationTriggerMetadata = trigger('fadeOutLeft', [
  transition('* => void', [
    animate('1000ms ease-out', keyframes([
        style({
          offset: 0,
          opacity: 1
        }),
        style({
          offset: 1,
          opacity: 0,
          transform: 'translate3d(-100%, 0, 0)'
        })
      ])
    )
  ])
]);
