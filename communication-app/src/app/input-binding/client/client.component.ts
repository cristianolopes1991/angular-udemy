import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() client: Client = {id: 0, name: '', age: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
