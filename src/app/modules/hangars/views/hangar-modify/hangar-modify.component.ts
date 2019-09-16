import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HangarService } from '../../../../core/services/hangar.service';
import { Hangar } from '../../../../core/models/hangar.model';
import { Observable } from 'rxjs';

interface CustomObservable extends Observable<Hangar> {
  id: number;
}

@Component({
  selector: 'app-hangar-modify',
  templateUrl: './hangar-modify.component.html',
  styleUrls: ['./hangar-modify.component.less']
})
export class HangarModifyComponent implements OnInit {

  state$: CustomObservable;

  constructor(private route: ActivatedRoute,
              private service: HangarService,
              private router: Router) { }

  ngOnInit() {
    this.state$ = this.route
                      .paramMap
                      .pipe(() => window.history.state) as CustomObservable;
  }

  handleChange(hangar: Hangar) {

    this.service
        .updateHangar(hangar, this.state$.id)
        .subscribe(resp => {
          this.router.navigate(['/hangars']);
        });
  }

}
