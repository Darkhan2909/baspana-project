import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'baspana-project';
}
