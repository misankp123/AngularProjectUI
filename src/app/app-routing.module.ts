import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './component/console/console.component';
import { CreateBotComponent } from './component/create-bot/create-bot.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditBotComponent } from './component/edit-bot/edit-bot.component';
import { EntitiesComponent } from './component/entities/entities.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { StoriesComponent } from './component/stories/stories.component';
<<<<<<< HEAD
import { UploadFileComponent } from './component/upload-file/upload-file.component';
=======
import { UploadAndCreateComponent } from './component/upload-and-create/upload-and-create.component';
>>>>>>> 0049ca6919a425cbe34634b845238d3375f3c13d
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';
import { WebhooksComponent } from './component/webhooks/webhooks.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path: 'create-bot', component : CreateBotComponent},
  {path: 'edit-bot', component : EditBotComponent},
  {path: 'stories', component : StoriesComponent},
  {path: 'entities', component : EntitiesComponent},
  {path: 'webhooks', component : WebhooksComponent},
<<<<<<< HEAD
  {path: 'console', component : ConsoleComponent},
  {path: 'upload-file', component: UploadFileComponent}
=======
  {path: 'upload', component : UploadAndCreateComponent},
  {path: 'console', component : ConsoleComponent}
>>>>>>> 0049ca6919a425cbe34634b845238d3375f3c13d
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
