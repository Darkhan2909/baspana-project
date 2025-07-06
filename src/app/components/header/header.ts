import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HoverDirective } from '../../shared/directives/hover.directive';
@Component({
  selector: 'app-header',
  imports: [RouterLink,HoverDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
