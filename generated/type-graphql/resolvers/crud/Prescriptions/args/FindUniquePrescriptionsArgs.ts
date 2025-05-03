import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsWhereUniqueInput } from "../../../inputs/PrescriptionsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereUniqueInput, {
    nullable: false
  })
  where!: PrescriptionsWhereUniqueInput;
}
