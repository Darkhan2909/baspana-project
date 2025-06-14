import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { SearchPool } from './pages/search-pool/search-pool';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home,SearchPool, RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'baspana-project';
}
