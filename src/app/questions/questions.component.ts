import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddThemeComponent } from '../add-theme/add-theme.component';
import { AddLevelComponent } from '../level/add-level/add-level.component';
import { Theme } from '../Model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  dialogRef: any;
  themes: Theme[];

  constructor(private dialog: MatDialog, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(themes => {
      this.themes = themes;
    });
  }

  public openRegister() {
    this.dialogRef = this.dialog.open(AddThemeComponent, {
      width: '420px'
    });
  }

  addLevel(id: number) {
    this.dialogRef = this.dialog.open(AddLevelComponent, {
      width: '420px',
      data: {id}
    });
  }
}
