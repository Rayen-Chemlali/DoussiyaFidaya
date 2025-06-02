import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsCreateInput } from "../../../inputs/ConsultationsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsCreateInput, {
    nullable: false
  })
  data!: ConsultationsCreateInput;
}
