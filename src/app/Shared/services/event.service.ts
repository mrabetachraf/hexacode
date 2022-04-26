
 


import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { map } from "rxjs/operators";
import { Event } from "src/app/Shared/models/event.model";

@Injectable({
    providedIn: "root"
})
export class EventService {

    readonly REST_API_SERVER = "http://localhost:8086/SpringMVC/Event"
    
    constructor(private httpService: HttpClient) { }
    
    getAllEvents() {
        return this.httpService.get(`${this.REST_API_SERVER}/get_all_events`).pipe(
            map((res:any) => res));
    }
    
    createEvent(Event: any) {
        return this.httpService.post(`${this.REST_API_SERVER}/add_event`, Event);
    }
    
    updateEvent(id: number, value: Event) {
        return this.httpService.put(`${this.REST_API_SERVER}/update_event/${id}`, value);
    }
    
    deleteEvent(id: any) {
        return this.httpService.delete(`${this.REST_API_SERVER}/delete_event/${id}` );
    }
    
    getEventByDepartement(departement: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?departement=" + departement).pipe(
            map((res: Event) => res));
    }
    
    getEventByCreator(creator: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?creator=" + creator).pipe(
            map((res: Event) => res));
    }
    
    getEventByEndDate(endDate: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?endDate=" + endDate).pipe(
            map((res: Event) => res));
    }
    
    getEventByImage(image: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?image=" + image).pipe(
            map((res: Event) => res));
    }
    
    getEventByLocation(location: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?location=" + location).pipe(
            map((res: Event) => res));
    }
    
    getEventByNote(note: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?note=" + note).pipe(
            map((res: Event) => res));
    }
    
    getEventByParticipantsNumber(participantsNumber: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?participantsNumber=" + participantsNumber).pipe(
            map((res: Event) => res));
    }
    
    getEventByStartDate(startDate: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?startDate=" + startDate).pipe(
            map((res: Event) => res));
    }
    
    getEventByStatus(status: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?status=" + status).pipe(
            map((res: Event) => res));
    }
    
    getEventByTitle(title: string): Observable<Event> {
        return this.httpService.get(this.REST_API_SERVER + "?title=" + title).pipe(
            map((res: Event) => res));
    }
    
}