import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() imageUrl: string='dashboard';
  @Input() pageTitle: string;
  @Input() helpType: string;
  emailSent = false;
  selectedValue: any;
  formShowing = false;
  configData: any={
    fblink:'',
    linkedin:'',
    github:'',
    emailid:'',
  };
  userRole = 'student';
  msgCount$: Observable<any>;

  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
