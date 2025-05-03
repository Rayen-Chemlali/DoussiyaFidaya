import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DoctorsUpdateInput } from "../../../inputs/DoctorsUpdateInput";
import { DoctorsWhereUniqueInput } from "../../../inputs/DoctorsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneDoctorsArgs {
  @TypeGraphQL.Field(_type => DoctorsUpdateInput, {
    nullable: false
  })
  data!: DoctorsUpdateInput;

  @TypeGraphQL.Field(_type => DoctorsWhereUniqueInput, {
    nullable: false
  })
  where!: DoctorsWhereUniqueInput;
}
