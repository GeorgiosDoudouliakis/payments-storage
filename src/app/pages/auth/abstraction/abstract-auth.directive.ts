/* Place your angular imports here */
import { Directive } from '@angular/core';

@Directive()
export abstract class AbstractAuthDirective {
  public abstract pageTitle: string;

  constructor() {}
}
