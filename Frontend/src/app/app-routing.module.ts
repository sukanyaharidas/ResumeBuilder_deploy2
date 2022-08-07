import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChooseTemmplateComponent } from './choose-temmplate/choose-temmplate.component';
import { Form1Component } from './form1/form1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { SignupComponent } from './signup/signup.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { AuthGuard } from './auth.guard';
import { EditDataComponent } from './edit-data/edit-data.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MytemplatesComponent } from './mytemplates/mytemplates.component';
import { RoleGuard } from './role.guard';
import { UserGuard } from './user.guard';
import { Temp1linkComponent } from './templink/temp1link/temp1link/temp1link.component';
import { Temp2linkComponent } from './templink/temp2link/temp2link/temp2link.component';
import { Temp3linkComponent } from './templink/temp3link/temp3link/temp3link.component';
import { Temp4linkComponent } from './templink/temp4link/temp4link/temp4link.component';
import { ManageuserComponent } from './manageuser/manageuser.component';

const routes: Routes = [{path:"",component: HomeComponent},
                        {path:"\login",component: LoginComponent},
                        {path:"\signup",component: SignupComponent},
                        {path:"\_temp1",component: Template1Component,canActivate:[AuthGuard,UserGuard]},
                        {path:"\data",component: Form1Component,canActivate:[AuthGuard,UserGuard]},
                        {path:"\_temp2",component:Template2Component,canActivate:[AuthGuard,UserGuard]},
                        {path:"\_temp3",component:Template3Component,canActivate:[AuthGuard,UserGuard]},
                        {path:"\_temp4",component:Template4Component,canActivate:[AuthGuard,UserGuard]},
                        {path:"\home_user",component:UserUIComponent,canActivate:[AuthGuard]},
                        {path:"\Accountsettings",component:AccountsettingsComponent,canActivate:[AuthGuard,RoleGuard]},
                        {path:"\admin",component:AdminLoginComponent},
                        {path:"\choosetemp",component:ChooseTemmplateComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"\data_edit",component:EditDataComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"\myresumes", component:MyProjectComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"\_templates", component:MytemplatesComponent,canActivate:[AuthGuard,RoleGuard]},
                        {path:"temp1link/:id",component:Temp1linkComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"temp2link/:id",component:Temp2linkComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"temp3link/:id",component:Temp3linkComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"temp4link/:id",component:Temp4linkComponent,canActivate:[AuthGuard,UserGuard]},
                        {path:"\manageuser",component:ManageuserComponent,canActivate:[AuthGuard,RoleGuard]}
                        ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
