import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorToastService {
  render = false;

  status: number;
  message: string;

  renderize(status: number, message: string): void {
    this.status = status;
    this.message = message;

    this.render = true;

    setTimeout(() => {
      this.render = false;
    }, 7000);
  }

  hide(): void {
    this.render = false;
  }

  getRenderStatus(): boolean {
    return this.render;
  }

  getStatus(): number {
    return this.status;
  }

  getMessage(): string {
    return this.message;
  }
}
