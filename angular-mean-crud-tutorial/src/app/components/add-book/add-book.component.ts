import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { first } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {

  }
  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.bookForm.controls; }

  field(name: string): AbstractControl | null {
    return this.bookForm.get(name);
  }

  onSubmit(): any {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookForm.invalid) {
      return;
    }

    this.loading = true;

    this.crudService.AddBook(this.bookForm.value)
      .pipe(first())
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
        this.loading = false;
      });
  }
}
