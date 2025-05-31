import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { config } from "dotenv";
import { Strategy } from "passport-jwt";
import { PrismaService } from 'prisma.service';
import { ExtractJwt } from "passport-jwt";

import { UserPayload } from "../interfaces/payload.interface";

import * as env from 'dotenv';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly configService: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') ?? "defaultSecretKey",
        });
    }
    async validate(payload: UserPayload): Promise<any> {
        console.log("Inside Jwt Stategies : JWT payload: ", payload);
        const user = await this.prismaService.users.findUnique({
            where: {
                id: payload.id,
            }});
        if (!user) {
            throw new UnauthorizedException("User not found after JWT validation");
        }
        //const { password, salt, ...result } = user; 
        return payload;
    }
    
}
