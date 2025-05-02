
import { ObjectType, Field, Int } from '@nestjs/graphql';

 @ObjectType() 
export class InstitutMedical {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
  
}
