import { HangarEffects } from './hangar.effect';
import { ProductEffects } from './product.effect';
import { RouterEffects } from './router.effects';
import { CommerceEffects } from './commerce.effect';
import { SecurityEffects } from './security.effect';
import { ErrorEffects } from './error.effect';

export const effects: any[] = [ 
  HangarEffects, 
  ProductEffects,
  CommerceEffects,
  RouterEffects,
  SecurityEffects,
  ErrorEffects
];
