import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConsultationsWhereInput } from "../../inputs/ConsultationsWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorsCountConsultationsArgs {
  @TypeGraphQL.Field(_type => ConsultationsWhereInput, {
    nullable: true
  })
  where?: ConsultationsWhereInput | undefined;
}
