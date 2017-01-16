import { Component } from '@angular/core';
import { TranslateService } from '/home/martina/Documents/projects/firmo-frontend/node_modules/ng2-translate/ng2-translate';
import { TodoService } from './todo.service';
import {Subscription} from "rxjs";
import { environment } from "../environments/environment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {

    private subscription: Subscription;

    constructor(private translate: TranslateService/*, private activateRoute: ActivateRoute*/){
        translate.addLangs(environment.availableLanguages);
        translate.setDefaultLang(environment.language);

        // let browserlang = translate.getBrowserLang();
        // translate.use(browserlang.match(/en|fr/) ? browserlang : "en");
        //translate.use("en");

    }

    changeLanguage(lang){
          this.translate.use(lang);
       }

       /*ngOnInit(){
        this.subscription = this.activateRoute.queryParams.subscribe(
            (param: any) => {
                let locale = param['locale'];
                if(locale !==undefined){
                    this.translate.use(locale);
                }
            }
        )
        }

       ngOnDestroy(){
        this.subscription.unsubscribe();
       }*/


}
