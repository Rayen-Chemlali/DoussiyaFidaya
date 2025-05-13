import { IsString, IsNotEmpty } from 'class-validator';

export class SseConnectDto {
  @IsString()
  @IsNotEmpty()
  channels: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}