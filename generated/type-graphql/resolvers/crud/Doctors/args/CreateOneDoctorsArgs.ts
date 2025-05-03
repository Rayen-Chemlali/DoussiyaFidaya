import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsCreateInput } from "../../../inputs/DoctorsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsCreateInput, {
    nullable: false
  })
  data!: DoctorsCreateInput;
}
