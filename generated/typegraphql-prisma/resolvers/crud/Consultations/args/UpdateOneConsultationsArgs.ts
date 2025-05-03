import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsUpdateInput } from "../../../inputs/ConsultationsUpdateInput";
import { ConsultationsWhereUniqueInput } from "../../../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsUpdateInput, {
    nullable: false
  })
  data!: ConsultationsUpdateInput;

  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;
}
