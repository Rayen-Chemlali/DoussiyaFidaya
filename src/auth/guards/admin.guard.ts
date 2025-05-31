import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { users_role_enum } from "@prisma/client";


@Injectable()
export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return user  && user.role.includes(users_role_enum.Admin) ;
    }
}