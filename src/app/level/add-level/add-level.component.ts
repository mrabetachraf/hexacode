import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Level } from 'src/app/Model/Level';
import { LevelService } from 'src/app/service/level.service';

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {
  level: Level = {} as Level;

  constructor(public dialogRef: MatDialogRef<AddLevelComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private levelService: LevelService) { }

  ngOnInit(): void {

  }

  addLevel() {
  this.levelService.addLevel(this.level, this.data.id).subscribe(level => {
    this.level = level;
    window.location.reload();
  });
  }
}
