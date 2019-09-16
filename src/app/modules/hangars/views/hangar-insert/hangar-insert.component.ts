import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HangarService } from '../../../../core/services/hangar.service';
import { Hangar } from '../../../../core/models/hangar.model';

@Component({
  selector: 'app-hangar-insert',
  templateUrl: './hangar-insert.component.html',
  styleUrls: ['./hangar-insert.component.less']
})
export class HangarInsertComponent implements OnInit {

  constructor(private service: HangarService, private router: Router) { }

  ngOnInit(): void { }

  handleChange(hangar: Hangar): void {
    this.service
        .postHangar(hangar)
        .subscribe((resp: Hangar) => {
          this.router.navigate(['hangars']);
        });
  }


}
