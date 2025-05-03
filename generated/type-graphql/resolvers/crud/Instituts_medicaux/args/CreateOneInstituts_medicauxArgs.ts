import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxCreateInput } from "../../../inputs/Instituts_medicauxCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxCreateInput, {
    nullable: false
  })
  data!: Instituts_medicauxCreateInput;
}
