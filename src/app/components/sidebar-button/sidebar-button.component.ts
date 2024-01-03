import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  standalone: true,
  styleUrls: ['./sidebar-button.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class SidebarButtonComponent {
  @Input() img!: string;
  @Input() path: string = '';
  @Input() currentPath!: string;
  @Input() isMobile!: boolean;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  get isselected(): boolean {
    return this.isSelected(this.path, this.currentPath);
  }

  text(): string {
    return this.path === '/' ? 'home' : `${this.path.slice(1)}`;
  }

  handleClick(): void {
    this.onClick.emit(this.path);
  }

  private isSelected(_path: string, _currentPath: string): boolean {
    return _currentPath === _path || (_currentPath === '' && _path === '/');
  }
}
