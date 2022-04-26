
 


import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from "src/app/shared/models/user.model"
import { UserService } from "src/app/shared/services/user.service"

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    users: User[];
    formGroup: FormGroup;
    editUser: boolean;
    selectedRow: number;
    hasError: boolean;
    
    constructor(private formBuilder: FormBuilder,
        private userService: UserService
    ) { }
    
    ngOnInit() {
        this.hasError = false;
        this.editUser = false;
        this.selectedRow = -1;
        this.getAllUsers().subscribe(users => {
            this.users = users;
        });
        this.formGroup = this.formBuilder.group({
                    id: ["", []],
                  
                    name: ["", []],
                    lastname: ["", []],
                    username: ["", []],
                    password: ["", []],
                    email: ["", []],
                    dob: ["", []],
                    photoprofile: ["", []],
                    headline: ["", []],
                    currentPosition: ["", []],
                    education: ["", []],
                    location: ["", []],
                    contactInfo: ["", []],
                    experience: ["", []],
                    points: ["", []],
                    culturalPoints: ["", []],
                    sportPoints: ["", []],
                    artPoints: ["", []],
                    professionelPoints: ["", []],
                    resetpasswordtoken: ["", []]
        });
    }
    
    createUser(form: FormGroup) {
        if(!this.formGroup.valid) {
            this.hasError = true;
            return;
        }
        return this.userService.createUser(form.value).subscribe(user => this.ngOnInit());
    }
    
    updateUser(form: FormGroup) {
        this.userService.updateUser(form.value.id, form.value).subscribe(user => this.ngOnInit());
    }
    
    deleteUser(form: FormGroup) {
        return this.userService.deleteUser(form.value.id).subscribe(user => this.ngOnInit());
    }
    
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    
    onRowSelect(index: number, user: User) {
        this.selectedRow = index;
        this.editUser = true;
        this.formGroup.setValue(user);
    }
    
    cancelEdit() {
        this.selectedRow = -1;
        this.editUser = false;
        this.formGroup.reset();
    }
    

    

}