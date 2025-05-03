import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsCreateInput } from "../../../inputs/ConsultationsCreateInput";
import { ConsultationsUpdateInput } from "../../../inputs/ConsultationsUpdateInput";
import { ConsultationsWhereUniqueInput } from "../../../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ConsultationsCreateInput, {
    nullable: false
  })
  create!: ConsultationsCreateInput;

  @TypeGraphQL.Field(_type => ConsultationsUpdateInput, {
    nullable: false
  })
  update!: ConsultationsUpdateInput;
}
