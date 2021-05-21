import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomNavigationSelectEvent } from '@progress/kendo-angular-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'KendoForm';

  public items: Array<any> = [];

  constructor(private router: Router) {
      this.items = this.mapItems(router.config);
      this.items[0].selected = true;
  }

  ngOnInit(){
    this.router.navigate([''])
  }

  public onSelect(ev: BottomNavigationSelectEvent): void {
      this.router.navigate([ ev.item.path ]);
  }

  public mapItems(routes: any[]): any[] {
      return routes.map(item => {
          return {
              text: item.text,
              icon: item.icon,
              path: item.path ? item.path : ''
          };
      });
  }

}
