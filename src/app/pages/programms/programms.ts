import { Component } from '@angular/core';
import { QuickLinks } from '../home/components/quick-links/quick-links';
import { Users } from "../home/components/users/users";
import { TextLoader } from '../home/components/text-loader/text-loader';
@Component({
  selector: 'app-programms',
  standalone: true,
  imports: [QuickLinks, Users, TextLoader],
  templateUrl: './programms.html',
  styleUrl: './programms.scss'
})
export class Programms {

}
