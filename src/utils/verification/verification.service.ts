import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma.service';
import { generateOtp } from '../opt.util';

@Injectable()
export class VerificationService {
  private readonly minRequestIntervalMinutes = 1;
  private readonly tokenExpirationMinutes = 15;

  constructor(private readonly prisma: PrismaService) {}

  async generateOtp(userId: string, size = 6, salt: string): Promise<string> {
    const now = new Date();

    // find recent token for the user
    const recentToken = await this.prisma.verification_tokens.findFirst({
      where: {
        userId,
        createdAt: {
          gte: new Date(now.getTime() - this.minRequestIntervalMinutes * 60 * 1000),
        },
      },
    });

    if (recentToken) {
      throw new UnprocessableEntityException(
        'Please wait a minute before requesting a new token.',
      );
    }

    const otp = generateOtp(size);
    const hashedToken = await bcrypt.hash(otp, salt);

    //Delete any previous token(s) for this user
    await this.prisma.verification_tokens.deleteMany({
      where: { userId },
    });

    //Save new token
    await this.prisma.verification_tokens.create({
      data: {
        userId,
        token: hashedToken,
        createdAt: now,
        expireAt: new Date(now.getTime() + this.tokenExpirationMinutes * 60 * 1000),
      },
    });

    return otp;
  }

  async validateOtp(userId: string, token: string , salt : string): Promise<boolean> {
    const now = new Date();

    const validToken = await this.prisma.verification_tokens.findFirst({
      where: {
        userId,
        expireAt: {
          gt: now,
        },
      },
    });

    const hachedToken = await bcrypt.hash(token, salt);
    if (!validToken) {
      
      throw new UnprocessableEntityException('Token expired or not found.');
    }
    if(hachedToken !== validToken.token) {
      await this.prisma.verification_tokens.update(
        {
          where: { id: validToken.id },
          data: { numberofTries: validToken.numberofTries + 1 }, // Increment the number of tries
        },
      )
      return false;
    }

    
    await this.prisma.verification_tokens.delete({
        where: { id: validToken.id },
    });

    return true;
    
  }

  // Optional: Clean up expired tokens
  async cleanUpExpiredTokens(): Promise<void> {
    await this.prisma.verification_tokens.deleteMany({
      where: {
        expireAt: {
          lt: new Date(),
        },
      },
    });
  }
}
