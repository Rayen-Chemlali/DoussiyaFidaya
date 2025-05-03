import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsWhereUniqueInput } from "../../../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;
}
