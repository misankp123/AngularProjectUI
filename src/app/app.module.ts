import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import{FormsModule} from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBotComponent } from './component/create-bot/create-bot.component';
import { EditBotComponent } from './component/edit-bot/edit-bot.component';
import { StoriesComponent } from './component/stories/stories.component';
import { EntitiesComponent } from './component/entities/entities.component';
import { WebhooksComponent } from './component/webhooks/webhooks.component';
import { ConsoleComponent } from './component/console/console.component';
import { Router} from '@angular/router'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent,
    CreateBotComponent,
    EditBotComponent,
    StoriesComponent,
    EntitiesComponent,
    WebhooksComponent,
    ConsoleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:FIREBASE_OPTIONS,useValue:environment.firebase}],
  bootstrap: [AppComponent]
})
export class AppModule { }
