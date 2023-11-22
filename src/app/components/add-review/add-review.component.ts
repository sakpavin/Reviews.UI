import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/entities/review';
import { AppService } from 'src/app/services/appservice.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit  {
 
  addReivewForm: FormGroup | undefined;

  constructor(private appService:AppService)
  {
    
  }
  ngOnInit(): void {
    this.addReivewForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      reviewDescription: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required)
    });
  }

  onSubmit()
  {    
    alert('Hi I am here');
    debugger;
  }

}
