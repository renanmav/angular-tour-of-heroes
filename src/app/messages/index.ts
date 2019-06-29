import { Component, OnInit } from "@angular/core";

import { MessageService } from "services/message";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.html",
  styleUrls: ["./messages.scss"]
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit() {}
}
