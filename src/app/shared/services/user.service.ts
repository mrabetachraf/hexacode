
 


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { User } from "src/app/shared/models/user.model";
import { Badge } from "../models/badge";

@Injectable({
    providedIn: "root"
})
export class UserService {

    private REST_API_SERVER = "http://localhost:8090/api/"
    
    constructor(private httpService: HttpClient) { }
    
    getAllUsers(): Observable<User[]> {
        return this.httpService.get(this.REST_API_SERVER).pipe(
            map((res: User[]) => res));
    }
    
    createUser(user: User): Observable<User> {
        return this.httpService.post<User>(this.REST_API_SERVER, user);
    }
    
    updateUser(value) {
        return this.httpService.put<User>(this.REST_API_SERVER +"user/update", value);
    }
    addBadgeToUser(name: string): Observable<Badge> {
        return this.httpService.post<any>(this.REST_API_SERVER + "badge/addBadgeToUser/" + name,name);
    }
    // addBadgeToUser(name: string): Observable<Badge> {
    //     return this.httpService.post<any>("http://localhost:8090/badge/addBadgeToUser/b6",name);
    // }

    
    deleteUser(id: number): Observable<User> {
        return this.httpService.delete<User>(this.REST_API_SERVER + id);
    }
    
    getUserById(id: number): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?id=" + id).pipe(
            map((res: User) => res));
    }
    
    getUserByName(name: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "user?username=" + name).pipe(
            map((res: User) => res));
    }
    
    getUserByLastname(lastname: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "user?lastname=" + lastname).pipe(
            map((res: User) => res));
    }
    
    getUserByUsername(username: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?username=" + username).pipe(
            map((res: User) => res));
    }
    
    getUserByPassword(password: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?password=" + password).pipe(
            map((res: User) => res));
    }
    
    getUserByEmail(email: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?email=" + email).pipe(
            map((res: User) => res));
    }
    
    getUserByDob(dob: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?dob=" + dob).pipe(
            map((res: User) => res));
    }
    
    getUserByPhotoprofile(photoprofile: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?photoprofile=" + photoprofile).pipe(
            map((res: User) => res));
    }
    
    getUserByHeadline(headline: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?headline=" + headline).pipe(
            map((res: User) => res));
    }
    
    getUserByCurrentPosition(currentPosition: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?currentPosition=" + currentPosition).pipe(
            map((res: User) => res));
    }
    
    getUserByEducation(education: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?education=" + education).pipe(
            map((res: User) => res));
    }
    
    getUserByLocation(location: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?location=" + location).pipe(
            map((res: User) => res));
    }
    
    getUserByContactInfo(contactInfo: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?contactInfo=" + contactInfo).pipe(
            map((res: User) => res));
    }
    
    getUserByExperience(experience: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?experience=" + experience).pipe(
            map((res: User) => res));
    }
    
    getUserByPoints(points: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?points=" + points).pipe(
            map((res: User) => res));
    }
    
    getUserByCulturalPoints(culturalPoints: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?culturalPoints=" + culturalPoints).pipe(
            map((res: User) => res));
    }
    
    getUserBySportPoints(sportPoints: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?sportPoints=" + sportPoints).pipe(
            map((res: User) => res));
    }
    
    getUserByArtPoints(artPoints: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?artPoints=" + artPoints).pipe(
            map((res: User) => res));
    }
    
    getUserByProfessionelPoints(professionelPoints: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?professionelPoints=" + professionelPoints).pipe(
            map((res: User) => res));
    }
    
    getUserByResetpasswordtoken(resetpasswordtoken: string): Observable<User> {
        return this.httpService.get(this.REST_API_SERVER + "?resetpasswordtoken=" + resetpasswordtoken).pipe(
            map((res: User) => res));
    }
    
}