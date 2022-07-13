import { Component } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { slideInAnimation } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'perx-tech';
  showHeader: boolean = true;
  constructor(private router:Router, private contexts: ChildrenOutletContexts) { 
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
       this.showHeader = data?.state?.root?.firstChild?.data["headerEnabled"];
      }
    });    
  }
  
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

   
}
