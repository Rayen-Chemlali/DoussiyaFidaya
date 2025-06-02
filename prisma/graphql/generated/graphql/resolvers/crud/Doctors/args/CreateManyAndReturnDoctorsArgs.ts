import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsCreateManyInput } from "../../../inputs/DoctorsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnDoctorsArgs {
  @TypeGraphQL.Field(_type => [DoctorsCreateManyInput], {
    nullable: false
  })
  data!: DoctorsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
