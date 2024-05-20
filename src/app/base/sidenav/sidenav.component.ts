import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavItem } from 'app/base/sidenav/sidenav.model';
import { SidenavService } from 'app/base/sidenav/sidenav.service';
import { SIDENAV_ITEMS } from 'app/base/sidenav/SIDENAV_ITEMS';
import { AuthService } from 'app/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() public lang = 'en';
  @Output() public hovered: EventEmitter<boolean> = new EventEmitter();

  public sidenavItems = SIDENAV_ITEMS.filter(item => !item.hidden);
  private authSubscription: Subscription;

  public Object = Object;

  constructor(
    public readonly sidenavService: SidenavService,
    private readonly router: Router,
    private authService: AuthService
  ) {
   
  }

  ngOnInit(): void {
    this.updateSidenavItems();
    this.authSubscription = this.authService.authStatus$.subscribe(() => {
      this.updateSidenavItems();
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  public onMouseover(hovering: boolean): void {
    this.sidenavService.setExpanded(hovering);
  }

  public onSidenavItemClick(item: SidenavItem, event: Event): void {
    event.preventDefault();
    if (this.sidenavService.getMobileDisplay() && !this.sidenavService.getExpanded()) {
      this.sidenavService.setExpanded(true);
    } else {
      this.navigate(item);
      this.sidenavService.setCurrentEntityName('');
    }
  }

  private updateSidenavItems(): void {
    if (this.authService.isAdmin()) {
      this.sidenavItems = SIDENAV_ITEMS;
    } else {
      this.sidenavItems = SIDENAV_ITEMS.filter(item => item.id !== 'Menu-item-2');
    }
  }

  private navigate(item: SidenavItem): void {
    this.router.navigate([item.link]);
  }
}
