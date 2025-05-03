import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsWhereInput } from "../../../inputs/DoctorsWhereInput";

@TypeGraphQL.ArgsType()
export class UsersDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsWhereInput, {
    nullable: true
  })
  where?: DoctorsWhereInput | undefined;
}
