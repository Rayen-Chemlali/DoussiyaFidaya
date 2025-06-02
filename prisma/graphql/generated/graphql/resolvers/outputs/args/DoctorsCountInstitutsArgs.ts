import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Instituts_medicauxWhereInput } from "../../inputs/Instituts_medicauxWhereInput";

@TypeGraphQL.ArgsType()
export class DoctorsCountInstitutsArgs {
  @TypeGraphQL.Field(_type => Instituts_medicauxWhereInput, {
    nullable: true
  })
  where?: Instituts_medicauxWhereInput | undefined;
}
