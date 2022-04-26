import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/modal/add-dialog/add-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tags = ['angular','jee','template','html5'];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('tags',this.tags);
    localStorage.setItem('id-user','2')
  }
  openDialog(){
    const DIALOGREF = this.dialog.open(AddDialogComponent, {
      width : '830px',
      data: {
        id: 2
      }
    });
    DIALOGREF.afterClosed().subscribe(rst => {
      console.log(rst)
     
      
    })
  }

}
