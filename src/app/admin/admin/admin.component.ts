import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  logout()
  {
    let conf=confirm('Yakin ingin keluar aplikasi ?');
    if(conf)
    {
      localStorage.removeItem('appToken');
      this.router.navigate(['/login']);
    }
  }
}
