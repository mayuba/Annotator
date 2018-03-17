import { Component, OnInit } from '@angular/core';
import { UserManagerService } from './userManager.service';

@Component({
  selector: 'data-table',
  templateUrl: './userManager.component.html',
  styleUrls: ['./userManager.component.scss']
})

export class UserManagerComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

/*
  users = [
      new User('njkbnj', "buy@vujvh.jh", "Sr2AMs0rdXRqI1np7MMo3dVhjXA3", "kjbkjbkjb", "njkbnj")
    ];

    new User(njkbnj: {
      displayName:"njkbnj",
      email: "buy@vujvh.jh",
      id: "Sr2AMs0rdXRqI1np7MMo3dVhjXA3",
      password: "kjbkjbkjb",
      username: "njkbnj"}
    ];
*/
  users: any;
  all:any;

  ngOnInit() {
    this.userService.getAll().subscribe((users) => {
      //this.showSpinner = false;
      this.all = users;
      this.users = this.all;
    })
    console.log(this.users)
    //listAllUsers();
  }

  constructor(private userService: UserManagerService) {

  }
 listAllUsers(nextPageToken) {
  // List batch of users, 1000 at a time.
/*
  admin.auth().listUsers(1000, nextPageToken)
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        console.log("user", userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
*/
  }
}

export interface Element {
  position: number;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA : Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'}
];