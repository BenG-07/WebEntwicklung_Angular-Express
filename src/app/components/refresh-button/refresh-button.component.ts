import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent implements OnInit {

  @Input()
  public buttonCaption = '';
  @Input()
  public disabled = false;

  @Output()
  public onClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  handleButtonClick($event: MouseEvent) {
    this.onClick.emit();
  }
}
