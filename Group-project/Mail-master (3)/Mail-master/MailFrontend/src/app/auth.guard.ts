import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class  AuthGuard implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoleArray = route.data.user;
        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        let expectedRole: string;
        for (const index in expectedRoleArray) {
            if (userDetails && userDetails.userType === expectedRoleArray[index]){
                expectedRole = expectedRoleArray[index];
            }
        }
        if ( expectedRole === userDetails.userType) {
            console.log('User Authenticated');
            return true;
        } else {
            console.log('User Not Authenticated');
            return false;
        }

    }
}