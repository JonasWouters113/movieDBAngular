import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() movie!: any;
  @Input() visible: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal() {
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  // When the user clicks anywhere outside of the modal, close it

  //window.onclick = function(event) {
  //  this.showModal = false;
  //  if (event.target == modal) {
  //    modal.style.display = "none";
  //  }
  //}

}
