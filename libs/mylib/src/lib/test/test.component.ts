import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stricttest-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  // Property 'prop' has no initializer and is not definitely assigned in the constructor.ts(2564)
  prop: string; // VSCode display an error here. But I still can compile by nx serve or build

}
