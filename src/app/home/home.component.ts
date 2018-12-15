import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  // Capture variables
  public currentStageCode: string;
  public previousStageCode: string;

  // Display variables
  public stage = {};

  // Display control variables
  public showStageDetails: boolean;

  ngOnInit() {
    this.onResetClick();
  }

  public onStageCodeFeed() {
    const validstage:boolean = this.homeService.validateStageCodes(this.currentStageCode, this.previousStageCode);
    if(validstage===true) {
      this.displayCurrentstage();
    } else {
      this.resetCurrentStage();
    }
  }

  private displayCurrentstage(){
    this.stage = this.homeService.getStageByCode(this.currentStageCode);
    this.showStageDetails = true;
  }

  private resetCurrentStage(){
    this.showStageDetails = false;
    this.stage = {};
  }

  public onResetClick(){
    this.resetCurrentStage();
    this.currentStageCode = '';
    this.previousStageCode = '';
  }

}
