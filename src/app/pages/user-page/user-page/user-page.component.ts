import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { UserApiClientService } from "../../../shared/user-api-client.service";
import { Observable, Subscription } from "rxjs";
import { User } from "../../../shared/user-type";
import { Filters } from "../../../shared/filters-type";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  constructor(
    private api: UserApiClientService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  users$ = new Observable<User[]>;
  filters: Filters = { query: '', limits: 30};
  subscription = new Subscription()

  ngOnInit(): void {
    this.getFiltersFromUrl();
    this.setTable();
  }

  getFiltersFromUrl(): void {
    this.subscription = this.activateRoute.queryParams.subscribe(params => {
      this.filters.query = params['q'] || '';
      this.filters.limits = +params['limit'] || 30
    });
  }

  useFilters(newFilters: Filters): void {
    this.filters = newFilters;
    this.navigateUrl();
    this.setTable();
  }

  setTable(): void {
    if (this.filters.query === '') {
      this.users$ = this.api.getData('https://dummyjson.com/users')
    } else {
      this.users$ = this.api.getDataWithFilters('https://dummyjson.com/users', this.filters)
    }
  }

  navigateUrl(): void {
    if (this.filters.query === '') {
      this.router.navigate([])
    } else {
      this.router.navigate([],
        {
          relativeTo: this.activateRoute,
          queryParams: {
            q: this.filters.query,
            limit: this.filters.limits
          },
          queryParamsHandling: 'merge'
        })
    }
  }
}
