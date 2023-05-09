import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-berufs-generator',
  templateUrl: './berufs-generator.component.html',
  styleUrls: ['./berufs-generator.component.scss']
})
export class BerufsGeneratorComponent implements OnInit {
  step: Number = 1
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  nextStep(step: Number) {
    this.step = step
  }
}