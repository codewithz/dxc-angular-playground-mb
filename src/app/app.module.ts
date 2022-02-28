import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComponent } from './mycomponent.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TweetComponent } from './tweet/tweet.component';
import { PanelComponent } from './panel/panel.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { DirectiveSwithcComponent } from './directive-swithc/directive-swithc.component';
import { DirectiveForComponent } from './directive-for/directive-for.component';
import { DirectiveForChangeComponent } from './directive-for-change/directive-for-change.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';
import { InputFormatDirective } from './input-format.directive';
import { InputComponentComponent } from './input-component/input-component.component';
import { StudentComponent } from './student/student.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CourseComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent,
    FavoriteComponent,
    TweetComponent,
    PanelComponent,
    DirectiveIfComponent,
    DirectiveSwithcComponent,
    DirectiveForComponent,
    DirectiveForChangeComponent,
    NgStyleComponent,
    SafeTraversalComponent,
    InputFormatDirective,
    InputComponentComponent,
    StudentComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
