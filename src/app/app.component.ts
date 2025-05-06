import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Player {
  name: string;
  games: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tournamentUrl: string = '';
  minGames: number = 1;
  players: Player[] = [];
  winner: Player | null = null;
  
  constructor(private http: HttpClient) {}

  fetchPlayers() {
    if (!this.tournamentUrl) return;
  
    const apiUrl = `https://backend-url.workers.dev?tournament=${encodeURIComponent(this.tournamentUrl)}&minGames=${this.minGames}`;
  
    this.http.get<Player[]>(apiUrl).subscribe({
      next: (players) => {
        this.players = players;
        this.winner = null;
      },
      error: (err) => {
        console.error('Error fetching players:', err);
        alert('Failed to fetch players.');
      }
    });
  }
  
  removePlayer(player: Player) {
    this.players = this.players.filter(p => p !== player);
  }

  selectWinner() {
    const randomIndex = Math.floor(Math.random() * this.players.length);
    this.winner = this.players[randomIndex];
  }
}
