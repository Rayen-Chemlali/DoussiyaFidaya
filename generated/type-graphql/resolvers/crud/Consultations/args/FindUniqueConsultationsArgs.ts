import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsWhereUniqueInput } from "../../../inputs/ConsultationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsWhereUniqueInput, {
    nullable: false
  })
  where!: ConsultationsWhereUniqueInput;
}
