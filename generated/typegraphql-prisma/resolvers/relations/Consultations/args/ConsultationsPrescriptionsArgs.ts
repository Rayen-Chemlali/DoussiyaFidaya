import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsWhereInput } from "../../../inputs/PrescriptionsWhereInput";

@TypeGraphQL.ArgsType()
export class ConsultationsPrescriptionsArgs {
  @TypeGraphQL.Field(_type => PrescriptionsWhereInput, {
    nullable: true
  })
  where?: PrescriptionsWhereInput | undefined;
}
