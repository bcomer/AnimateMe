import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  Questions: Array<Question>;

  constructor() { }

  ngOnInit() {

    // I am not sure if I should navigate to the questions
    // or just feed them into the cards
    

    this.Questions = [
      {id: 1, body: "Fish", answer:"", nextQuestionId:2},
      {id: 2, body: "Dog", answer:"", nextQuestionId:3},
      {id: 3, body: "Taco", answer:"", nextQuestionId:0}
    ]
  }
}
