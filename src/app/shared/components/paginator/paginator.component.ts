import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Info } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent {
  length: number | undefined;
  pageSize = 20;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  hidePageSize = true;
  showPageSizeOptions = true;
  showFirstLastButtons = false;
  disabled = false;

  @Input('inputPaginator') set paginator(inputPaginator: Info) {
    this.length = inputPaginator.count;
  }

  @Output() onItemAdded = new EventEmitter<number>();

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.onItemAdded.emit(e.pageIndex);
  }
}
