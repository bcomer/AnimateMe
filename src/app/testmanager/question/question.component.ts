import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../models/question';
import { HoganSelectService } from '../../services/hogan-select.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  Question: Question;  

  constructor(private service: HoganSelectService) { }

  ngOnInit() {
    this.Question = {id: 1, answer: 'bu', body: 'stuff', nextQuestionId: 2};
  }
}
