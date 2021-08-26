import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  faEdit = faEdit;
  faHome=faHome;
  

  searchQuestion($event: any) {
    if ($event.keyCode === 13) {
      $event.preventDefault();
      $event.target.parentElement.submit();
    }
  }
}
