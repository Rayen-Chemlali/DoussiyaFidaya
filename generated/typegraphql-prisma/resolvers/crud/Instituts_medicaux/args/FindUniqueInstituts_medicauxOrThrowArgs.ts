import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxWhereUniqueInput } from "../../../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueInstituts_medicauxOrThrowArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;
}
