import { Component, OnInit } from '@angular/core';
import { GobletsStockService } from '../../services/goblets-stock.service';
import { GobletsStock } from '../../models/GobletsStock';
import { WaterLevel } from '../../models/WaterLevel';
import { WaterLevelService } from '../../services/water-level.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
    gobletsStockGraphLabel: String = "Stockage des gobelets";
    gobletsNextShortage: Date;
    gobletsStocks: GobletsStock[] = [];

    waterLevelsGraphLabel: String = "Niveau d'eau dans le bac récupérateur";
    waterLevelNextAlert: Date = new Date();
    waterLevels: WaterLevel[] = [];
    
    constructor(
        private _gobletsStockServices: GobletsStockService,
        private _waterLevelService: WaterLevelService
    ) { }

    ngOnInit() {
        this._gobletsStockServices.getGobletsStocks().subscribe(stocks => {
            this.gobletsStocks = stocks;
        });

        this._gobletsStockServices.getNextShortage().subscribe(date => {
            this.gobletsNextShortage = date;
        });

        this._waterLevelService.getWaterLevels().subscribe(levels => {
            this.waterLevels = levels;
        })
    }

}
