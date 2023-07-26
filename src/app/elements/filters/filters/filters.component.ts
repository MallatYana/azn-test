import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Filters } from "../../../shared/filters-type";
import { FormBuilder, FormGroup } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  @Input() filters: Filters = { query: '', limits: 30 };
  @Output() searchEvent = new EventEmitter<Filters>();

  userForm: FormGroup;
  limits = [5, 10, 15];

  constructor(
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      query: [''],
      limits: ['']
    })
  }

  ngOnInit(): void {
    this.initForm();
    this.userForm.valueChanges.pipe(debounceTime(500)).subscribe(
      (value)=> this.onSubmit())
  }

  initForm(): void {
    this.userForm = this.fb.group({
      query: this.filters.query,
      limits: this.filters.limits
    })
  }

  onSubmit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.searchEvent.emit(this.userForm.value);
  }

  setLimit(limit: number): void {
    this.userForm.value.limits = limit;
    this.onSubmit();
  }
}
