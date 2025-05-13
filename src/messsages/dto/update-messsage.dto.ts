import { PartialType } from '@nestjs/mapped-types';
import { CreateMesssageDto } from './create-messsage.dto';

export class UpdateMesssageDto extends PartialType(CreateMesssageDto) {
  id: number;
}
