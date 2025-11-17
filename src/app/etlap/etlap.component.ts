import { Component } from '@angular/core';

@Component({
  selector: 'app-etlap',
  standalone: true,
  imports: [],
  templateUrl: './etlap.component.html',
  styleUrl: './etlap.component.css'
})
export class EtlapComponent {

  etlap = [
    { nev: 'Gulyásleves', kategoria: 'Leves', ar: 1890, vega: false },
    { nev: 'Lazacfilé', kategoria: 'Főétel', ar: 4500, vega: false },
    { nev: 'Csokoládétorta', kategoria: 'Desszert', ar: 1200, vega: true },
    { nev: 'Cézársaláta', kategoria: 'Főétel', ar: 2900, vega: false },
    { nev: 'Paradicsomleves', kategoria: 'Leves', ar: 1400, vega: true },
    { nev: 'Sajttorta', kategoria: 'Desszert', ar: 1100, vega: true },
    { nev: 'Marhapörkölt', kategoria: 'Főétel', ar: 3800, vega: false },
    { nev: 'Zöldségkrémleves', kategoria: 'Leves', ar: 1550, vega: true }
  ];

  osszeg = 0;
  ngOnInit() {
    // this.etlap.forEach( (etel: any) =>{
    //   this.osszeg = this.osszeg + etel.ar
    // })
    for(let i=0; i<this.etlap.length; i++) {
      this.osszeg = this.osszeg + this.etlap[i].ar
    }
  }
  
}
