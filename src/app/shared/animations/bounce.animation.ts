import { trigger, transition, animate, keyframes, style, AnimationTriggerMetadata } from '@angular/animations';

export let bounceInRight: AnimationTriggerMetadata = trigger('bounceInRight', [
  transition(':enter', [
    animate('1000ms ease-in', keyframes([
      style({
        offset: 0,
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 0,
        transform: 'translate3d(1000px, 0, 0)'
      }),
      style({
        offset: 0.6,
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        opacity: 1,
        transform: 'translate3d(-25px, 0, 0)'
      }),
      style({
        offset: 0.75,
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(10px, 0, 0)'
      }),
      style({
        offset: 0.90,
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(-5px, 0, 0)'
      }),
      style({
        offset: 1,
        'animation-timing-function': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)'
      })
    ]))
  ])
])

export const bounceOutRight: AnimationTriggerMetadata = trigger('bounceOutRight', [
  transition(':leave', [
    animate('1000ms ease-out', keyframes([
      style({
        offset: 0.2,
        opacity: 1,
        transform: 'translate3d(-20px, 0, 0)'
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translate3d(1000px, 0, 0)'
      })
    ]))
  ])
])
