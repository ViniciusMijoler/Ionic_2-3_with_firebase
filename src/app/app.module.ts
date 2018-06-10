import { ProgressBarComponent } from './../components/progress-bar/progress-bar';
import { MessageBoxComponent } from './../components/message-box/message-box';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { UserProvider } from '../providers/user/user';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header';
import { CapitalizePipe } from '../pipes/capitalize/capitalize';
import { ChatPage } from '../pages/chat/chat';
import { ChatProvider } from '../providers/chat/chat';
import { MessageProvider } from '../providers/message/message';
import { UserInfoComponent } from '../components/user-info/user-info';
import { UserMenuComponent } from '../components/user-menu/user-menu';
import { UserProfilePage } from '../pages/user-profile/user-profile';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBGLJ3ORodAvuGaDGDYZ9m_2j5HZIIxQ8w",
  authDomain: "vm-ionic-first-app.firebaseapp.com",
  databaseURL: "https://vm-ionic-first-app.firebaseio.com",
  projectId: "vm-ionic-first-app",
  storageBucket: "vm-ionic-first-app.appspot.com",
  messagingSenderId: "1072774317202"
}

@NgModule({
  declarations: [
    ChatPage,
    CapitalizePipe,
    CustomLoggedHeaderComponent,
    MessageBoxComponent,
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    UserInfoComponent,
    UserMenuComponent,
    UserProfilePage,
    ProgressBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
   ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    MyApp,
    HomePage,
    SignupPage,
    SigninPage,
    UserProfilePage
  ],
  providers: [
    AuthProvider,
    ChatProvider,
    StatusBar,
    SplashScreen,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessageProvider
  ]
})
export class AppModule {}
