import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet, RoutesRecognized } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'perx-tech';
  showHeader: boolean = true;
  constructor(private route:ActivatedRoute, private router: Router) { 
    this.route.data.subscribe(data => {
      this.showHeader = this.route.snapshot.data['headerEnabled'];
      
    });    
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }

   
}
