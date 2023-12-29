import { Component } from '@angular/core';
import { Car } from '../car.model';
import { CarItemComponent } from './car-item/car-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CarItemComponent, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
cars: Car[] = [
  new Car("Geo", "Prism", 1992, "White", 'https://mercury.bid.cars/1-55017151/1992-GEO-Prizm-1Y1SK5463NZ058407-1.jpg', 500),
  new Car("Honda", "Civic", 1992, "Maroon", 'https://photos.classiccars.com/cc-temp/listing/94/1897/5149963-1992-honda-civic-thumb.jpg', 2000),
  new Car("Buick", "Reatta", 1988, "White", 'https://cdn.dealeraccelerate.com/ag/3/12940/1281717/1920x1440/1988-buick-reatta', 0),
  new Car("Mitsubishi", "Eclipse", 1998, "Red", 'https://th.bing.com/th/id/R.0551b9aa24f46396248cdcb071b62b25?rik=8Njk8lVja9VWOg&riu=http%3a%2f%2fimg.modifiedcartrader.com%2fuploaded%2fXL%2f2011%2f05%2fMitsubishi-Eclipse-GS-T-for-sale-custom-27467-4845.jpg&ehk=jwE5OiO1FDw67KCuNTCDZF4pzgcQUnc8T9pPmr3IeUk%3d&risl=&pid=ImgRaw&r=0', 2000),
  new Car("Nissan", "350z", 2003, "Black", 'https://th.bing.com/th/id/R.1369c4ab45a851c4d877c71d8c2b131f?rik=7ArzCHtm4ph6kw&riu=http%3a%2f%2fimages.dealerrevs.com%2fgallery%2fphoto.php%3fid%3d21813703&ehk=XKxXueOJ01DMy4mTUwKAz04XHLBIoROJWXCGwcOvXjA%3d&risl=&pid=ImgRaw&r=0', 13000),
  new Car("Honda", "Civic", 1988, "Gold", 'https://barnfinds.com/wp-content/uploads/2019/07/1988-Honda-Civic-Wagon-RT4WD-Front-Quarter-1200x900.jpg', 500),
  new Car("Volkswagen", "Golf R", 2013, "Blue", 'https://i.imgur.com/Yc4Jozk.jpg', 23000),
  new Car("Honda", "Cr-Z", 2011, "Black", 'https://www.crzforum.com/forum/attachments/handling-braking-suspension-discussion/1935d1311265526-rear-lowered-crz-lowered-rear-072111.1.jpg', 7000),
]
}
