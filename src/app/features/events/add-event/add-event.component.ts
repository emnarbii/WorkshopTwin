import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../shared/validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent {
  eventForm!: FormGroup;

  constructor() {
    this.eventForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      date: new FormControl('', [Validators.required,futurDateValidator(7)]),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$'),
      ]),
      nbrPlace: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$'),
      ]),
      lieu: new FormControl('', [Validators.required]),
      urlImage: new FormControl(''),
      nbLikes:new FormControl('0'),
      organisedId: new FormControl('1')
    });
  }

  ngOnInit() {
    //this.eventForm = FormGroup([]);
  }

  get title() {
    return this.eventForm.get('title');
  }
  get description() {
    return this.eventForm.get('description');
  }

  onSubmit() {
    return console.log(this.eventForm.value);
  }
}
