import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxCreateInput } from "../../../inputs/Instituts_medicauxCreateInput";
import { Instituts_medicauxUpdateInput } from "../../../inputs/Instituts_medicauxUpdateInput";
import { Instituts_medicauxWhereUniqueInput } from "../../../inputs/Instituts_medicauxWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneInstituts_medicauxArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereUniqueInput, {
    nullable: false
  })
  where!: Instituts_medicauxWhereUniqueInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxCreateInput, {
    nullable: false
  })
  create!: Instituts_medicauxCreateInput;

  @TypeGraphQL.Field(_type => Instituts_medicauxUpdateInput, {
    nullable: false
  })
  update!: Instituts_medicauxUpdateInput;
}
