import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxUpdateInput } from "../../../inputs/Instituts_medicauxUpdateInput";
import { Instituts_medicauxWhereUniqueInput } from "../../../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateInput, {
    nullable: false
  })
  data!: Instituts_medicauxUpdateInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;
}
