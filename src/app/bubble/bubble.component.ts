import { AfterViewChecked, Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  @Input() public top = 300;
  @Input() public left = 100;
  @Input() public size = 100;

  public offsetX = 0;
  public offsetY = 0;
  public step: number;

  constructor() {
    this.step = Math.floor(Math.random() * 300);
  }

  ngOnInit(): void {
    setInterval(() => {
      this.step ++;
      this.top += Math.cos(this.step / 300 * 2 * Math.PI);
    }, 15);
  }
  /*
  public getX(): number {
    return this.left + (this.left - window.innerWidth / 2) * this.offsetX;
  }

  public getY(): number {
    return this.top + (this.top - window.innerHeight / 2) * this.offsetY;
  }
  */

  public dimToString(dim: number): string {
    return `${dim}px`;
  }

  public dimToGradient(): string {
    return `radial-gradient(${this.size / 2}px at ${3 * this.size / 4}px ${3 * this.size / 4}px, #FECBE2, #FFF6FB)`;
  }
}
