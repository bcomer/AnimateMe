import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  Answer: string;
  Body: string = "Dog Fish Taco!";

  constructor() { }

  ngOnInit() {
  }
}
