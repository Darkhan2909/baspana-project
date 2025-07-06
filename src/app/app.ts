import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { SearchPool } from './pages/search-pool/search-pool';
import { HoverDirective } from './shared/directives/hover.directive';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet,HoverDirective],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'baspana-project';
}
