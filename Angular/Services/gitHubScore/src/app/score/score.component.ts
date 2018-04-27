import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  score = 0;


  constructor(private gitHubService: GitHubService) { }

  ngOnInit() {
    this.gitHubService.score$.subscribe(num => {
      this.score = num;
    });
  }

}
